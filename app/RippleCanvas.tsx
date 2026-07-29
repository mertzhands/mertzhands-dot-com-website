"use client";

import { useEffect, useRef } from "react";

type Ripple = {
  x: number;
  y: number;
  startedAt: number;
  radius: number;
  seed: number;
};

const DURATION = 2850;
const WAVE_COUNT = 11;
const WAVE_GAP = 11;
const SEGMENTS = 96;

export default function RippleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const ripples: Ripple[] = [];
    let animationFrame = 0;
    let pixelRatio = 1;

    const resize = () => {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * pixelRatio);
      canvas.height = Math.round(window.innerHeight * pixelRatio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const traceWave = (
      ripple: Ripple,
      radius: number,
      irregularity: number,
      phase: number,
    ) => {
      context.beginPath();

      for (let segment = 0; segment <= SEGMENTS; segment += 1) {
        const angle = (segment / SEGMENTS) * Math.PI * 2;
        const wobble =
          Math.sin(angle * 3 + ripple.seed + phase) * irregularity +
          Math.sin(angle * 7 - ripple.seed * 0.7 + phase * 0.55) *
            irregularity *
            0.42 +
          Math.sin(angle * 13 + ripple.seed * 1.3) * irregularity * 0.14;
        const waveRadius = Math.max(1, radius + wobble);
        const x = ripple.x + Math.cos(angle) * waveRadius;
        const y = ripple.y + Math.sin(angle) * waveRadius;

        if (segment === 0) context.moveTo(x, y);
        else context.lineTo(x, y);
      }

      context.closePath();
    };

    const draw = (now: number) => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let index = ripples.length - 1; index >= 0; index -= 1) {
        const ripple = ripples[index];
        const progress = Math.min((now - ripple.startedAt) / DURATION, 1);

        if (progress >= 1) {
          ripples.splice(index, 1);
          continue;
        }

        const eased = 1 - Math.pow(1 - progress, 3);
        const waveFront = 12 + ripple.radius * eased;
        const lifeFade = Math.pow(1 - progress, 1.35);
        const arrival = Math.min(progress / 0.13, 1);
        const visibility = lifeFade * arrival;

        const wash = context.createRadialGradient(
          ripple.x,
          ripple.y,
          Math.max(0, waveFront - WAVE_COUNT * WAVE_GAP - 18),
          ripple.x,
          ripple.y,
          waveFront + 22,
        );
        wash.addColorStop(0, "rgba(255, 255, 255, 0)");
        wash.addColorStop(0.56, `rgba(225, 236, 223, ${0.018 * visibility})`);
        wash.addColorStop(0.78, `rgba(255, 252, 242, ${0.08 * visibility})`);
        wash.addColorStop(0.9, `rgba(58, 75, 63, ${0.055 * visibility})`);
        wash.addColorStop(1, "rgba(73, 89, 68, 0)");
        context.fillStyle = wash;
        context.fillRect(0, 0, window.innerWidth, window.innerHeight);

        context.save();
        context.lineCap = "round";
        context.lineJoin = "round";

        for (let wave = 0; wave < WAVE_COUNT; wave += 1) {
          const radius = waveFront - wave * WAVE_GAP;
          if (radius < 4) continue;

          const wakeDecay = Math.exp(-wave * 0.19);
          const pulse = 0.78 + Math.sin(progress * 15 - wave * 0.82) * 0.22;
          const strength = visibility * wakeDecay * pulse;
          const irregularity = Math.min(3.2, 0.6 + radius * 0.0045);
          const phase = progress * 2.8 - wave * 0.14;

          traceWave(ripple, radius - 1.35, irregularity, phase);
          context.strokeStyle = `rgba(48, 67, 59, ${0.2 * strength})`;
          context.lineWidth = 2.3;
          context.stroke();

          traceWave(ripple, radius + 1.15, irregularity * 0.82, phase + 0.05);
          context.strokeStyle = `rgba(255, 253, 245, ${0.46 * strength})`;
          context.lineWidth = 1.65;
          context.stroke();

          if (wave < 5) {
            traceWave(ripple, radius + 3.2, irregularity * 0.65, phase + 0.1);
            context.strokeStyle = `rgba(190, 214, 204, ${0.11 * strength})`;
            context.lineWidth = 0.85;
            context.stroke();
          }
        }

        context.restore();
      }

      if (ripples.length > 0) {
        animationFrame = window.requestAnimationFrame(draw);
      } else {
        animationFrame = 0;
      }
    };

    const addRipple = (event: PointerEvent) => {
      if (reducedMotion.matches || event.button !== 0) return;

      const farthestX = Math.max(event.clientX, window.innerWidth - event.clientX);
      const farthestY = Math.max(event.clientY, window.innerHeight - event.clientY);

      ripples.push({
        x: event.clientX,
        y: event.clientY,
        startedAt: performance.now(),
        radius: Math.hypot(farthestX, farthestY) * 0.78,
        seed: Math.random() * Math.PI * 2,
      });

      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    const stopAnimation = () => {
      ripples.length = 0;
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    };

    const handleMotionPreference = () => {
      if (reducedMotion.matches) stopAnimation();
    };

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("pointerdown", addRipple, { passive: true });
    reducedMotion.addEventListener("change", handleMotionPreference);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("pointerdown", addRipple);
      reducedMotion.removeEventListener("change", handleMotionPreference);
      stopAnimation();
    };
  }, []);

  return <canvas ref={canvasRef} className="page-ripple" aria-hidden="true" />;
}

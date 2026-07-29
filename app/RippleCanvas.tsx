"use client";

import { useEffect, useRef } from "react";

type Ripple = {
  x: number;
  y: number;
  startedAt: number;
  radius: number;
};

const DURATION = 2600;

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
        const radius = 8 + ripple.radius * eased;
        const fade = Math.pow(1 - progress, 1.65);

        const wash = context.createRadialGradient(
          ripple.x,
          ripple.y,
          Math.max(0, radius - 46),
          ripple.x,
          ripple.y,
          radius + 28,
        );
        wash.addColorStop(0, "rgba(255, 255, 255, 0)");
        wash.addColorStop(0.62, `rgba(255, 248, 232, ${0.025 * fade})`);
        wash.addColorStop(0.78, `rgba(255, 255, 255, ${0.13 * fade})`);
        wash.addColorStop(0.9, `rgba(73, 89, 68, ${0.055 * fade})`);
        wash.addColorStop(1, "rgba(73, 89, 68, 0)");
        context.fillStyle = wash;
        context.fillRect(0, 0, window.innerWidth, window.innerHeight);

        for (let ring = 0; ring < 3; ring += 1) {
          const ringRadius = Math.max(2, radius - ring * 18);
          context.beginPath();
          context.arc(ripple.x, ripple.y, ringRadius, 0, Math.PI * 2);
          context.strokeStyle =
            ring % 2 === 0
              ? `rgba(255, 250, 238, ${0.22 * fade * (1 - ring * 0.2)})`
              : `rgba(71, 84, 65, ${0.09 * fade})`;
          context.lineWidth = Math.max(0.7, 2.2 - ring * 0.55);
          context.stroke();
        }
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
        radius: Math.hypot(farthestX, farthestY) * 0.72,
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

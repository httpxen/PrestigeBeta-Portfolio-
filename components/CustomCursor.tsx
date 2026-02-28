"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import {
  motion,
  useSpring,
  useMotionValue,
  useTransform,
} from "framer-motion";

const CustomCursor = () => {
  const [hoveredEl, setHoveredEl] = useState<HTMLElement | null>(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Slightly heavier / more planted feel
  const springConfig = { damping: 26, stiffness: 240, mass: 0.8 };
  const xSpring = useSpring(mouseX, springConfig);
  const ySpring = useSpring(mouseY, springConfig);

  // Motion values for size & radius → much smoother than animate prop
  const width = useMotionValue(32);
  const height = useMotionValue(32);
  const borderRadius = useMotionValue("50%");
  const borderWidth = useMotionValue("1.5px");
  const bgOpacity = useMotionValue(0);

  const cursorColor = "#fbbf24";

  // Helper to get clean target values
  const getTargetValues = useCallback((el: HTMLElement | null) => {
    if (!el) {
      return {
        w: 32,
        h: 32,
        r: "50%",
        bw: "1.5px",
        op: 0,
      };
    }

    const rect = el.getBoundingClientRect();
    const style = window.getComputedStyle(el);

    return {
      w: rect.width + 12,
      h: rect.height + 12,
      r: style.borderRadius || "8px",
      bw: "2px",
      op: 0.08,
    };
  }, []);

  const onOver = useCallback((e: PointerEvent) => {
    const target = e.target as HTMLElement;
    const el = target.closest(
      'a, button, input, select, textarea, [role="button"], .magnetic, .card, .btn, [data-hover], img, .group'
    ) as HTMLElement | null;

    setHoveredEl(el);
  }, []);

  const onOut = useCallback(() => {
    setHoveredEl(null);
  }, []);

  // Throttle hover state changes a tiny bit (helps when moving very fast over many elements)
  const setHoveredThrottled = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let rafId: number;
    const update = () => {
      if (setHoveredThrottled.current !== hoveredEl) {
        setHoveredThrottled.current = hoveredEl;

        const { w, h, r, bw, op } = getTargetValues(hoveredEl);

        width.set(w);
        height.set(h);
        borderRadius.set(r);
        borderWidth.set(bw);
        bgOpacity.set(op);
      }
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, [hoveredEl, width, height, borderRadius, borderWidth, bgOpacity, getTargetValues]);

  useEffect(() => {
    // Hide default cursor
    const style = document.createElement("style");
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    const onMove = (e: PointerEvent) => {
      requestAnimationFrame(() => {
        if (hoveredEl) {
          const rect = hoveredEl.getBoundingClientRect();
          mouseX.set(rect.left + rect.width / 2);
          mouseY.set(rect.top + rect.height / 2);
        } else {
          mouseX.set(e.clientX);
          mouseY.set(e.clientY);
        }
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { capture: true, passive: true });
    window.addEventListener("pointerout", onOut, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver, true);
      window.removeEventListener("pointerout", onOut);
      document.head.removeChild(style);
    };
  }, [hoveredEl, mouseX, mouseY, onOver, onOut]);

  const isHovering = !!hoveredEl;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Sharp central dot – hides when hovering */}
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full bg-[#fbbf24]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ scale: isHovering ? 0 : 1, opacity: isHovering ? 0 : 1 }}
        transition={{ duration: 0.14, ease: "circOut" }}
      />

      {/* Main yellow ring / frame – now uses motion values */}
      <motion.div
        className="absolute border border-[#fbbf24] pointer-events-none"
        style={{
          x: xSpring,
          y: ySpring,
          translateX: "-50%",
          translateY: "-50%",
          width,
          height,
          borderRadius,
          borderWidth,
          backgroundColor: useTransform(bgOpacity, (o) => `rgba(251, 191, 36, ${o})`),
        }}
      />
    </div>
  );
};

export default CustomCursor;
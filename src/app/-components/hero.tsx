"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  // progres 0→1 selama hero (100vh) bergeser keluar dari layar
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // animasi selesai saat hero baru keluar 50%
  const progress = useTransform(scrollYProgress, [0, 0.5], [0, 1], {
    clamp: true,
  });

  const value = useSpring(progress, {
    damping: 30,
    stiffness: 250,
  });

  const inset = useTransform(value, (v) => Math.max(0, v) * 25);
  const radius = useTransform(value, (v) => Math.max(0, v) * 35);

  return (
    <div ref={ref} className="h-screen w-full">
      <motion.div className="h-full w-full" style={{ padding: inset }}>
        <motion.div
          className="relative h-full w-full overflow-hidden"
          style={{ borderRadius: radius }}
        >
          {/* ukuran video tetap sebesar layar & di tengah; kotak biru hanya "jendela" yang memotong */}
          <video
            className="absolute left-1/2 top-1/2 h-screen w-screen max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
            src="/background.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-8xl font-normal text-white">
            Akmal
          </h1>
        </motion.div>
      </motion.div>
    </div>
  );
}

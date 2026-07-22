"use client";

import { motion, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-64px" }}
      variants={{
        hidden: { opacity: 0, y: reducedMotion ? 0 : 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: reducedMotion ? 0 : 0.5,
            delay: reducedMotion ? 0 : delay,
            ease: "easeOut",
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

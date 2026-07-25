"use client";

import { LazyMotion, m, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

const loadMotionFeatures = () =>
  import("@/components/motion-features").then((module) => module.default);

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <LazyMotion features={loadMotionFeatures} strict>
      <m.div
        className={cn(className)}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

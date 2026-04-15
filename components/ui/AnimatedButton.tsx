"use client";

import { motion } from "motion/react";

import { Button, type ButtonProps } from "@/components/ui/button";

export function AnimatedButton(props: ButtonProps) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="inline-flex"
    >
      <Button {...props} />
    </motion.div>
  );
}

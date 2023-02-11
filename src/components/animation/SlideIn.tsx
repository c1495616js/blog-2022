import { motion } from 'framer-motion';
import React from 'react';

export default function SlideIn({ children }: React.PropsWithChildren<{}>) {
  return (
    <motion.div
      className="relative h-full"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

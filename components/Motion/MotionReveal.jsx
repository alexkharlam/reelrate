import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export function MotionRevealDiv({ duration, className, children }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration,
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function MotionRevealUl({ className, children }) {
  return (
    <AnimatePresence>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
        }}
        className={className}
      >
        {children}
      </motion.ul>
    </AnimatePresence>
  );
}

export function MotionScrollRevealLi({ className, children }) {
  return (
    <motion.li
      initial={{ y: 15, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      // exit={{ opacity: 0 }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.li>
  );
}

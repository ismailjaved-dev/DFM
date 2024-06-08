"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Transition = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const inInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  useEffect(() => {
    if (inInView) {
      mainControls.start("visible");
    }
  }, [inInView]);

  return (
    <div ref={ref} className="overflow-hidden relative">
      <motion.div
        variants={{
          hidden: {
            y: 50,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25, ease: "backInOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Transition;

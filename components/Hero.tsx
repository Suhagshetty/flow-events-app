"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export const Hero = () => {
  return (
    <motion.section
      className="h-[70vh] flex flex-col items-center justify-center text-center px-4"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 text-foreground tracking-tight leading-tight">
        <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent inline-block">
          <Typewriter
            words={["Flow"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        <span className="text-foreground"> – Where Moments Begin</span>
      </h1>

      <motion.p
        className="text-muted-foreground max-w-xl text-lg mt-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Discover events that match your vibe. Stay connected with everything
        happening around you – effortlessly.
      </motion.p>
    </motion.section>
  );
};

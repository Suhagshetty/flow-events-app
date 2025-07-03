"use client";

import React from "react";
import { motion } from "framer-motion";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Aarav S.",
      text: "Flow helped me discover tech meetups I never knew existed!",
    },
    {
      name: "Nisha R.",
      text: "A beautiful platform to find concerts and shows near me.",
    },
    {
      name: "Rahul M.",
      text: "I found a startup pitch night that changed my career!",
    },
  ];

  return (
    <motion.section
      id="testimonials"
      className="py-20 px-4 bg-muted/30 rounded-xl text-center scroll-mt-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-bold mb-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        What People Say
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.name}
            className="p-6 border border-border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 bg-background"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground mb-4 italic">“{t.text}”</p>
            <h4 className="font-semibold text-foreground">{t.name}</h4>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

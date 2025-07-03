"use client";

import React from "react";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h2>

      <motion.form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent!");
        }}
        className="max-w-xl mx-auto space-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-border rounded-md"
          required
          whileFocus={{ scale: 1.02 }}
        />
        <motion.input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-border rounded-md"
          required
          whileFocus={{ scale: 1.02 }}
        />
        <motion.textarea
          placeholder="Your Message"
          rows={5}
          className="w-full p-3 border border-border rounded-md"
          required
          whileFocus={{ scale: 1.02 }}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white rounded-md hover:opacity-90 transition"
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.section>
  );
};

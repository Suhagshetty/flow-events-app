"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="w-full px-6 py-4 flex justify-between items-center border-b backdrop-blur-md sticky top-0 z-50 bg-background/70"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Link href="/" className="flex items-baseline space-x-2">
        <span className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
          Flow
        </span>
      </Link>

      <div className="hidden md:flex gap-6 text-sm font-medium">
        <a href="#events" className="hover:text-violet-500 transition">
          Events
        </a>
        <a href="#testimonials" className="hover:text-violet-500 transition">
          Testimonials
        </a>
        <a href="#contact" className="hover:text-violet-500 transition">
          Contact
        </a>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="text-foreground hover:text-violet-500 transition"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-background shadow-md px-6 py-4 flex flex-col gap-4 md:hidden z-40">
          <a href="#events" className="hover:text-violet-500 transition">
            Events
          </a>
          <a href="#testimonials" className="hover:text-violet-500 transition">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-violet-500 transition">
            Contact
          </a>
        </div>
      )}
    </motion.nav>
  );
};

"use client";

import React from "react";
import { Instagram, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t py-10 px-4 text-center text-sm text-muted-foreground mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
        <div>
          <h4 className="font-semibold text-foreground text-lg mb-2">Flow</h4>
          <p className="text-sm">
            Discover, explore, and experience the best events around you.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground text-lg mb-2">
            Explore
          </h4>
          <ul className="space-y-1">
            {["Events", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="transition duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 hover:text-transparent hover:bg-clip-text"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground text-lg mb-2">
            Follow Us
          </h4>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition transform hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/Suhag_tsx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition transform hover:scale-110"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/suhagshetty07/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition transform hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 text-muted-foreground text-xs text-center">
        © {new Date().getFullYear()} Flow. All rights reserved.
      </div>
      <p>Made with ❤️ by Suhag Shetty</p>
    </footer>
  );
};

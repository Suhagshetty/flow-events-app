"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export const EventCard = ({ event }: { event: any }) => {
  return (
    <motion.article
      className="border border-border p-5 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500 bg-background"
      tabIndex={0}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Link href={`/events/${event.id}`}>
        <motion.h3
          className="text-xl font-semibold mb-2 hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 hover:text-transparent hover:bg-clip-text transition-all duration-300 cursor-pointer"
          whileHover={{ scale: 1.02 }}
        >
          {event.title}
        </motion.h3>
      </Link>

      <p className="text-sm text-muted-foreground mb-2">
        📍 {event.location} &nbsp; | &nbsp; 🗓️ {event.date}
      </p>

      <p className="text-sm text-foreground leading-relaxed">
        {event.description}
      </p>
    </motion.article>
  );
};

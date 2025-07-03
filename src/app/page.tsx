"use client";

import Head from "next/head";
import { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Hero } from "../../components/Hero";
import { Footer } from "../../components/Footer";
import { Contact } from "../../components/Contact";
import { Testimonials } from "../../components/Testimonials";
import { EventCard } from "../../components/EventCard";
import { events } from "@/lib/data";

export default function HomePage() {
  const [selectedLocation, setSelectedLocation] = useState("");

  const filteredEvents = selectedLocation
    ? events.filter((event) => event.location === selectedLocation)
    : events;

  return (
    <>
      <Head>
        <title>Flow | Explore Amazing Events</title>
        <meta
          name="description"
          content="Discover tech, music, and community events near you with Flow."
        />
      </Head>

      <Navbar />
      <Hero />

      <main className="px-4 max-w-6xl mx-auto">
        {/* Filter & Events */}
        <section id="events" className="py-12">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Upcoming Events</h2>
            <select
              className="mt-2 p-2 border rounded-md bg-background"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="">All Locations</option>
              {[...new Set(events.map((e) => e.location))].map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <p className="mt-6 text-center text-muted-foreground">
              No events found for this location.
            </p>
          )}
        </section>

        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

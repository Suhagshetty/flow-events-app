import { notFound } from "next/navigation";
import { events } from "@/lib/data";
import { Metadata } from "next";

export async function generateStaticParams() {
  return events.map((event) => ({ id: event.id }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const event = events.find((e) => e.id === params.id);

  return {
    title: event ? `${event.title} | Flow` : "Event Not Found",
    description: event?.description || "Explore event details on Flow",
  };
}

export default function EventDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const event = events.find((e) => e.id === params.id);

  if (!event) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
        {event.title}
      </h1>
      <p className="text-muted-foreground mb-2">
        📍 {event.location} | 🗓️ {event.date}
      </p>
      <p className="text-lg leading-relaxed mb-6">{event.details}</p>
      <a
        href="/"
        className="text-sm underline hover:text-violet-500 transition"
      >
        ← Back to events
      </a>
    </main>
  );
}

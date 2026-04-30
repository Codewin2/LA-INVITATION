import React from "react";
import { GlassWater, Music, UtensilsCrossed, Heart, Sparkles } from "lucide-react";
import FadeInSection from "../components/wedding/FadeInSection";
import SectionDivider from "../components/wedding/SectionDivider";

const EVENTS_IMAGE = "https://media.base44.com/images/public/69eb543eab87c0588bca8309/16f8b4ae5_generated_10fd321a.png";

const EVENTS = [
  {
    icon: Sparkles,
    title: "Welcome Drinks",
    description:
      "Join us for an intimate welcome cocktail as we gather together on the eve of our celebration.",
    time: "Friday, December 19 · 7:00 PM",
    location: "The Grand Garden Lounge",
  },
  {
    icon: Heart,
    title: "Wedding Ceremony",
    description:
      "Witness our vows as we promise forever, surrounded by the people we love most in this world.",
    time: "Saturday, December 20 · 4:00 PM",
    location: "The Rose Garden",
  },
  {
    icon: GlassWater,
    title: "Cocktail Hour",
    description:
      "Enjoy signature drinks and canapés as we transition from ceremony to celebration.",
    time: "Saturday, December 20 · 5:00 PM",
    location: "The Terrace",
  },
  {
    icon: UtensilsCrossed,
    title: "Reception Dinner",
    description:
      "A seated dinner under the stars, with heartfelt toasts and delicious cuisine.",
    time: "Saturday, December 20 · 6:30 PM",
    location: "The Grand Pavilion",
  },
  {
    icon: Music,
    title: "Dancing & Celebration",
    description:
      "Dance the night away with live music, laughter, and love all around.",
    time: "Saturday, December 20 · 9:00 PM",
    location: "The Grand Pavilion",
  },
];

export default function Events() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          src={EVENTS_IMAGE}
          alt="Wedding reception table"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="relative z-10 text-center">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-3">
            Join Us For
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-light text-foreground">
            The Events
          </h1>
        </div>
      </div>

      {/* Events List */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <FadeInSection className="text-center mb-16">
          <SectionDivider />
          <p className="font-body text-sm text-muted-foreground mt-6 max-w-md mx-auto leading-relaxed">
            A weekend of love, laughter, and unforgettable memories.
            Here's what we have planned for you.
          </p>
        </FadeInSection>

        <div className="space-y-0">
          {EVENTS.map((event, index) => {
            const Icon = event.icon;
            return (
              <FadeInSection key={event.title} delay={index * 0.1}>
                <div className="relative flex gap-6 pb-12 last:pb-0">
                  {/* Timeline Line */}
                  {index < EVENTS.length - 1 && (
                    <div className="absolute left-5 top-12 bottom-0 w-px bg-border" />
                  )}

                  {/* Icon */}
                  <div className="relative z-10 w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="font-heading text-2xl text-foreground mb-1">
                      {event.title}
                    </h3>
                    <p className="font-body text-xs tracking-widest uppercase text-accent mb-3">
                      {event.time}
                    </p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                    <p className="font-body text-xs text-muted-foreground mt-2 italic">
                      {event.location}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </section>
    </div>
  );
}
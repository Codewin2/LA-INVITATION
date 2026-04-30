import React from "react";
import { Clock } from "lucide-react";
import FadeInSection from "../components/wedding/FadeInSection";
import SectionDivider from "../components/wedding/SectionDivider";

const FRIDAY_SCHEDULE = [
  { time: "5:00 PM", event: "Guest Check-in", detail: "The Grand Garden Estate" },
  { time: "7:00 PM", event: "Welcome Drinks & Mingling", detail: "The Grand Garden Lounge" },
  { time: "9:00 PM", event: "Evening at Leisure", detail: "" },
];

const SATURDAY_SCHEDULE = [
  { time: "12:00 PM", event: "Bridal Brunch", detail: "The Terrace (Bridal Party Only)" },
  { time: "2:00 PM", event: "Getting Ready", detail: "Respective Suites" },
  { time: "3:30 PM", event: "Guest Seating Begins", detail: "The Rose Garden" },
  { time: "4:00 PM", event: "Wedding Ceremony", detail: "The Rose Garden" },
  { time: "5:00 PM", event: "Cocktail Hour", detail: "The Terrace" },
  { time: "6:30 PM", event: "Reception & Dinner", detail: "The Grand Pavilion" },
  { time: "8:00 PM", event: "Cake Cutting & Toasts", detail: "The Grand Pavilion" },
  { time: "9:00 PM", event: "First Dance & Party", detail: "The Grand Pavilion" },
  { time: "12:00 AM", event: "Sparkler Send-Off", detail: "The Grand Entrance" },
];

function ScheduleDay({ title, subtitle, items }) {
  return (
    <FadeInSection className="mb-16 last:mb-0">
      <div className="text-center mb-10">
        <h3 className="font-heading text-3xl text-foreground">{title}</h3>
        <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-1">
          {subtitle}
        </p>
      </div>

      <div className="space-y-0">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-6 py-4 border-b border-border/50 last:border-0"
          >
            <div className="w-24 flex-shrink-0 text-right">
              <p className="font-heading text-lg text-foreground">{item.time}</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
            <div className="flex-1">
              <p className="font-heading text-lg text-foreground">{item.event}</p>
              {item.detail && (
                <p className="font-body text-xs text-muted-foreground mt-0.5 italic">
                  {item.detail}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </FadeInSection>
  );
}

export default function Schedule() {
  return (
    <div className="min-h-screen px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <Clock className="w-6 h-6 text-accent mx-auto mb-4" />
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-3">
            When & Where
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-light text-foreground">
            Event Schedule
          </h1>
          <SectionDivider />
        </FadeInSection>

        <ScheduleDay
          title="Friday"
          subtitle="December 19, 2026"
          items={FRIDAY_SCHEDULE}
        />

        <div className="flex justify-center my-8">
          <SectionDivider />
        </div>

        <ScheduleDay
          title="Saturday"
          subtitle="December 20, 2026"
          items={SATURDAY_SCHEDULE}
        />
      </div>
    </div>
  );
}
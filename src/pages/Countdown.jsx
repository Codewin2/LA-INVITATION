import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FadeInSection from "../components/wedding/FadeInSection";
import SectionDivider from "../components/wedding/SectionDivider";
import { Heart, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const WEDDING_DATE = new Date("2026-12-20T16:00:00");

function calculateTimeLeft(targetDate) {
  const diff = targetDate - new Date();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative">
        <div className="w-20 h-20 md:w-32 md:h-32 bg-card border border-border rounded-2xl flex items-center justify-center shadow-sm">
          <motion.span
            key={value}
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="font-heading text-3xl md:text-5xl font-light text-foreground"
          >
            {String(value).padStart(2, "0")}
          </motion.span>
        </div>
      </div>
      <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(WEDDING_DATE));

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft(WEDDING_DATE)), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top hero section */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
        <FadeInSection>
          <p className="font-body text-xs tracking-[0.5em] uppercase text-primary mb-4">
            The Big Day is Approaching
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-light text-foreground mb-2">
            Counting Down
          </h1>
          <SectionDivider />
          <p className="font-heading text-xl md:text-2xl italic text-muted-foreground mt-6 mb-14">
            Until we say "I do"
          </p>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="flex items-end gap-3 md:gap-6">
            <CountdownUnit value={timeLeft.days} label="Days" />
            <span className="font-heading text-4xl text-border mb-10">:</span>
            <CountdownUnit value={timeLeft.hours} label="Hours" />
            <span className="font-heading text-4xl text-border mb-10">:</span>
            <CountdownUnit value={timeLeft.minutes} label="Minutes" />
            <span className="font-heading text-4xl text-border mb-10">:</span>
            <CountdownUnit value={timeLeft.seconds} label="Seconds" />
          </div>
        </FadeInSection>

        <FadeInSection delay={0.4} className="mt-16 text-center">
          <Heart className="w-6 h-6 text-primary fill-primary mx-auto mb-5" />
          <p className="font-heading text-2xl md:text-3xl text-foreground italic">
            Saturday, December 20, 2026
          </p>
          <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-2">
            The Grand Garden Estate · Napa Valley
          </p>
        </FadeInSection>
      </div>

      {/* Info strip */}
      <FadeInSection delay={0.5}>
        <div className="bg-secondary border-t border-border py-12">
          <div className="max-w-3xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Calendar className="w-5 h-5 text-primary mx-auto mb-3" />
              <p className="font-heading text-xl text-foreground">December 20</p>
              <p className="font-body text-xs text-muted-foreground mt-1 tracking-wide">Wedding Day</p>
            </div>
            <div>
              <Heart className="w-5 h-5 text-primary mx-auto mb-3 fill-primary" />
              <p className="font-heading text-xl text-foreground">4:00 PM</p>
              <p className="font-body text-xs text-muted-foreground mt-1 tracking-wide">Ceremony Begins</p>
            </div>
            <div>
              <MapPin className="w-5 h-5 text-primary mx-auto mb-3" />
              <p className="font-heading text-xl text-foreground">Napa Valley</p>
              <p className="font-body text-xs text-muted-foreground mt-1 tracking-wide">The Grand Garden Estate</p>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
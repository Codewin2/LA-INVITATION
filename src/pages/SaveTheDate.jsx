import React from "react";
import { Calendar, MapPin, Heart, Mail } from "lucide-react";
import FadeInSection from "../components/wedding/FadeInSection";
import SectionDivider from "../components/wedding/SectionDivider";

const SAVE_DATE_IMAGE = "https://media.base44.com/images/public/69eb543eab87c0588bca8309/c245a1c4e_generated_aafff767.png";

export default function SaveTheDate() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        <img
          src={SAVE_DATE_IMAGE}
          alt="Save the date stationery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="relative z-10 text-center px-6">
          <p className="font-body text-xs tracking-[0.5em] uppercase text-muted-foreground mb-4">
            Please
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-light text-foreground">
            Save the Date
          </h1>
        </div>
      </div>

      {/* Card */}
      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <FadeInSection>
          <div className="bg-card border border-border rounded-2xl p-10 md:p-16 shadow-sm relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-primary/20 rounded-br-2xl" />

            <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-6">
              You are cordially invited
            </p>
            <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground mb-2">
              Sarah &amp; James
            </h2>
            <SectionDivider />

            <div className="mt-10 space-y-5">
              <div className="flex items-center justify-center gap-3">
                <Calendar className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="font-heading text-2xl text-foreground">
                  Saturday, December 20, 2026
                </p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="font-body text-sm text-muted-foreground tracking-wide">
                  The Grand Garden Estate · Napa Valley, CA
                </p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="font-body text-sm text-muted-foreground tracking-wide">
                  Formal invitation to follow
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <p className="font-heading text-lg italic text-muted-foreground">
                "The best is yet to come"
              </p>
            </div>

            <Heart className="w-5 h-5 text-primary fill-primary mx-auto mt-8" />
          </div>
        </FadeInSection>

        {/* Details Below */}
        <FadeInSection delay={0.2} className="mt-16 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">The Date</p>
            <p className="font-heading text-xl text-foreground">December 20, 2026</p>
            <p className="font-body text-xs text-muted-foreground mt-1">Saturday</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">The Time</p>
            <p className="font-heading text-xl text-foreground">4:00 PM</p>
            <p className="font-body text-xs text-muted-foreground mt-1">Ceremony begins</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">RSVP By</p>
            <p className="font-heading text-xl text-foreground">October 1, 2026</p>
            <p className="font-body text-xs text-muted-foreground mt-1">Kindly respond</p>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
}
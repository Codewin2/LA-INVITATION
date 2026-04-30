import React from "react";
import FadeInSection from "../components/wedding/FadeInSection";
import SectionDivider from "../components/wedding/SectionDivider";

const DRESS_IMAGE = "https://media.base44.com/images/public/69eb543eab87c0588bca8309/a76c2eae7_generated_95f14f2a.png";

const PALETTE_COLORS = [
  { name: "Champagne", color: "#E8D5B7" },
  { name: "Blush Rose", color: "#D4A0A0" },
  { name: "Sage", color: "#B5C4B1" },
  { name: "Dusty Mauve", color: "#C4A0B5" },
  { name: "Ivory", color: "#F5F0E8" },
  { name: "Gold", color: "#C4A265" },
];

export default function DressCode() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          src={DRESS_IMAGE}
          alt="Wedding attire inspiration"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="relative z-10 text-center">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-3">
            What to Wear
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-light text-foreground">
            Dress Code
          </h1>
        </div>
      </div>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <FadeInSection className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-4">
            Formal / Black Tie Optional
          </h2>
          <SectionDivider />
          <p className="font-body text-sm text-muted-foreground mt-6 max-w-lg mx-auto leading-relaxed">
            We'd love for you to dress your best! Think elegant evening wear
            in soft, romantic tones. Here's our color palette to inspire
            your outfit.
          </p>
        </FadeInSection>

        {/* Color Palette */}
        <FadeInSection delay={0.2} className="mt-16">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary text-center mb-8">
            Our Color Palette
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {PALETTE_COLORS.map((c) => (
              <div key={c.name} className="flex flex-col items-center gap-2">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-border shadow-sm"
                  style={{ backgroundColor: c.color }}
                />
                <p className="font-body text-xs text-muted-foreground tracking-wide">
                  {c.name}
                </p>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Guidelines */}
        <FadeInSection delay={0.3} className="mt-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
                For the Ladies
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Floor-length gowns, elegant midi dresses, or chic cocktail
                attire in our color palette. Heels or dressy flats are
                recommended for the garden venue.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
                For the Gentlemen
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Dark suits or tuxedos with ties or bow ties. Champagne, navy,
                or charcoal tones are perfect. A pocket square in our palette
                adds a lovely touch.
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
}
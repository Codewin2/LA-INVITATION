import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import FadeInSection from "../components/wedding/FadeInSection";
import SectionDivider from "../components/wedding/SectionDivider";

const CREDITS = [
  { role: "Bride", name: "Sarah Elizabeth" },
  { role: "Groom", name: "James Alexander" },
  { role: "Maid of Honor", name: "Emily Carter" },
  { role: "Best Man", name: "Michael Thompson" },
  { role: "Bridesmaids", name: "Olivia, Sophie & Grace" },
  { role: "Groomsmen", name: "Daniel, Ryan & Lucas" },
  { role: "Flower Girl", name: "Little Lily" },
  { role: "Ring Bearer", name: "Young Ethan" },
  { role: "Officiant", name: "Reverend Williams" },
  { role: "Wedding Planner", name: "Bloom & Co." },
  { role: "Floral Design", name: "Petal & Vine Studio" },
  { role: "Photography", name: "Golden Hour Films" },
  { role: "Videography", name: "Timeless Reels" },
  { role: "Music & Band", name: "The String Ensemble" },
  { role: "Catering", name: "Napa Valley Kitchen" },
  { role: "Wedding Cake", name: "La Belle Patisserie" },
];

export default function Credits() {
  return (
    <div className="min-h-screen px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-3">
            With Gratitude
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-light text-foreground">
            End Credits
          </h1>
          <SectionDivider />
          <p className="font-body text-sm text-muted-foreground mt-6 max-w-md mx-auto leading-loose">
            This celebration would not be possible without the love and support
            of these incredible people. From the bottom of our hearts — thank you.
          </p>
        </FadeInSection>

        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
          {CREDITS.map((credit, index) => (
            <FadeInSection key={credit.role} delay={index * 0.06}>
              <div className={`flex items-center justify-between px-8 py-5 ${index !== CREDITS.length - 1 ? "border-b border-border/50" : ""}`}>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">
                  {credit.role}
                </p>
                <p className="font-heading text-xl text-foreground text-right">
                  {credit.name}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Final message */}
        <FadeInSection delay={1} className="mt-20 text-center">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <Heart className="w-10 h-10 text-primary fill-primary mx-auto" />
          </motion.div>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-8 italic">
            Thank You
          </h2>
          <p className="font-body text-sm text-muted-foreground mt-4 leading-loose">
            For being part of our story. Your presence means the world to us.
          </p>
          <p className="font-heading text-2xl text-foreground mt-6 italic">
            — Sarah &amp; James
          </p>
          <div className="mt-8">
            <SectionDivider />
          </div>
          <p className="font-body text-xs text-muted-foreground mt-6 tracking-[0.4em] uppercase">
            #SarahAndJamesForever
          </p>
        </FadeInSection>
      </div>
    </div>
  );
}
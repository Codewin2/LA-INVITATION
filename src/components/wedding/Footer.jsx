import React from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Welcome", path: "/" },
  { label: "Save the Date", path: "/save-the-date" },
  { label: "Countdown", path: "/countdown" },
  { label: "Events", path: "/events" },
  { label: "Dress Code", path: "/dress-code" },
  { label: "Schedule", path: "/schedule" },
  { label: "Venue", path: "/venue" },
  { label: "Credits", path: "/credits" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Heart className="w-4 h-4 text-primary fill-primary" />
          <span className="font-heading text-2xl text-foreground">Sarah & James</span>
          <Heart className="w-4 h-4 text-primary fill-primary" />
        </div>

        <p className="font-heading text-lg italic text-muted-foreground mb-8">
          December 20, 2026 · Napa Valley, California
        </p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="h-px bg-border mb-8 max-w-xs mx-auto" />

        <p className="font-body text-xs text-muted-foreground tracking-widest">
          #SarahAndJamesForever
        </p>
        <p className="font-body text-xs text-muted-foreground mt-2">
          © 2026 · Made with love
        </p>
      </div>
    </footer>
  );
}
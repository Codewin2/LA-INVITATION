import React from "react";
import { MapPin, Car, Plane, Hotel } from "lucide-react";
import FadeInSection from "../components/wedding/FadeInSection";
import SectionDivider from "../components/wedding/SectionDivider";

const VENUE_IMAGE = "https://media.base44.com/images/public/69eb543eab87c0588bca8309/f49abee26_generated_5f7f06ef.png";

export default function Venue() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src={VENUE_IMAGE}
          alt="The Grand Garden Estate venue"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="relative z-10 text-center">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-3">
            Where We Celebrate
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-light text-foreground">
            The Venue
          </h1>
        </div>
      </div>

      {/* Venue Details */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <FadeInSection className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-2">
            The Grand Garden Estate
          </h2>
          <SectionDivider />
          <div className="flex items-center justify-center gap-2 mt-6">
            <MapPin className="w-4 h-4 text-accent" />
            <p className="font-body text-sm text-muted-foreground">
              1234 Vineyard Lane, Napa Valley, CA 94558
            </p>
          </div>
          <p className="font-body text-sm text-muted-foreground mt-6 max-w-lg mx-auto leading-relaxed">
            Nestled among rolling vineyards and ancient oaks, The Grand Garden
            Estate is a timeless setting for an unforgettable celebration. With
            its enchanting rose gardens, candlelit pavilion, and sweeping views
            of the valley, it's the perfect backdrop for our love story.
          </p>
        </FadeInSection>

        {/* Travel Info */}
        <FadeInSection delay={0.2}>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <Plane className="w-5 h-5 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl text-foreground mb-2">
                By Air
              </h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                Fly into San Francisco International (SFO) or Oakland
                International (OAK). Napa is about a 1-hour drive from either
                airport.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <Car className="w-5 h-5 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl text-foreground mb-2">
                By Car
              </h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                Complimentary parking is available at the venue. We'll also
                arrange shuttle service from select local hotels.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <Hotel className="w-5 h-5 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl text-foreground mb-2">
                Accommodations
              </h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                We've reserved a room block at The Napa Valley Lodge.
                Use code "SARAHJAMES" for a special rate.
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Map Placeholder */}
        <FadeInSection delay={0.3} className="mt-16">
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <iframe
              title="Venue location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49574.04834831347!2d-122.32675!3d38.29713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808450e1b5ff7975%3A0xe412deb32a42c84!2sNapa%2C%20CA!5e0!3m2!1sen!2sus!4v1690000000000"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            />
          </div>
        </FadeInSection>
      </section>
    </div>
  );
}
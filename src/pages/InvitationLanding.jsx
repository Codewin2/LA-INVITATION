import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Floating sakura petals
function FloatingPetals() {
  const petals = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${i * 5.3 % 100}%`,
    delay: i * 0.4,
    duration: 6 + i % 5,
    size: 8 + i % 7 * 2
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {petals.map((p) =>
      <motion.div
        key={p.id}
        className="absolute select-none"
        style={{ left: p.left, top: "-40px", fontSize: p.size }}
        animate={{ y: ["0vh", "110vh"], rotate: [0, 540], opacity: [0, 1, 1, 0] }}
        transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}>
        
          🌸
        </motion.div>
      )}
    </div>);

}

// Twinkling gold stars / sparkles
function GoldSparkles() {
  const stars = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    left: `${(i * 4.1 + 2) % 98}%`,
    top: `${(i * 3.7 + 5) % 90}%`,
    delay: i * 0.25,
    size: 3 + i % 4
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {stars.map((s) =>
      <motion.div
        key={s.id}
        className="absolute rounded-full bg-amber-300"
        style={{ left: s.left, top: s.top, width: s.size, height: s.size }}
        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.4, 0.5] }}
        transition={{ duration: 2 + s.id % 3, delay: s.delay, repeat: Infinity, ease: "easeInOut" }} />

      )}
    </div>);

}

// Decorative floral SVG corner
function FloralCorner({ className }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 76 C4 40, 40 4, 76 4" stroke="rgba(212,175,55,0.5)" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
      <circle cx="10" cy="70" r="3" fill="rgba(212,175,55,0.4)" />
      <circle cx="20" cy="55" r="2" fill="rgba(212,175,55,0.3)" />
      <circle cx="55" cy="20" r="2" fill="rgba(212,175,55,0.3)" />
      <circle cx="70" cy="10" r="3" fill="rgba(212,175,55,0.4)" />
      <path d="M15 65 Q20 55 30 58 Q25 68 15 65Z" fill="rgba(212,175,55,0.25)" />
      <path d="M65 15 Q55 20 58 30 Q68 25 65 15Z" fill="rgba(212,175,55,0.25)" />
    </svg>);

}

export default function InvitationLanding({ onOpen }) {
  const [clicked, setClicked] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  function handleOpen() {
    setShowParticles(true);
    setClicked(true);
    setTimeout(onOpen, 1200);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
    style={{ background: "radial-gradient(ellipse at 50% 40%, #8b0a3a 0%, #5c0a26 40%, #2d0415 100%)" }}>

      <FloatingPetals />
      <GoldSparkles />

      {/* Animated background glow rings */}
      {[1, 2, 3].map((i) =>
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: 220 * i, height: 220 * i,
          border: "1px solid rgba(212,175,55,0.12)"
        }}
        animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.7 }} />

      )}

      {/* Floral corners */}
      <FloralCorner className="absolute top-4 left-4 w-20 h-20 opacity-70" />
      <FloralCorner className="absolute top-4 right-4 w-20 h-20 opacity-70 scale-x-[-1]" />
      <FloralCorner className="absolute bottom-4 left-4 w-20 h-20 opacity-70 scale-y-[-1]" />
      <FloralCorner className="absolute bottom-4 right-4 w-20 h-20 opacity-70 scale-[-1]" />

      {/* Gold border frame */}
      <div className="absolute inset-6 border border-amber-400/20 rounded-sm pointer-events-none z-10" />
      <div className="absolute inset-8 border border-amber-400/10 rounded-sm pointer-events-none z-10" />

      {/* Main content */}
      <div className="relative z-20 text-center px-8 max-w-xl mx-auto">

        {/* Large decorative "L A" monogram watermark behind */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ zIndex: -1 }}>
          <span
            className="font-heading text-[14rem] font-bold leading-none select-none"
            style={{ color: "rgba(212,175,55,0.06)", letterSpacing: "-0.05em" }}>
            LA
          </span>
        </div>

        {/* "You are cordially invited to" */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-body text-xs tracking-[0.55em] uppercase mb-6"
          style={{ color: "rgba(212,175,55,0.85)" }}>
          You are cordially invited to
        </motion.p>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}>

          <motion.h1
            className="font-heading font-light leading-none"
            style={{ fontSize: "clamp(3.5rem, 10vw, 6rem)", color: "#f9e8c0" }}
            animate={{ textShadow: ["0 0 0px rgba(212,175,55,0)", "0 0 40px rgba(212,175,55,0.6)", "0 0 0px rgba(212,175,55,0)"] }}
            transition={{ duration: 3, repeat: Infinity }}>
            Lavanya
          </motion.h1>

          {/* Decorative divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="flex items-center justify-center gap-3 my-4">
            <div className="h-px w-10" style={{ background: "rgba(212,175,55,0.5)" }} />
            <motion.span
              className="font-heading text-3xl italic"
              style={{ color: "#d4af37" }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.8, repeat: Infinity }}>
              &amp;
            </motion.span>
            <div className="h-px w-10" style={{ background: "rgba(212,175,55,0.5)" }} />
          </motion.div>

          <motion.h1
            className="font-heading font-light leading-none"
            style={{ fontSize: "clamp(3.5rem, 10vw, 6rem)", color: "#f9e8c0" }}
            animate={{ textShadow: ["0 0 0px rgba(212,175,55,0)", "0 0 40px rgba(212,175,55,0.6)", "0 0 0px rgba(212,175,55,0)"] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}>
            Aparna Babu
          </motion.h1>
        </motion.div>

        {/* Heart + thin line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col items-center gap-2 my-6">
          <motion.span
            style={{ color: "#d4af37", fontSize: 22 }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}>
            ♡
          </motion.span>
        </motion.div>

        {/* Parents / family line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mb-6">
          <p className="font-heading text-base italic" style={{ color: "rgba(249,232,192,0.75)" }}>
            Daughter of Sri Seetham Naidu &amp; Smt Padma
          </p>
          <p className="font-heading text-base italic mt-1" style={{ color: "rgba(249,232,192,0.75)" }}>
            Son of Sri Surendra Kumar &amp; Smt Kasturi
          </p>
        </motion.div>

        {/* Ornamental divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-8" style={{ background: "rgba(212,175,55,0.4)" }} />
          <span style={{ color: "rgba(212,175,55,0.6)", fontSize: 10 }}>❧</span>
          <div className="h-px w-8" style={{ background: "rgba(212,175,55,0.4)" }} />
        </motion.div>

        {/* Date + Location */}
        













        

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, type: "spring" }}>
          <motion.button
            onClick={handleOpen}
            disabled={clicked}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            animate={!clicked ? {
              boxShadow: ["0 0 20px rgba(212,175,55,0.3)", "0 0 55px rgba(212,175,55,0.8)", "0 0 20px rgba(212,175,55,0.3)"]
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative overflow-hidden px-14 py-4 rounded-full font-heading text-lg font-semibold tracking-wider shadow-2xl"
            style={{ background: "linear-gradient(90deg, #c8972a, #f0d060, #c8972a)", color: "#3d0a1a" }}>
            <motion.div
              className="absolute inset-0"
              style={{ background: "rgba(255,255,255,0.25)" }}
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} />
            
            <span className="relative">✦ &nbsp;View Invitation&nbsp; ✦</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Burst on click */}
      <AnimatePresence>
        {showParticles &&
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 10, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 rounded-full pointer-events-none z-30"
          style={{ background: "rgba(212,175,55,0.15)" }} />

        }
      </AnimatePresence>
    </div>);

}
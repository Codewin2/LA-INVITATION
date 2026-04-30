import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Heart, ChevronDown, MapPin, Sparkles, X } from "lucide-react";
import confetti from "canvas-confetti";
import InvitationLanding from "./InvitationLanding";

// ── Background Music ────────────────────────────────────────────────────────
// Romantic instrumental — "Once in Paris" by Pumpupthemind (Pixabay, free license)
const BG_MUSIC_URL = "https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3";

// ── Images ──────────────────────────────────────────────────────────────────
const HERO_BG = "https://media.base44.com/images/public/69eb543eab87c0588bca8309/99f608e2f_generated_6a8f3c85.png";
const HALDI_IMG = "https://media.base44.com/images/public/69eb543eab87c0588bca8309/7986a4536_Haldi.png";
const SANGEET_IMG = "https://media.base44.com/images/public/69eb543eab87c0588bca8309/4617bd74a_ChatGPTImageApr27202611_07_32PM.png";
const RECEPTION_IMG = "https://media.base44.com/images/public/69eb543eab87c0588bca8309/4d5d024d9_Reception.png";
const INVOCATION_IMG = "https://media.base44.com/images/public/69eb543eab87c0588bca8309/1b554de83_ChatGPTImageApr27202611_04_44PM.png";
const LOGO_IMG = "https://media.base44.com/images/public/69eb543eab87c0588bca8309/d49814ab8_Logo.png";
const VENUE_IMG = "https://media.base44.com/images/public/69eb543eab87c0588bca8309/777c48dd1_generated_image.png";




// ── Countdown ────────────────────────────────────────────────────────────────
const WEDDING_DATE = new Date("2026-05-08T11:00:00");
function getTime() {
  const diff = WEDDING_DATE - new Date();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor(diff / 3600000 % 24),
    minutes: Math.floor(diff / 60000 % 60),
    seconds: Math.floor(diff / 1000 % 60)
  };
}
function useCountdown() {
  const [t, setT] = useState(getTime());
  useEffect(() => {
    const id = setInterval(() => setT(getTime()), 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

function fireConfetti(colors) {
  confetti({ particleCount: 140, spread: 100, origin: { y: 0.55 }, colors });
}

// ══════════════════════════════════════════════════════════════════
// FLOATING PARTICLES (hero live theme)
// ══════════════════════════════════════════════════════════════════
function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${i * 5 % 100}%`,
    delay: i * 0.35,
    dur: 5 + i % 5,
    emoji: ["🌸", "✨", "🌺", "💫", "🌼"][i % 5],
    size: 12 + i % 6 * 3
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((p) =>
      <motion.span
        key={p.id}
        className="absolute select-none"
        style={{ left: p.left, fontSize: p.size, top: "-30px" }}
        animate={{ y: ["0vh", "105vh"], rotate: [0, 720], opacity: [0, 0.8, 0.8, 0] }}
        transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "linear" }}>
        
          {p.emoji}
        </motion.span>
      )}
    </div>);

}

// ══════════════════════════════════════════════════════════════════
// SECTION 1 — WELCOME HERO
// ══════════════════════════════════════════════════════════════════
function HeroSection() {
  return (
    <section id="welcome" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <img src={HERO_BG} alt="hero" className="absolute inset-0 w-full h-full object-cover scale-105" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/75" />
      <FloatingParticles />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-20 text-center px-6">
        
        {/* L&A text logo with golden shimmer effect */}
        <motion.div
          className="mx-auto mb-12 relative flex items-center justify-center"
          initial={{ scale: 0, rotate: -20, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 1.3, type: "spring", stiffness: 70 }}>
          {/* Outer glow ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="mx-3 pt-4 rounded-full absolute w-36 h-36 border border-dashed border-amber-300/40" />
          
          {/* Inner halo */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute w-28 h-28 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(212,175,55,0.25) 0%, transparent 70%)" }} />
          {/* The L&A monogram text */}
          <motion.span
            animate={{
              textShadow: [
              "0 0 10px rgba(212,175,55,0.4)",
              "0 0 35px rgba(212,175,55,1)",
              "0 0 10px rgba(212,175,55,0.4)"]

            }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="relative font-heading text-5xl font-light select-none"
            style={{
              background: "linear-gradient(135deg, #f9e8c0, #d4af37, #fff8e1, #d4af37)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "0.08em"
            }}>
            L&A
          </motion.span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }} className="text-rose-200 mt-14 mb-2 text-xs font-body uppercase tracking-[0.5em]">
          Together with their families
        </motion.p>

        {/* Couple names with glow pulse */}
        <motion.h1
          className="font-heading text-5xl md:text-8xl lg:text-9xl font-light text-white leading-none"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}>
          
          <motion.span
            className="inline-block"
            animate={{ textShadow: ["0 0 0px #fff", "0 0 30px #fda4af", "0 0 0px #fff"] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0 }}>
            
            Lavanya
          </motion.span>
          <motion.span
            className="block text-rose-300 italic text-3xl md:text-5xl my-3"
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}>
            
            &amp;
          </motion.span>
          <motion.span
            className="inline-block"
            animate={{ textShadow: ["0 0 0px #fff", "0 0 30px #fda4af", "0 0 0px #fff"] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}>
            
            Aparna Babu
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex items-center justify-center gap-4 mt-8">
          
          <div className="h-px w-16 bg-rose-300/50" />
          <motion.div animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <Heart className="w-5 h-5 text-rose-300 fill-rose-300" />
          </motion.div>
          <div className="h-px w-16 bg-rose-300/50" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-rose-100 mt-6">
          
          Request the pleasure of your company
        </motion.p>
        






        
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 z-20">
        
        <ChevronDown className="w-6 h-6 text-white/60" />
      </motion.div>
    </section>);

}

// ══════════════════════════════════════════════════════════════════
// SECTION 2 — SAVE THE DATE (scratch reveal)
// ══════════════════════════════════════════════════════════════════
function ScratchCard() {
  const canvasRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [scratching, setScratching] = useState(false);
  const lastPos = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(0, "#be5b7a");
    grad.addColorStop(0.5, "#c97b45");
    grad.addColorStop(1, "#be5b7a");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255,255,255,0.18)";
    ctx.font = "bold 13px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("✦  SCRATCH TO REVEAL  ✦", canvas.width / 2, canvas.height / 2 - 8);
    ctx.fillText("Our Wedding Date", canvas.width / 2, canvas.height / 2 + 14);
  }, []);

  function getPos(e, canvas) {
    const rect = canvas.getBoundingClientRect();
    const sx = canvas.width / rect.width,sy = canvas.height / rect.height;
    const cx = e.touches ? e.touches[0].clientX : e.clientX;
    const cy = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: (cx - rect.left) * sx, y: (cy - rect.top) * sy };
  }

  function scratch(e) {
    if (!scratching) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const pos = getPos(e, canvas);
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    if (lastPos.current) {
      ctx.moveTo(lastPos.current.x, lastPos.current.y);
      ctx.lineTo(pos.x, pos.y);
      ctx.lineWidth = 52;
      ctx.lineCap = "round";
      ctx.stroke();
    }
    ctx.arc(pos.x, pos.y, 26, 0, Math.PI * 2);
    ctx.fill();
    lastPos.current = pos;
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let transparent = 0;
    for (let i = 3; i < data.length; i += 4) if (data[i] < 128) transparent++;
    const pct = transparent / (canvas.width * canvas.height) * 100;
    if (pct > 50 && !revealed) {
      setRevealed(true);
      fireConfetti(["#FFB6C1", "#FFD700", "#FF69B4", "#FFF0F5"]);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="w-full h-52 rounded-2xl bg-gradient-to-br from-rose-50 to-amber-50 border-2 border-rose-200 flex flex-col items-center justify-center gap-3 shadow-inner">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-rose-400">Save the Date</p>
        <p className="font-heading text-4xl md:text-5xl text-rose-700 font-light">May 09, 2026</p>
        <p className="font-body text-xs text-rose-400 tracking-widest">✦ Lavanya &amp; Aparna Babu ✦</p>
      </div>
      {!revealed &&
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full rounded-2xl cursor-pointer touch-none"
        onMouseDown={() => {setScratching(true);lastPos.current = null;}}
        onMouseMove={scratch}
        onMouseUp={() => setScratching(false)}
        onMouseLeave={() => setScratching(false)}
        onTouchStart={() => {setScratching(true);lastPos.current = null;}}
        onTouchMove={scratch}
        onTouchEnd={() => setScratching(false)} />

      }
    </div>);

}

function SaveTheDateSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section id="save-the-date" className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-gradient-to-br from-rose-50 via-amber-50 to-pink-50">
      <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9 }} className="text-center mb-12">
        <p className="font-body text-xs tracking-[0.5em] uppercase text-rose-400 mb-3">Please</p>
        <h2 className="font-heading text-5xl md:text-7xl font-light text-rose-800">Save the Date</h2>
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="h-px w-12 bg-rose-300" />
          <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
          <div className="h-px w-12 bg-rose-300" />
        </div>
        <p className="font-body text-sm text-rose-500 mt-6 tracking-wide">Scratch the card below to reveal our wedding date</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.3, duration: 0.7 }} className="w-full max-w-sm mx-auto">
        <ScratchCard />
      </motion.div>
      <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }} className="font-body text-xs text-rose-400 mt-8 tracking-widest uppercase">
        Formal invitation to follow
      </motion.p>
    </section>);

}

// ══════════════════════════════════════════════════════════════════
// SECTION 3 — COUNTDOWN
// ══════════════════════════════════════════════════════════════════
function CountBox({ value, label }) {
  return (
    <motion.div className="flex flex-col items-center gap-3" whileHover={{ scale: 1.07 }}>
      <div className="relative w-20 h-20 md:w-28 md:h-28 bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-amber-500/20" />
        <motion.span key={value} initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }} className="relative z-10 font-heading text-3xl md:text-5xl font-light text-white">
          {String(value).padStart(2, "0")}
        </motion.span>
      </div>
      <p className="font-body text-xs tracking-[0.3em] uppercase text-rose-200">{label}</p>
    </motion.div>);

}

function CountdownSection() {
  const t = useCountdown();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section id="countdown" className="min-h-screen flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden bg-gradient-to-br from-rose-900 via-rose-800 to-amber-900">
      {[...Array(12)].map((_, i) =>
      <div key={i} className="absolute w-3 h-3 rounded-full bg-white/5" style={{ left: `${i * 8 % 100}%`, top: `${(i * 7 + 10) % 90}%`, transform: `scale(${1 + i % 3})` }} />
      )}
      <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9 }} className="text-center mb-14 relative z-10">
        <p className="font-body text-xs tracking-[0.5em] uppercase text-rose-300 mb-3">The Big Day Is Approaching</p>
        <h2 className="font-heading text-5xl md:text-7xl font-light text-white">Counting Down</h2>
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="h-px w-12 bg-rose-400/50" />
          <Heart className="w-4 h-4 text-rose-300 fill-rose-300" />
          <div className="h-px w-12 bg-rose-400/50" />
        </div>
        <p className="font-heading text-xl italic text-rose-200 mt-5">Until we say "I do"</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.3, duration: 0.7 }} className="relative z-10 flex items-end gap-3 md:gap-6">
        <CountBox value={t.days} label="Days" />
        <span className="font-heading text-4xl text-white/40 mb-10">:</span>
        <CountBox value={t.hours} label="Hours" />
        <span className="font-heading text-4xl text-white/40 mb-10">:</span>
        <CountBox value={t.minutes} label="Minutes" />
        <span className="font-heading text-4xl text-white/40 mb-10">:</span>
        <CountBox value={t.seconds} label="Seconds" />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} className="relative z-10 mt-14 text-center">
        <Heart className="w-6 h-6 text-rose-300 fill-rose-300 mx-auto mb-4" />
        <p className="font-heading text-2xl text-white italic">May 08, 2026</p>
        
      </motion.div>
    </section>);

}

// ══════════════════════════════════════════════════════════════════
// SECTION 4 — EVENTS (auto confetti on scroll into view)
// ══════════════════════════════════════════════════════════════════
const EVENTS = [
{ title: "Haldi Ceremony", time: "May 08 · 11:00 AM", desc: "An intimate and joyful Haldi ceremony filled with love, laughter and the promise of a beautiful journey ahead.", img: HALDI_IMG, colors: ["#FFD700", "#FFA500", "#FFEC8B"] },
{ title: "Sangeet Night", time: "May 08 · 7:00 PM", desc: "An evening of music, dance and celebration where families come together to rejoice in love and togetherness.", img: SANGEET_IMG, colors: ["#8B008B", "#C71585", "#FF1493"] },
{ title: "Reception & Dinner", time: "May 09 · 7:00 PM", desc: "Stars overhead, flavors on the table—step into a glamorous reception with great food and unforgettable vibes.", img: RECEPTION_IMG, colors: ["#FF69B4", "#FFD700", "#FF1493", "#00CED1"] },
{ title: "Marriage Ceremony", time: "May 09 · 11:00 AM", desc: "A beautiful union celebrated with sacred rituals and blessings.", img: INVOCATION_IMG, colors: ["#FF4500", "#FF8C00", "#FFD700"] }];


function EventCard({ event, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const blasted = useRef(false);

  useEffect(() => {
    if (inView && !blasted.current) {
      blasted.current = true;
      setTimeout(() => fireConfetti(event.colors), index * 200);
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -70 : 70 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.85, delay: index * 0.12 }}
      className="group relative overflow-hidden rounded-3xl shadow-xl border border-border"
      whileHover={{ y: -6 }}>
      
      {/* 9:16 portrait poster */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "9/16" }}>
        <img src={event.img} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-heading text-3xl text-white">{event.title}</h3>
          <p className="font-body text-sm text-white/80 mt-2 leading-relaxed">{event.desc}</p>
        </div>
      </div>
    </motion.div>);

}

function EventsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section id="events" className="min-h-screen px-6 py-24 bg-gradient-to-br from-amber-50 via-rose-50 to-pink-50">
      <div className="max-w-5xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.5em] uppercase text-rose-400 mb-3">Join Us For</p>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-rose-800">The Events</h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-12 bg-rose-300" />
            <Sparkles className="w-4 h-4 text-rose-400" />
            <div className="h-px w-12 bg-rose-300" />
          </div>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {EVENTS.map((ev, i) => <EventCard key={ev.title} event={ev} index={i} />)}
        </div>
      </div>
    </section>);

}

// ══════════════════════════════════════════════════════════════════
// SECTION 5 — DRESS CODE (peach fix + dynamic bg)
// ══════════════════════════════════════════════════════════════════
const DRESS_CARDS = [
{
  id: "haldi", title: "Haldi Ceremony", code: "Dress Code: Peach", emoji: "🌼",
  caption: "Radiate warmth in peach! Soft peach tones, blush pinks and pastel oranges are perfect for this joyful celebration.",
  activeBorder: "border-orange-300", activeText: "text-orange-900",
  color: "#FFDAB9", textColor: "#7C2D12"
},
{
  id: "sangeet", title: "Sangeet Night", code: "Dress Code: Black", emoji: "🎶",
  caption: "Glam it up in sleek black! Sparkle, shimmer and shine as we dance the night away together.",
  activeBorder: "border-gray-600", activeText: "text-white",
  color: "#1a1a2e", textColor: "#ffffff"
},
{
  id: "reception", title: "Reception & Dinner", code: "Dress Code: Guest Choice", emoji: "✨",
  caption: "Express yourself! Wear your finest in any color you love — this night is for everyone to shine.",
  activeBorder: "border-purple-400", activeText: "text-purple-900",
  color: "linear-gradient(135deg, #fce4ec, #e8eaf6, #e0f2fe)", textColor: "#6B21A8"
}];


function DressCodeSection() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const activeCard = DRESS_CARDS.find((c) => c.id === active);

  return (
    <section
      id="dress-code"
      className="min-h-screen px-6 py-24 transition-all duration-700"
      style={{ background: activeCard ? activeCard.color : "linear-gradient(135deg, #fff1f2, #fef3c7, #fdf2f8)" }}>
      
      <div className="max-w-5xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.5em] uppercase text-rose-400 mb-3">What to Wear</p>
          <h2 className="font-heading text-5xl md:text-6xl font-light transition-colors duration-500" style={{ color: activeCard ? activeCard.textColor : "#991B1B" }}>
            Dress Code
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-12 bg-rose-300/60" />
            <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
            <div className="h-px w-12 bg-rose-300/60" />
          </div>
          <p className="font-body text-sm text-rose-500 mt-5">Click each event card to reveal the dress code</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {DRESS_CARDS.map((card, i) => {
            const isActive = active === card.id;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                onClick={() => setActive(isActive ? null : card.id)}
                className={`cursor-pointer rounded-2xl border-2 p-6 transition-all duration-500 shadow-md ${isActive ? `${card.activeBorder} scale-105 shadow-xl` : "border-rose-200 bg-white/70 hover:shadow-lg"}`}
                style={isActive ? { background: card.color } : {}}>
                
                <div className="text-center">
                  <span className="text-4xl mb-4 block">{card.emoji}</span>
                  <h3 className={`font-heading text-2xl mb-2 transition-colors duration-300 ${isActive ? card.activeText : "text-rose-800"}`}>
                    {card.title}
                  </h3>
                  <AnimatePresence mode="wait">
                    {isActive ?
                    <motion.div key="open" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.4 }}>
                        <p className={`font-heading text-xl italic mt-3 mb-3 ${card.activeText}`}>{card.code}</p>
                        <p className={`font-body text-xs leading-relaxed ${card.activeText} opacity-80`}>{card.caption}</p>
                        <div className="mt-4 pt-4 border-t border-current/20">
                          <span className={`font-body text-xs tracking-widest uppercase ${card.activeText} opacity-60`}>See you there! ✨</span>
                        </div>
                      </motion.div> :

                    <motion.div key="closed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <p className="font-body text-xs text-muted-foreground mt-3 tracking-wide">Click to reveal dress code</p>
                        <div className="mt-4 w-8 h-0.5 bg-rose-300 mx-auto rounded-full" />
                      </motion.div>
                    }
                  </AnimatePresence>
                </div>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}

// ══════════════════════════════════════════════════════════════════
// SECTION 6 — SCHEDULE
// ══════════════════════════════════════════════════════════════════
const DAYS_SCHEDULE = [
{
  day: "Day 1", date: "May 08, 2026",
  events: [
  { time: "11:00 AM", name: "Haldi Ceremony", desc: "Sacred turmeric ritual brimming with joy and blessings", emoji: "🌼" },
  { time: "7:00 PM", name: "Sangeet Night", desc: "An electrifying evening of music, dance and family fun", emoji: "🎶" }]

},
{
  day: "Day 2", date: "May 09, 2026",
  events: [
  { time: "11:00 AM", name: "Invocation Ceremony", desc: "Morning prayers invoking divine blessings for the union", emoji: "🙏" },
  { time: "7:00 PM", name: "Reception", desc: "Grand welcome reception with family and friends", emoji: "🥂" },
  { time: "8:00 PM", name: "Dinner", desc: "A lavish wedding dinner to cap the joyous celebrations", emoji: "🍽️" },
  { time: "02:09 AM", name: "Marriage Muhurtham 💍", desc: "Auspicious marriage muhurtham — the sacred moment of the union (Early hrs. of Sunday)", emoji: "💒" }]

}];


function TimelineItem({ item, index, inView }) {
  return (
    <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 + index * 0.12 }} className="flex gap-5 pb-8 last:pb-0">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-rose-100 border-2 border-rose-400 flex items-center justify-center text-lg flex-shrink-0 shadow">{item.emoji}</div>
        {index < 99 && <div className="w-0.5 flex-1 bg-rose-200 mt-2" />}
      </div>
      <div className="flex-1 pt-1 pb-6">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-rose-400 mb-1">{item.time}</p>
        <h4 className="font-heading text-xl text-rose-900">{item.name}</h4>
        <p className="font-body text-sm text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>);

}

function ScheduleSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section id="schedule" className="min-h-screen px-6 py-24 bg-gradient-to-br from-rose-50 to-amber-50">
      <div className="max-w-3xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.5em] uppercase text-rose-400 mb-3">When &amp; What</p>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-rose-800">Event Schedule</h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-12 bg-rose-300" />
            <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
            <div className="h-px w-12 bg-rose-300" />
          </div>
        </motion.div>
        <div className="space-y-12">
          {DAYS_SCHEDULE.map((day, di) =>
          <motion.div key={day.day} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: di * 0.2 }} className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-rose-100 shadow-sm">
              <div className="mb-8">
                <span className="font-body text-xs tracking-[0.4em] uppercase text-rose-400">{day.date}</span>
                <h3 className="font-heading text-3xl text-rose-800 mt-1">{day.day}</h3>
                <div className="h-px w-16 bg-rose-200 mt-3" />
              </div>
              <div>{day.events.map((ev, ei) => <TimelineItem key={ev.name} item={ev} index={ei} inView={inView} />)}</div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}

// ══════════════════════════════════════════════════════════════════
// SECTION 7 — VENUE
// ══════════════════════════════════════════════════════════════════
function VenueSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section id="venue" className="min-h-screen px-6 py-24 bg-gradient-to-br from-teal-50 via-rose-50 to-amber-50">
      <div className="max-w-4xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.5em] uppercase text-rose-400 mb-3">Where We Celebrate</p>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-rose-800">The Venue</h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-12 bg-rose-300" />
            <MapPin className="w-4 h-4 text-rose-400" />
            <div className="h-px w-12 bg-rose-300" />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.8 }} className="rounded-3xl overflow-hidden shadow-2xl bg-white border border-rose-100">
          <div className="relative h-72 md:h-96 overflow-hidden">
            <img src={VENUE_IMG} alt="Aarif Sea Side Resorts" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="font-heading text-3xl md:text-4xl text-white">Aarif Sea Side Resorts</h3>
              <p className="font-body text-sm text-white/80 mt-1">By the shimmering shores — where love meets the sea</p>
            </div>
          </div>
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <p className="font-body text-xs tracking-[0.3em] uppercase text-rose-400 mb-2">Event</p>
                <p className="font-heading text-xl text-rose-800">Wedding Celebration</p>
              </div>
              <div className="text-center">
                <p className="font-body text-xs tracking-[0.3em] uppercase text-rose-400 mb-2">Date</p>
                <p className="font-heading text-xl text-rose-800">May 08 & 09, 2026</p>
              </div>
              <div className="text-center">
                <p className="font-body text-xs tracking-[0.3em] uppercase text-rose-400 mb-2">Setting</p>
                <p className="font-heading text-xl text-rose-800">Seaside Resort</p>
              </div>
            </div>
            <div className="flex justify-center">
              <motion.a href="https://www.google.com/maps/search/Aarif+Sea+Side+Resorts" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-flex items-center gap-3 bg-rose-600 text-white font-body text-sm tracking-widest uppercase px-8 py-4 rounded-full shadow-lg hover:bg-rose-700 transition-colors">
                <MapPin className="w-4 h-4" />
                Open in Maps
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}



// ══════════════════════════════════════════════════════════════════
// AUDIO GREETING (plays voice msg, pauses bg music meanwhile)
// ══════════════════════════════════════════════════════════════════
// A warm spoken greeting using browser TTS (no external audio file needed)
function AudioGreeting() {
  const [status, setStatus] = useState("idle"); // idle | playing | done

  function playGreeting() {
    if (!window.speechSynthesis) return;
    // Pause background music
    const bg = bgMusicRef.current;
    if (bg && !bg.paused) bg.pause();

    setStatus("playing");
    const msg = new SpeechSynthesisUtterance(
      "Hello… " +
      "I may not have personally called or texted you, " +
      "but if you are listening to this, please consider this my personal invitation to you. " +
      "I just wanted to do something a little different this time, " +
      "and with the effort and support of my dearest brother, Mister Sravan Kumar, " +
      "this message is my way of filling my absence during the invitations. " +
      "You are specially invited to all my happenings — even the most intimate ones — " +
      "because I truly feel that you celebrate my happiness when I smile. " +
      "Being together, sharing these moments, united by destiny… that truly means everything to me. " +
      "This isn't just words — I genuinely need your presence and your blessings, " +
      "because those gestures add to my glow and make these moments complete."
    );
    msg.rate = 0.85;
    msg.pitch = 1.2;
    msg.volume = 1;
    // Pick the sweetest female voice available
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(v =>
      v.name.includes("Samantha") ||
      v.name.includes("Google UK English Female") ||
      v.name.includes("Victoria") ||
      v.name.includes("Karen") ||
      v.name.includes("Moira") ||
      v.name.toLowerCase().includes("female")
    );
    if (preferred) msg.voice = preferred;

    msg.onend = () => {
      setStatus("done");
      // Resume background music
      if (bg) bg.play().catch(() => {});
    };
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(msg);
  }

  function stop() {
    window.speechSynthesis.cancel();
    setStatus("idle");
    const bg = bgMusicRef.current;
    if (bg) bg.play().catch(() => {});
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mt-8 flex flex-col items-center gap-3">
      <p className="font-body text-xs tracking-[0.3em] uppercase text-rose-400">🎙️ A Personal Message For You</p>
      {status === "playing" ? (
        <button
          onClick={stop}
          className="flex items-center gap-3 bg-rose-100 border-2 border-rose-400 text-rose-700 font-body text-sm px-7 py-3 rounded-full shadow hover:bg-rose-200 transition-all">
          <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 0.7 }}>🔊</motion.span>
          Playing greeting... &nbsp;<span className="text-xs opacity-60">(tap to stop)</span>
        </button>
      ) : (
        <motion.button
          onClick={playGreeting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ boxShadow: ["0 0 0px rgba(225,29,72,0.3)", "0 0 20px rgba(225,29,72,0.6)", "0 0 0px rgba(225,29,72,0.3)"] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center gap-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-body text-sm tracking-wide px-8 py-3 rounded-full shadow-lg">
          <span className="text-lg">🎙️</span>
          {status === "done" ? "Play Again" : "Hear Our Greeting"}
        </motion.button>
      )}
      {status === "done" && (
        <p className="font-body text-xs text-rose-400 italic">Thank you for listening 💕</p>
      )}
    </motion.div>
  );
}

// ══════════════════════════════════════════════════════════════════
// SECTION 8 — GALLERY (left-to-right scroll, 3D lightbox)
// ══════════════════════════════════════════════════════════════════
const GALLERY_IMGS = [
  { url: "https://media.base44.com/images/public/69eb543eab87c0588bca8309/47baa98fa_Photo1.jpg", caption: "Dapper Look", pos: "object-top" },
  { url: "https://media.base44.com/images/public/69eb543eab87c0588bca8309/98c09a8d6_photo2.jpg", caption: "Family Blessings", pos: "object-center" },
  { url: "https://media.base44.com/images/public/69eb543eab87c0588bca8309/dad8c08cf_photo3.jpg", caption: "Varmala Moment", pos: "object-top" },
  { url: "https://media.base44.com/images/public/69eb543eab87c0588bca8309/e35bad22a_photo4.jpg", caption: "Portrait of Love", pos: "object-top" },
  { url: "https://media.base44.com/images/public/69eb543eab87c0588bca8309/16b839fa6_photo5.jpg", caption: "Siblings Together", pos: "object-top" },
  { url: "https://media.base44.com/images/public/69eb543eab87c0588bca8309/bdc84238f_photo6.jpg", caption: "Family Portrait", pos: "object-center" },
  { url: "https://media.base44.com/images/public/69eb543eab87c0588bca8309/4ecdff89b_photo7.jpg", caption: "Grand Celebration", pos: "object-center" },
  { url: "https://media.base44.com/images/public/69eb543eab87c0588bca8309/1a4851813_photo8.jpg", caption: "Guests & Loved Ones", pos: "object-center" },
  { url: "https://media.base44.com/images/public/69eb543eab87c0588bca8309/3bf4133f9_photo9.jpg", caption: "The Couple", pos: "object-top" },
  { url: "https://media.base44.com/images/public/69eb543eab87c0588bca8309/f442cf30c_photo10.jpg", caption: "Bridal Elegance", pos: "object-top" },
];

function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-gradient-to-br from-rose-900 via-rose-800 to-pink-900 overflow-hidden">
      <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-14 px-6">
        <p className="font-body text-xs tracking-[0.5em] uppercase text-rose-300 mb-3">Our Story in Frames</p>
        <h2 className="font-heading text-5xl md:text-6xl font-light text-white">Gallery</h2>
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="h-px w-12 bg-rose-400/50" />
          <Heart className="w-4 h-4 text-rose-300 fill-rose-300" />
          <div className="h-px w-12 bg-rose-400/50" />
        </div>
        <p className="font-body text-sm text-rose-300 mt-4">Click any photo to view in 3D ✨</p>
      </motion.div>

      {/* Scrolling track — left to right */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-5 px-6"
          animate={inView ? { x: [0, -(285 * GALLERY_IMGS.length)] } : {}}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ width: "max-content" }}>
          {[...GALLERY_IMGS, ...GALLERY_IMGS].map((img, i) =>
            <motion.div
              key={i}
              className="flex-shrink-0 w-64 h-96 rounded-2xl overflow-hidden cursor-pointer relative group shadow-xl border border-white/10"
              whileHover={{ scale: 1.04, y: -8 }}
              onClick={() => setLightbox(img)}
              initial={{ opacity: 0, x: -60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i % GALLERY_IMGS.length * 0.07 }}>
              <img src={img.url} alt={img.caption} className={`w-full h-full object-cover ${img.pos} transition-transform duration-500 group-hover:scale-110`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-heading text-white text-lg">{img.caption}</p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* 3D Lightbox */}
      <AnimatePresence>
        {lightbox &&
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}>
            <motion.div
              className="relative max-w-2xl w-full"
              initial={{ scale: 0.5, rotateY: 90, opacity: 0 }}
              animate={{ scale: 1, rotateY: 0, opacity: 1 }}
              exit={{ scale: 0.5, rotateY: -90, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              onClick={(e) => e.stopPropagation()}
              style={{ perspective: 1200, transformStyle: "preserve-3d" }}>
              <motion.div
                whileHover={{ rotateY: 5, rotateX: -3, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] border-2 border-white/20"
                style={{ transformStyle: "preserve-3d" }}>
                <img src={lightbox.url} alt={lightbox.caption} className="w-full object-cover" />
                <div className="bg-gradient-to-b from-rose-900 to-black px-6 py-4 text-center">
                  <p className="font-heading text-2xl text-white">{lightbox.caption}</p>
                  <p className="font-body text-xs text-rose-300 mt-1 tracking-widest">✦ Lavanya &amp; Aparna Babu ✦</p>
                </div>
              </motion.div>
              <button onClick={() => setLightbox(null)} className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg hover:bg-rose-700">
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════
// SECTION 9 — WISHES (warm welcome, unique style)
// ══════════════════════════════════════════════════════════════════
function WishesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [wishes, setWishes] = useState([
  { name: "Meera Krishnan", msg: "Wishing you both a lifetime of love, laughter and beautiful memories! 🌸" },
  { name: "Rahul & Priya", msg: "May your journey together be filled with endless happiness. Congratulations! 💕" },
  { name: "Sunita Aunty", msg: "So happy for you both! Lavanya and Aparna, you are made for each other. 🙏" }]
  );
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !msg.trim()) return;
    setWishes([{ name, msg }, ...wishes]);
    setName("");
    setMsg("");
    setSubmitted(true);
    fireConfetti(["#FFB6C1", "#FFD700", "#FF69B4"]);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <section id="wishes" className="min-h-screen px-6 py-24 bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50">
      <div className="max-w-3xl mx-auto">
        {/* Warm welcome header */}
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.5em] uppercase text-rose-400 mb-3">With Open Arms</p>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-rose-800">Welcome, Dear Guest</h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-12 bg-rose-300" />
            <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
            <div className="h-px w-12 bg-rose-300" />
          </div>

          {/* Unique warm welcome message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-10 bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-rose-100 shadow-sm text-left relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100/50 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-100/50 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <span className="font-heading text-6xl text-rose-200 leading-none block mb-2">"</span>
              <p className="font-heading text-xl md:text-2xl text-rose-800 italic leading-relaxed">
                You didn't just receive an invitation — you received a piece of our heart.
              </p>
              <p className="font-body text-sm text-rose-600 mt-4 leading-relaxed">
                Your presence at our wedding is the greatest gift we could ever ask for. As two families become one, we welcome you not just as a guest but as a cherished part of our forever story.
              </p>
              <p className="font-heading text-lg text-rose-700 mt-5 italic">
                — With all our love, Lavanya &amp; Aparna Babu 💕
              </p>
            </div>
          </motion.div>

          {/* Audio greeting button */}
          <AudioGreeting />

          <p className="font-body text-sm text-rose-500 mt-8">Leave your love and blessings below 🌸</p>
        </motion.div>

        {/* Form */}
        <motion.form initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.7 }} onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-rose-100 shadow-sm mb-10">
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-rose-200 bg-rose-50/50 font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-rose-300 mb-4" />
          <textarea placeholder="Write your wishes here... 💕" value={msg} onChange={(e) => setMsg(e.target.value)} rows={4} className="w-full px-4 py-3 rounded-xl border border-rose-200 bg-rose-50/50 font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-rose-300 resize-none mb-4" />
          <button type="submit" className="w-full bg-rose-600 text-white font-body text-xs tracking-[0.3em] uppercase py-3 rounded-xl hover:bg-rose-700 transition-colors">
            {submitted ? "🎉 Thank you!" : "Send Wishes"}
          </button>
        </motion.form>

        {/* Wishes list */}
        <div className="space-y-4">
          {wishes.map((w, i) => null











          )}
        </div>
      </div>
    </section>);

}

// ══════════════════════════════════════════════════════════════════
// FOOTER
// ══════════════════════════════════════════════════════════════════
const NAV_IDS = [
{ label: "Welcome", id: "welcome" },
{ label: "Save the Date", id: "save-the-date" },
{ label: "Countdown", id: "countdown" },
{ label: "Events", id: "events" },
{ label: "Dress Code", id: "dress-code" },
{ label: "Schedule", id: "schedule" },
{ label: "Venue", id: "venue" },
{ label: "Gallery", id: "gallery" },
{ label: "Wishes", id: "wishes" }];


function WeddingFooter() {
  function scrollTo(id) {document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });}
  return (
    <footer className="bg-rose-900 text-white px-6 py-16 text-center">
      <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden bg-[#f5f0e8]">
        <img src={LOGO_IMG} alt="L&A Logo" className="rounded-[20px] w-full h-full object-cover scale-[0.85]" />
      </div>
      <div className="flex items-center justify-center gap-3 mb-3">
        <Heart className="w-4 h-4 text-rose-300 fill-rose-300" />
        <h3 className="font-heading text-3xl md:text-4xl text-white">Lavanya &amp; Aparna Babu</h3>
        <Heart className="w-4 h-4 text-rose-300 fill-rose-300" />
      </div>
      
      





      
      <div className="h-px bg-rose-700 max-w-xs mx-auto mb-8" />
      <p className="font-body text-xs text-rose-400 tracking-widest uppercase">#LavanyaAparnaForever</p>
      <p className="font-body text-xs text-rose-500 mt-2">Made with 💕 for our special day</p>
    </footer>);

}

// ══════════════════════════════════════════════════════════════════
// STICKY NAV
// ══════════════════════════════════════════════════════════════════
function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  function scrollTo(id) {document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });setOpen(false);}
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-rose-100" : "bg-transparent"}`}>
      













      
      <AnimatePresence>
        {open &&
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-white border-t border-rose-100 overflow-hidden">
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV_IDS.map((n) =>
            <button key={n.id} onClick={() => scrollTo(n.id)} className="font-body text-sm tracking-widest uppercase text-rose-500 text-left">{n.label}</button>
            )}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

}

// ══════════════════════════════════════════════════════════════════
// ROOT EXPORT
// ══════════════════════════════════════════════════════════════════
// Exported ref so WishesSection can pause/resume bg music
export const bgMusicRef = React.createRef();

function BackgroundMusic() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    bgMusicRef.current = audioRef.current;
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.25;
    audio.play().then(() => setPlaying(true)).catch(() => {});
  }, []);

  // Keep ref in sync after mount
  useEffect(() => {
    bgMusicRef.current = audioRef.current;
  });

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {audio.pause();setPlaying(false);}
    else {audio.play();setPlaying(true);}
  }

  return (
    <>
      <audio ref={audioRef} src={BG_MUSIC_URL} loop preload="auto" />
      <button
        onClick={toggle}
        className="fixed bottom-6 right-6 z-[999] w-12 h-12 rounded-full bg-rose-600 text-white shadow-xl flex items-center justify-center hover:bg-rose-700 transition-all"
        title={playing ? "Pause music" : "Play music"}>
        {playing ?
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg> :
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><polygon points="5,3 19,12 5,21" /></svg>
        }
      </button>
    </>);
}

export default function WeddingPage() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!opened &&
        <motion.div key="invitation" exit={{ opacity: 0, scale: 1.1 }} transition={{ duration: 0.5 }}>
            <InvitationLanding onOpen={() => setOpened(true)} />
          </motion.div>
        }
      </AnimatePresence>
      {opened &&
      <div className="font-body">
          <BackgroundMusic />
          <StickyNav />
          <HeroSection />
          <SaveTheDateSection />
          <CountdownSection />
          <EventsSection />
          <DressCodeSection />
          <ScheduleSection />
          <VenueSection />
          <GallerySection />
          <WishesSection />
          <WeddingFooter />
        </div>
      }
    </>);

}
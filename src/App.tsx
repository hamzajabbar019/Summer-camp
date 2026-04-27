/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Trophy,
  BookOpen,
  Gamepad2,
  Heart,
  Phone,
  Mail,
  ChevronRight,
  Menu,
  X,
  Star,
  Users,
  ShieldCheck,
  Zap,
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  Sparkles,
  Rocket,
  Palette,
  Music
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- Types ---
interface Activity {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface ActivityCategory {
  category: string;
  items: Activity[];
  accentColor: string;
}

interface ScheduleDay {
  day: string;
  date: string;
  venue: string;
  time: string;
  details: string;
  color: string;
}

// --- Data ---
const SCHEDULE: ScheduleDay[] = [
  {
    day: "Day 1 & 2",
    date: "July 10th - 11th, 2026",
    venue: "Rose Garden",
    time: "8:00 AM - 1:00 PM",
    details: "Inauguration, Sunnah Sports, and Skill Workshops.",
    color: "bg-sky-400"
  },
  {
    day: "Day 3",
    date: "July 12th, 2026",
    venue: "Jamia Millia Masjid",
    time: "11:00 AM - 9:00 PM",
    details: "Outdoor Camping, Spiritual Reminders, and Night Vigil.",
    color: "bg-yellow-400"
  },
  {
    day: "Day 4",
    date: "July 13th, 2026",
    venue: "Farm House",
    time: "8:00 AM - 7:30 PM",
    details: "Grand Finale, Science Exhibition, and Award Ceremony.",
    color: "bg-orange-500"
  }
];

const ACTIVITIES: ActivityCategory[] = [
  {
    category: "Sunnah Sports",
    accentColor: "text-sky-500",
    items: [
      { title: "Horse Riding", description: "Experience the noble art of equestrianism.", icon: <Zap className="w-5 h-5" />, color: "bg-sky-100 text-sky-600" },
      { title: "Archery", description: "Focus, aim, and release with precision.", icon: <Zap className="w-5 h-5" />, color: "bg-sky-100 text-sky-600" }
    ]
  },
  {
    category: "Physical & Skills",
    accentColor: "text-lime-500",
    items: [
      { title: "Karate", description: "Self-defense and discipline training.", icon: <ShieldCheck className="w-5 h-5" />, color: "bg-lime-100 text-lime-600" },
      { title: "Public Speaking", description: "Find your voice and lead with confidence.", icon: <Users className="w-5 h-5" />, color: "bg-lime-100 text-lime-600" },
      { title: "Art Gallery", description: "Unleash your creativity on canvas.", icon: <Palette className="w-5 h-5" />, color: "bg-lime-100 text-lime-600" }
    ]
  },
  {
    category: "Academic Excellence",
    accentColor: "text-purple-500",
    items: [
      { title: "Science Exhibition", description: "Innovative projects and experiments.", icon: <Rocket className="w-5 h-5" />, color: "bg-purple-100 text-purple-600" },
      { title: "Quiz Competition", description: "Test your knowledge across subjects.", icon: <BookOpen className="w-5 h-5" />, color: "bg-purple-100 text-purple-600" },
      { title: "Spell Bee", description: "Master the art of vocabulary.", icon: <BookOpen className="w-5 h-5" />, color: "bg-purple-100 text-purple-600" }
    ]
  },
  {
    category: "Fun & Games",
    accentColor: "text-orange-500",
    items: [
      { title: "Inaam Ghar", description: "Exciting prizes and interactive fun.", icon: <Gamepad2 className="w-5 h-5" />, color: "bg-orange-100 text-orange-600" },
      { title: "Stack n Run", description: "Speed and coordination challenges.", icon: <Gamepad2 className="w-5 h-5" />, color: "bg-orange-100 text-orange-600" },
      { title: "Water n Sponge", description: "Cool down with refreshing water games.", icon: <Gamepad2 className="w-5 h-5" />, color: "bg-orange-100 text-orange-600" },
      { title: "Tug of War", description: "The ultimate test of team strength.", icon: <Gamepad2 className="w-5 h-5" />, color: "bg-orange-100 text-orange-600" }
    ]
  },
  {
    category: "Spiritual Growth",
    accentColor: "text-rose-500",
    items: [
      { title: "Daily Reminders", description: "Heart-softening Islamic insights.", icon: <Heart className="w-5 h-5" />, color: "bg-rose-100 text-rose-600" },
      { title: "Muslim Hain Hum", description: "Special presentation on our global identity.", icon: <Heart className="w-5 h-5" />, color: "bg-rose-100 text-rose-600" }
    ]
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Schedule", href: "#schedule" },
    { name: "Activities", href: "#activities" },
    { name: "Memories", href: "#memories" },
    { name: "Sponsorship", href: "#sponsorship" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
        ? "bg-white/90 backdrop-blur-xl py-4 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
        : "bg-transparent py-8"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 group"
        >
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg rotate-6 group-hover:rotate-12 transition-transform overflow-hidden">
            <img
              src="https://live.staticflickr.com/7156/6674386563_04f4f4a9ae_b.jpg"
              alt="Bazm-e-Sathi Logo"
              className="w-full h-full object-contain p-1"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className={`text-2xl font-playful font-black tracking-tighter uppercase leading-none ${scrolled ? "text-sky-900" : "text-white"}`}>
              Summer <span className="text-orange-500">Camp</span>
            </span>
            <span className={`text-[10px] font-playful font-black uppercase tracking-[0.3em] ${scrolled ? "text-sky-400" : "text-white/60"}`}>
              Shah Faisal 2k26
            </span>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-playful font-black uppercase tracking-widest transition-all hover:text-orange-500 ${scrolled ? "text-sky-900" : "text-white"
                }`}
            >
              {link.name}
            </a>
          ))}
          <motion.a
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            href="#register"
            className="bg-orange-500 text-white px-8 py-3 rounded-2xl font-playful font-black uppercase tracking-widest shadow-lg hover:bg-yellow-400 transition-colors"
          >
            Contact
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-3 rounded-2xl transition-colors ${scrolled ? "bg-sky-50 text-sky-900" : "bg-white/10 text-white"
            }`}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl p-8 flex flex-col gap-6 md:hidden border-t border-sky-50"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-playful font-black text-sky-900 uppercase tracking-widest hover:text-orange-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setIsOpen(false)}
              className="bg-orange-500 text-white p-6 rounded-3xl text-center text-2xl font-playful font-black uppercase tracking-widest shadow-xl"
            >
              Register Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 bg-sky-500 overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600 z-10 opacity-90" />
        <img
          src="https://picsum.photos/seed/summer-fun/1920/1080"
          alt="Camp Background"
          className="w-full h-full object-cover mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Playful Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5,
              rotate: Math.random() * 360
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              rotate: [null, Math.random() * 360 + 360]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute text-white/20"
          >
            {i % 3 === 0 ? <Star className="w-12 h-12 fill-current" /> : i % 3 === 1 ? <Sparkles className="w-8 h-8" /> : <Heart className="w-10 h-10 fill-current" />}
          </motion.div>
        ))}
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-6 w-full text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="inline-flex items-center gap-3 px-8 py-3 bg-white/20 backdrop-blur-md border-2 border-white/40 text-white rounded-full text-sm font-playful font-black uppercase tracking-[0.2em] mb-12 shadow-2xl"
          >
            <span className="animate-bounce">🚀</span> 25 Years of Adventure
          </motion.div>
          <h1 className="text-6xl md:text-[9rem] lg:text-[11rem] font-playful font-black text-white leading-[0.85] mb-16 tracking-tighter uppercase drop-shadow-[0_10px_10px_rgba(0,0,0,0.2)]">
            Camp, Create,<br />
            <span className="text-yellow-300 drop-shadow-[0_10px_0_rgba(234,179,8,0.3)]">Conquer!</span>
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.a
              whileHover={{ scale: 1.1, rotate: -2 }}
              whileTap={{ scale: 0.9 }}
              href="#register"
              className="group relative bg-orange-500 text-white px-16 py-8 rounded-[3rem] text-3xl font-playful font-black uppercase tracking-widest hover:bg-orange-400 transition-all shadow-[0_15px_0_rgb(194,65,12)] active:translate-y-3 active:shadow-none flex items-center gap-6"
            >
              Register Now!
              <ArrowRight className="w-10 h-10 group-hover:translate-x-3 transition-transform" />
            </motion.a>
            <div className="max-w-sm text-center md:text-left">
              <p className="text-white text-2xl font-playful font-bold leading-tight drop-shadow-md">
                "Level Up Your Summer & Spark Your Imagination!"
              </p>
              <div className="flex items-center gap-3 mt-4 text-sky-100 font-black uppercase tracking-widest text-xs">
                <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse" />
                Early Bird & Sibling Discounts!
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  const organizers = [
    { name: "AFNAN AHMED", role: "ORGANIZER", img: "/images/6.jpeg" },
    { name: "SALMAN SALEEM", role: "ORGANIZER", img: "/images/8.jpeg" },
    { name: "MAZHAR AHMED KHAN", role: "ORGANIZER", img: "/images/9.jpeg" },
    { name: "KHALID SIDDIQUI", role: "ORGANIZER", img: "/images/1.jpeg" },
  ];

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-[12px] border-sky-100 shadow-2xl rotate-3">
              <img
                src="/images/4.jpeg"
                alt="About Summer Camp"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Best Moment Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute -top-8 -left-8 z-20"
            >
              <div className="relative w-36 h-36 rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl rotate-6">
                <img src="/images/5.jpeg" alt="Best Moment" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-orange-500/70 flex items-center justify-center">
                  <span className="text-white font-playful font-black text-sm uppercase tracking-tight text-center leading-tight">⭐ Best<br />Moment</span>
                </div>
              </div>
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl z-20 -rotate-12">
              <span className="text-white font-playful font-black text-2xl text-center leading-tight">25 YEARS<br />LEGACY</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.span className="text-orange-500 font-playful font-black uppercase tracking-[0.4em] mb-6 block">
              Who We Are
            </motion.span>
            <h2 className="text-6xl md:text-8xl font-playful font-black tracking-tighter uppercase leading-none text-sky-900 mb-12">
              Sparking <span className="text-sky-500">Imagination</span> Since 2001
            </h2>
            <div className="space-y-8 text-sky-800/80 text-xl font-bold leading-relaxed">
              <p>
                Summer Camp 2k26 by Bazm-e-Sathi (Shah Faisal Chapter) is more than just a camp—it's a journey of discovery, creativity, and growth. Powered by the Islamic Society of Children Hobbies, we've been building memories for 25 years.
              </p>
              <p>
                Our mission is to provide a safe, energetic, and spiritually enriching environment where children can "Level Up" their skills while staying connected to their roots.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="bg-sky-50 p-6 rounded-3xl border-2 border-sky-100">
                  <div className="text-4xl font-playful font-black text-sky-500 mb-2">500+</div>
                  <div className="text-sm font-playful font-black uppercase tracking-widest text-sky-300">Happy Campers</div>
                </div>
                <div className="bg-orange-50 p-6 rounded-3xl border-2 border-orange-100">
                  <div className="text-4xl font-playful font-black text-orange-500 mb-2">20+</div>
                  <div className="text-sm font-playful font-black uppercase tracking-widest text-orange-300">Activities</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Previous Organizers Section */}
        <div className="mt-40">
          <div className="text-center mb-20">
            <motion.span className="text-sky-500 font-playful font-black uppercase tracking-[0.4em] mb-6 block">Our Team</motion.span>
            <h3 className="text-5xl md:text-7xl font-playful font-black text-sky-900 uppercase tracking-tighter">Previous <span className="text-orange-500">Organizers</span></h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {organizers.map((org, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-sky-50 shadow-xl mb-6 group-hover:rotate-3 transition-transform">
                  <img
                    src={org.img}
                    alt={org.name}
                    className="w-full h-full object-cover transition-all"
                  />
                </div>
                <h4 className="text-2xl font-playful font-black text-sky-900 uppercase tracking-tight">{org.name}</h4>
                <p className="text-sky-400 font-playful font-black uppercase tracking-widest text-xs mt-2">{org.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Schedule = () => {
  return (
    <section id="schedule" className="py-32 bg-sky-50 relative overflow-hidden">
      {/* Decorative Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          x: [0, 50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-yellow-200/40 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [0, -90, 0],
          x: [0, -50, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 100, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/4 w-64 h-64 bg-lime-200/30 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sky-600 font-playful font-black uppercase tracking-[0.4em] mb-6 block"
          >
            The Adventure Map
          </motion.span>
          <h2 className="text-6xl md:text-8xl font-playful font-black text-sky-900 tracking-tighter uppercase leading-none">
            Your <span className="text-orange-500 inline-block hover:rotate-3 transition-transform">Timeline</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {SCHEDULE.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -20, scale: 1.05 }}
              className="bg-white p-10 rounded-[3.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-b-[12px] border-sky-100 hover:border-sky-400 transition-all group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className={`w-20 h-20 ${item.color} rounded-[2rem] flex items-center justify-center mb-10 shadow-xl border-4 border-white`}
              >
                <Calendar className="text-white w-10 h-10" />
              </motion.div>
              <h3 className="text-4xl font-playful font-black text-sky-900 mb-2 uppercase group-hover:text-sky-600 transition-colors">{item.day}</h3>
              <p className="text-sky-500 font-playful font-black text-xl mb-10 uppercase tracking-widest">{item.date}</p>

              <div className="space-y-6">
                <div className="flex items-center gap-6 bg-sky-50/80 p-6 rounded-3xl border-2 border-transparent group-hover:border-sky-200 transition-all">
                  <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-playful font-black text-sky-300 uppercase tracking-widest mb-1">Where</p>
                    <p className="text-sky-900 font-black text-xl leading-tight">{item.venue}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 bg-sky-50/80 p-6 rounded-3xl border-2 border-transparent group-hover:border-sky-200 transition-all">
                  <div className="w-12 h-12 bg-sky-100 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-sky-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-playful font-black text-sky-300 uppercase tracking-widest mb-1">When</p>
                    <p className="text-sky-900 font-black text-xl leading-tight">{item.time}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t-2 border-sky-50">
                <p className="text-sky-700/60 font-bold italic leading-relaxed text-lg">
                  "{item.details}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Activities = () => {
  return (
    <section id="activities" className="py-32 bg-white text-sky-900 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 border-8 border-sky-500 rounded-full" />
        <div className="absolute bottom-20 right-10 w-60 h-60 border-8 border-orange-500 rounded-[3rem] rotate-45" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[40px] border-yellow-100 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-sky-600 font-playful font-black uppercase tracking-[0.4em] mb-6 block"
          >
            The Fun Zone
          </motion.span>
          <h2 className="text-6xl md:text-9xl font-playful font-black tracking-tighter uppercase leading-none">
            Awesome <span className="text-yellow-400 drop-shadow-[0_8px_0_rgba(234,179,8,0.2)]">Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACTIVITIES.flatMap((cat, catIdx) =>
            cat.items.map((item, itemIdx) => (
              <motion.div
                key={`${catIdx}-${itemIdx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (catIdx + itemIdx) * 0.05 }}
                whileHover={{
                  y: -15,
                  scale: 1.02,
                  boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.15)"
                }}
                className="group bg-sky-50/50 p-8 rounded-[3rem] border-4 border-transparent hover:border-sky-100 transition-all flex flex-col h-full relative overflow-hidden"
              >
                {/* Category Badge */}
                <div className={`absolute top-6 right-6 px-4 py-1 rounded-full text-[10px] font-playful font-black uppercase tracking-widest ${cat.accentColor.replace('text', 'bg')} text-white shadow-sm`}>
                  {cat.category}
                </div>

                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: itemIdx * 0.5 }}
                  className={`w-20 h-20 ${item.color} rounded-[2rem] flex items-center justify-center group-hover:rotate-12 transition-transform shrink-0 shadow-lg border-4 border-white mb-8`}
                >
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-10 h-10" })}
                </motion.div>

                <div className="flex-grow">
                  <h4 className="text-3xl font-playful font-black mb-4 uppercase group-hover:text-sky-600 transition-colors leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-sky-900/70 font-bold leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-sky-100 flex items-center justify-between">
                  <span className="text-xs font-playful font-black text-sky-300 uppercase tracking-widest">Level Up!</span>
                  <ArrowRight className="w-5 h-5 text-sky-200 group-hover:text-sky-500 group-hover:translate-x-2 transition-all" />
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

const Sponsorship = () => {
  return (
    <section id="sponsorship" className="py-32 bg-sky-600 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '40px 40px' }} />

      {/* Floating Shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-64 h-64 border-[20px] border-white/10 rounded-full"
      />
      <motion.div
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 w-32 h-32 bg-yellow-400/20 rounded-3xl rotate-12"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-playful font-black uppercase tracking-[0.5em] text-white/60 mb-8 block">Partnership</span>
            <h2 className="text-6xl md:text-9xl font-playful font-black text-white tracking-tighter uppercase leading-[0.9] mb-12 drop-shadow-lg">
              Be a <span className="text-yellow-300 underline decoration-white/40 decoration-wavy underline-offset-[12px]">Super</span> Sponsor
            </h2>
            <p className="text-sky-50 text-2xl font-bold leading-relaxed mb-16 max-w-xl">
              Help us create magic for 350+ students! Your brand will be seen across 4 premium venues and our massive digital network.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-16">
              {[
                "350+ Active Students",
                "Logo on Cool Merch",
                "Social Media Shoutouts",
                "On-site Big Banners"
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-6 bg-white/10 p-6 rounded-[2rem] border-2 border-white/20 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-xl rotate-6 shrink-0">
                    <Star className="w-6 h-6 text-white fill-white" />
                  </div>
                  <span className="text-white font-playful font-black uppercase tracking-widest text-sm leading-tight">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              whileHover={{ scale: 1.1, rotate: -2 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:ijtshahfaisalchapter@gmail.com
"
              className="inline-flex items-center gap-6 bg-white text-sky-600 px-12 py-6 rounded-[2.5rem] text-xl font-playful font-black uppercase tracking-widest hover:bg-yellow-300 hover:text-sky-900 transition-all shadow-[0_15px_30px_rgba(0,0,0,0.2)]"
            >
              Request Deck
              <ArrowRight className="w-8 h-8" />
            </motion.a>
          </motion.div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6 mb-8">
              {["/images/4.jpeg", "/images/5.jpeg", "/images/2.jpeg", "/images/3.jpeg"].map((img, i) => (
                <motion.div
                  key={i}
                  animate={{ y: i % 2 === 0 ? [0, -15, 0] : [0, 15, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-[2.5rem] overflow-hidden border-8 border-white/20 shadow-2xl aspect-square"
                >
                  <img src={img} alt={`Camp moment ${i + 1}`} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-10">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white p-10 rounded-[4rem] text-center shadow-[0_30px_60px_rgba(0,0,0,0.1)] border-b-[12px] border-sky-100"
              >
                <span className="block text-5xl font-playful font-black text-sky-600 mb-4">350+</span>
                <span className="text-xs font-playful font-black text-sky-300 uppercase tracking-[0.3em]">Students</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white p-10 rounded-[4rem] text-center shadow-[0_30px_60px_rgba(0,0,0,0.1)] border-b-[12px] border-orange-100 mt-10"
              >
                <span className="block text-5xl font-playful font-black text-orange-500 mb-4">25yr</span>
                <span className="text-xs font-playful font-black text-orange-300 uppercase tracking-[0.3em]">Legacy</span>
              </motion.div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ rotate: [12, -12, 12], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-yellow-400 rounded-full border-[10px] border-white shadow-[0_20px_40px_rgba(0,0,0,0.2)] flex items-center justify-center z-20"
            >
              <span className="text-white font-playful font-black text-center leading-none text-2xl uppercase tracking-tighter">BIG<br />REACH</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <footer id="contact" className="bg-sky-900 text-white py-32 rounded-t-[5rem] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
        <div className="absolute top-20 right-10 w-40 h-40 border-8 border-yellow-400 rounded-full" />
        <div className="absolute bottom-20 left-10 w-60 h-60 border-8 border-orange-500 rounded-[3rem] -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="col-span-full lg:col-span-1">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl rotate-6 overflow-hidden">
                <img
                  src="https://live.staticflickr.com/7156/6674386563_04f4f4a9ae_b.jpg"
                  alt="Bazm-e-Sathi Logo"
                  className="w-full h-full object-contain p-1"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-playful font-black tracking-tight uppercase leading-none">Summer <span className="text-orange-500">Camp</span></span>
                <span className="text-[10px] font-playful font-black uppercase tracking-[0.3em] text-white/40">Shah Faisal 2k26</span>
              </div>
            </div>
            <p className="text-sky-100/60 font-bold leading-relaxed mb-10 text-lg">
              Bazm-e-Sathi (Shah Faisal Chapter) powered by Islamic Society of Children Hobbies.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 12 }}
                href="https://www.facebook.com/bazmsathishafaisal/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white/60 hover:text-white hover:bg-sky-600 transition-all shadow-lg"
              >
                <Facebook className="w-8 h-8" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -12 }}
                href="#"
                className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white/60 hover:text-white hover:bg-orange-500 transition-all shadow-lg"
              >
                <Instagram className="w-8 h-8" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 12 }}
                href="#"
                className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white/60 hover:text-white hover:bg-sky-400 transition-all shadow-lg"
              >
                <Twitter className="w-8 h-8" />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-playful font-black uppercase tracking-[0.5em] text-yellow-400 mb-10">Quick Links</h4>
            <ul className="space-y-6 text-sky-100/60 font-playful font-black text-sm uppercase tracking-widest">
              <li><a href="#home" className="hover:text-white hover:translate-x-2 transition-all inline-block">Home</a></li>
              <li><a href="#about" className="hover:text-white hover:translate-x-2 transition-all inline-block">About</a></li>
              <li><a href="#schedule" className="hover:text-white hover:translate-x-2 transition-all inline-block">Schedule</a></li>
              <li><a href="#activities" className="hover:text-white hover:translate-x-2 transition-all inline-block">Activities</a></li>
              <li><a href="#memories" className="hover:text-white hover:translate-x-2 transition-all inline-block">Memories</a></li>
              <li><a href="#sponsorship" className="hover:text-white hover:translate-x-2 transition-all inline-block">Sponsorship</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-playful font-black uppercase tracking-[0.5em] text-yellow-400 mb-10">Get in Touch</h4>
            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shadow-inner">
                  <Phone className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <p className="text-[10px] font-playful font-black uppercase tracking-widest text-sky-100/40 mb-1">Call Us</p>
                  <p className="text-xl font-playful font-black">+92 332 6999982</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shadow-inner">
                  <Mail className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <p className="text-[10px] font-playful font-black uppercase tracking-widest text-sky-100/40 mb-1">Email Us</p>
                  <a href="mailto:ijtshahfaisalchapter@gmail.com" className="text-xl font-playful font-black truncate max-w-[200px] hover:text-sky-400 transition-colors">ijtshahfaisalchapter@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-playful font-black uppercase tracking-[0.5em] text-yellow-400 mb-10">Location</h4>
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shadow-inner shrink-0">
                <MapPin className="w-6 h-6 text-lime-400" />
              </div>
              <div>
                <p className="text-[10px] font-playful font-black uppercase tracking-widest text-sky-100/40 mb-1">Our Base</p>
                <p className="text-xl font-playful font-black leading-tight">Shah Faisal, Karachi, Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sky-100/40 font-playful font-black text-xs uppercase tracking-[0.3em]">
            &copy; 2026 Summer Camp Shah Faisal. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8 text-sky-100/40 font-playful font-black text-[10px] uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Gallery = () => {
  const memories = [
    { id: 1, title: "Inspiring Talks", img: "/images/19.jpeg", rotate: "-rotate-3" },
    { id: 2, title: "Fun Games", img: "/images/20.jpeg", rotate: "rotate-2" },
    { id: 3, title: "Camp Activities", img: "/images/21.jpeg", rotate: "-rotate-1" },
    { id: 4, title: "Swimming Pool", img: "/images/22.jpeg", rotate: "rotate-3" },
    { id: 5, title: "Gift Distribution", img: "/images/24.jpeg", rotate: "-rotate-2" },
    { id: 6, title: "Leadership", img: "/images/10.jpeg", rotate: "rotate-1" },
  ];

  return (
    <section id="memories" className="py-32 bg-sky-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <Sparkles className="absolute top-20 left-[10%] w-20 h-20 text-sky-400" />
        <Heart className="absolute bottom-20 right-[15%] w-16 h-16 text-orange-400" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-orange-500 font-playful font-black uppercase tracking-[0.4em] mb-6 block"
          >
            Flashback
          </motion.span>
          <h2 className="text-6xl md:text-9xl font-playful font-black tracking-tighter uppercase leading-none text-sky-900">
            Camp <span className="text-sky-500 drop-shadow-[0_8px_0_rgba(14,165,233,0.2)]">Memories</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {memories.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 20 }}
              className={`bg-white p-6 pb-16 shadow-2xl rounded-sm ${photo.rotate} hover:rotate-0 transition-all duration-500 border-8 border-white`}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm mb-6 bg-sky-100">
                <img
                  src={photo.img}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center font-playful font-black text-2xl text-sky-900 uppercase tracking-tight">
                {photo.title}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.facebook.com/bazmsathishafaisal/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-sky-600 text-white px-12 py-6 rounded-[2.5rem] text-xl font-playful font-black uppercase tracking-widest shadow-xl hover:bg-sky-500 transition-all"
          >
            View Full Gallery
            <Facebook className="w-8 h-8" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

const Sponsors = () => {
  const sponsors = [
    { name: "Al Khidmat Foundation", img: "/images/11.png" },
    { name: "The Learning Space", img: "/images/12.jpeg" },
    { name: "Helping Hand", img: "/images/16.png" },
    { name: "Dar-e-Arqam Schools", img: "/images/15.png" },
    { name: "Al Ghaffar Travel", img: "/images/17.jpeg" },
    { name: "Quice Fruit Drinks", img: "/images/14.jpeg" },
  ];

  return (
    <section id="sponsors" className="py-32 bg-sky-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-orange-500 font-playful font-black uppercase tracking-[0.4em] mb-6 block"
          >
            Our Partners
          </motion.span>
          <h2 className="text-6xl md:text-8xl font-playful font-black tracking-tighter uppercase leading-none text-sky-900">
            Exclusive <span className="text-sky-500">Sponsors</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {sponsors.map((sponsor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-5 group"
            >
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border-4 border-sky-100 group-hover:border-sky-300 transition-all w-full h-48 flex items-center justify-center overflow-hidden">
                <img
                  src={sponsor.img}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain transition-all"
                />
              </div>
              <p className="text-sky-900 font-playful font-black text-center uppercase tracking-tight text-base">{sponsor.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RegistrationForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // ─── GOOGLE SHEETS SETUP ───────────────────────────────────────────────────
  // 1. Go to https://sheets.google.com and create a new sheet in ijtshahfaisalchapter@gmail.com
  // 2. Name columns: Timestamp | Child Name | Age | Parent Name | Phone | Area
  // 3. Click Extensions > Apps Script, paste the code below, then deploy as Web App
  //    (Execute as: Me, Who has access: Anyone) and copy the Web App URL here.
  //
  // Apps Script code:
  // function doPost(e) {
  //   var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  //   var data = (e.postData && e.postData.contents) ? JSON.parse(e.postData.contents) : e.parameter;
  //   sheet.appendRow([new Date(), data.childName || e.parameter.childName, data.age || e.parameter.age, data.parentName || e.parameter.parentName, data.phone || e.parameter.phone, data.area || e.parameter.area]);
  //   return ContentService.createTextOutput('OK');
  // }
  // ──────────────────────────────────────────────────────────────────────────
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzm2Urt_zhN15KKcR2L9B6XIeGnRFIFP17BkpmzJNdZNvON1H2kG4ijuCtXtqsdw700XA/exec';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Construct URL-encoded string manually for maximum compatibility
      const body = Object.entries(data)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value.toString())}`)
        .join('&');

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: body,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      setStatus('success');
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-[3rem] text-center shadow-2xl border-4 border-sky-100"
      >
        <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <ShieldCheck className="w-10 h-10 text-sky-500" />
        </div>
        <h3 className="text-3xl font-playful font-black text-sky-900 mb-4 uppercase">Registration Received!</h3>
        <p className="text-sky-700 font-bold text-lg mb-8">We've saved your spot. See you at the camp!</p>
        <button
          onClick={() => setStatus('idle')}
          className="text-sky-50 font-playful font-black uppercase tracking-widest bg-sky-500 px-8 py-4 rounded-2xl hover:bg-sky-600 transition-colors"
        >
          Register another child
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border-4 border-sky-50 relative z-10 text-left">
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="space-y-2">
          <label className="text-xs font-playful font-black uppercase tracking-widest text-sky-300 ml-4">Child's Name</label>
          <input
            required
            name="childName"
            type="text"
            placeholder="Enter name"
            className="w-full px-8 py-5 bg-sky-50/50 border-2 border-transparent focus:border-sky-200 rounded-3xl outline-none transition-all font-bold text-sky-900"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-playful font-black uppercase tracking-widest text-sky-300 ml-4">Age</label>
          <input
            required
            name="age"
            type="number"
            placeholder="Enter age"
            className="w-full px-8 py-5 bg-sky-50/50 border-2 border-transparent focus:border-sky-200 rounded-3xl outline-none transition-all font-bold text-sky-900"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-playful font-black uppercase tracking-widest text-sky-300 ml-4">Parent's Name</label>
          <input
            required
            name="parentName"
            type="text"
            placeholder="Enter name"
            className="w-full px-8 py-5 bg-sky-50/50 border-2 border-transparent focus:border-sky-200 rounded-3xl outline-none transition-all font-bold text-sky-900"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-playful font-black uppercase tracking-widest text-sky-300 ml-4">Phone Number</label>
          <input
            required
            name="phone"
            type="tel"
            placeholder="Enter number"
            className="w-full px-8 py-5 bg-sky-50/50 border-2 border-transparent focus:border-sky-200 rounded-3xl outline-none transition-all font-bold text-sky-900"
          />
        </div>
      </div>

      <div className="space-y-2 mb-12">
        <label className="text-xs font-playful font-black uppercase tracking-widest text-sky-300 ml-4">Area / Location</label>
        <input
          required
          name="area"
          type="text"
          placeholder="Enter your area (e.g. Block 1, Shah Faisal)"
          className="w-full px-8 py-5 bg-sky-50/50 border-2 border-transparent focus:border-sky-200 rounded-3xl outline-none transition-all font-bold text-sky-900"
        />
      </div>

      <button
        disabled={status === 'submitting'}
        type="submit"
        className="w-full bg-orange-500 text-white py-8 rounded-[2.5rem] text-2xl font-playful font-black uppercase tracking-widest shadow-[0_12px_0_rgb(194,65,12)] hover:bg-orange-400 active:translate-y-2 active:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Saving...' : 'Register Now!'}
      </button>

      {status === 'error' && (
        <p className="text-red-500 text-center mt-6 font-bold">Something went wrong. Please try again or contact us via WhatsApp.</p>
      )}
    </form>
  );
};

const RegistrationSection = () => {
  return (
    <section className="bg-white relative overflow-hidden">
      {/* Orange CTA — anchor here so Contact button lands on this */}
      <div id="register" className="bg-gradient-to-br from-orange-500 to-orange-600 py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.span
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block text-sm font-playful font-black uppercase tracking-[0.5em] text-white/60 mb-8"
          >
            Don't Miss Out!
          </motion.span>
          <h2 className="text-6xl md:text-[9rem] font-playful font-black text-white tracking-tighter uppercase leading-[0.85] mb-10 drop-shadow-[0_15px_15px_rgba(0,0,0,0.3)]">
            Let's Go<br />
            <span className="text-yellow-300">Camping!</span>
          </h2>
          <p className="text-white text-2xl font-playful font-bold max-w-2xl mx-auto mb-8 leading-relaxed">
            Secure your spot for only{" "}
            <span className="bg-white text-orange-600 px-4 py-1 rounded-xl shadow-lg">1,000 PKR</span>.
            <span className="text-white/80 text-lg mt-3 block">Early bird & sibling discounts available!</span>
          </p>
          <div className="flex items-center justify-center gap-4 text-white/70 font-playful font-black text-lg uppercase tracking-widest">
            <Phone className="w-5 h-5" />
            +92 332 6999982
          </div>
        </div>
      </div>

      {/* Registration Form below the CTA */}
      <div className="bg-sky-600 py-24 px-6 relative overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, 20, 0], rotate: [0, 45, 0] }}
            transition={{ duration: 3 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
            className="absolute w-4 h-4 rounded-sm opacity-20"
            style={{
              backgroundColor: ['#38bdf8', '#fbbf24', '#f97316', '#a3e635'][i % 4],
              top: (i * 8) % 100 + "%",
              left: (i * 7 + 5) % 100 + "%"
            }}
          />
        ))}
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-yellow-300 font-playful font-black uppercase tracking-[0.5em] mb-4 block"
            >
              Join the Adventure
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-playful font-black text-white tracking-tighter uppercase leading-none mb-6">
              Online <span className="text-yellow-300">Registration</span>
            </h2>
            <p className="text-white/80 text-xl font-bold max-w-xl mx-auto">
              Fill out the form below to secure your spot.
            </p>
          </div>
          <RegistrationForm />
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-sky-500 selection:text-white font-sans">
      <Navbar />
      <Hero />
      <AboutUs />
      <Schedule />
      <Activities />
      <Gallery />
      <Sponsors />
      <Sponsorship />
      <RegistrationSection />
      <Contact />
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { User } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import IconCheck from "/public/images/icon-nobg.png";

export default function Navbar({ heroRef }: { heroRef: React.RefObject<HTMLElement> }) {
  const [showNavbar, setShowNavbar] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("Sobre");

  useEffect(() => {
    if (!heroRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // se menos de 80% do hero estiver visível, mostrar a navbar
        setShowNavbar(entry.intersectionRatio < 0.8);
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), // de 0.00 até 1.00
      }
    );

    observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, [heroRef]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed bottom-6 left-1/2 transition-opacity duration-150 -translate-x-1/2 z-50 ${
        showNavbar ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ zIndex: 1000 }}
    >
      <motion.div
        layout
        className="flex items-center justify-between gap-6 
          px-6 py-2 rounded-full
          backdrop-blur-xl bg-neutral-100/20  
          shadow-[0_4px_30px_rgba(0,0,0,0.1)]
          border border-neutral-100/20"
      >
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Image
            src={IconCheck}
            alt="Timely logo"
            width={80}
            height={80}
            className="mr-3 flex relative z-10"
          />
        </motion.div>

        {/* Links */}
        <div className="flex items-center gap-0.5 text-slate-900 relative">
          {["Sobre", "Planos", "Contato"].map((item) => (
            <motion.button
              key={item}
              onClick={() => setActiveLink(item)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-3 py-1 rounded-full transition select-none z-10"
            >
              {item}
              {activeLink === item && (
                <motion.div
                  layoutId="active-pill"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="absolute inset-0 bg-white/20 rounded-full -z-10"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Ícones */}
        <div className="ml-3 flex items-center gap-0.5 text-slate-900">
          {/* User menu */}
          <div className="relative">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpenMenu(!openMenu)}
              className="p-2 rounded-full hover:bg-neutral-100/20 transition"
            >
              <User size={20} />
            </motion.button>

            <AnimatePresence>
              {openMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute bottom-16 mt-2 w-40 
                    rounded-xl bg-neutral-100/20 text-slate-900 text-sm
                    backdrop-blur-xl border border-white/10 shadow-lg"
                >
                  <motion.button
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                    className="block w-full text-left px-4 py-2"
                  >
                    Cadastre-se
                  </motion.button>
                  <motion.button
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                    className="block w-full text-left px-4 py-2"
                  >
                    Iniciar sessão
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
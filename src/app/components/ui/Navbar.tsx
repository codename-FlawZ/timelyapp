// components/BottomNavbar.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Moon, Sun, User } from "lucide-react";

import IconCheck from "/public/images/icon-nobg.png"; // seu ícone azul

const navItems = ["Sobre", "Planos", "Contato"];

export default function Navbar() {
  const [active, setActive] = useState<string>("Sobre");
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [userMenuOpen, setUserMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fecha o menu ao clicar fora / ESC
  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setUserMenuOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-lg z-40">
      {/* Contêiner EXTERNO: sem overflow-hidden, para o dropdown não ser clipado */}
      <div className="relative overflow-visible" ref={menuRef}>
        {/* Invólucro de vidro (INTERNO): mantém o clipping somente aqui */}
        <motion.div
          className="
            relative flex items-center justify-between
            rounded-full
            border border-white/20
            bg-neutral-800/70
            backdrop-blur-xl
            shadow-[0_8px_30px_rgba(0,0,0,0.25)]
            px-4 py-2
            overflow-hidden
          "
        >
          {/* Brilho líquido ping-pong no FUNDO da navbar */}
          <motion.span
            initial={{ x: "-30%" }}
            animate={{ x: "30%" }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 4,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute top-0 left-0 h-full w-1/2
              bg-gradient-to-r from-transparent via-white/10 to-transparent
            "
          />

          {/* Ícone fixo esquerda */}
          <Image
            src={IconCheck}
            alt="logo"
            width={90}
            height={90}
            className="mr-2 relative z-10"
          />

          {/* Itens centrais */}
          <div className="flex gap-2 flex-1 justify-center relative z-10">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className="relative px-3 py-1 text-neutral-100"
              >
                <AnimatePresence>
                  {active === item && (
                    <motion.span
                      layoutId="active-pill"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.25 }}
                      className="
                        absolute inset-0 rounded-full
                        bg-white/15
                        border border-white/20
                        backdrop-blur-md
                      "
                    />
                  )}
                </AnimatePresence>
                <span className="relative z-10">{item}</span>
              </button>
            ))}
          </div>

          {/* Toggle Dark / Light com transição ~120ms */}
          <button
            onClick={() => setDarkMode((v) => !v)}
            className="p-2 rounded-full hover:bg-white/20 transition relative z-10"
            aria-label="Alternar tema"
          >
            <AnimatePresence mode="wait" initial={false}>
              {darkMode ? (
                <motion.div
                  key="moon"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.12, ease: "easeInOut" }}
                >
                  <Moon className="w-5 h-5 text-white drop-shadow" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.12, ease: "easeInOut" }}
                >
                  <Sun className="w-5 h-5 text-yellow-300 drop-shadow" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Botão User (apenas o botão fica dentro do invólucro) */}
          <button
            onClick={() => setUserMenuOpen((p) => !p)}
            aria-expanded={userMenuOpen}
            className="p-2 rounded-full hover:bg-white/20 transition relative z-10"
          >
            <User className="w-5 h-5 text-white drop-shadow" />
          </button>
        </motion.div>

        {/* Dropdown BOLHA – fora do invólucro com overflow-hidden → não é clipado */}
        <AnimatePresence>
          {userMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.92 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: [1, 1.06, 1], // pulse/respiro ao abrir
              }}
              exit={{ opacity: 0, y: 10, scale: 0.92 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="
                absolute right-2 bottom-[calc(100%+12px)]
                z-50 w-56 rounded-3xl
                bg-neutral-800/70 border border-white/20 backdrop-blur-xl
                shadow-[0_12px_40px_rgba(0,0,0,0.35)]
                overflow-hidden
              "
            >
              {/* Reflexo suave dentro da bolha (discreto) */}
              <motion.span
                initial={{ x: "-40%" }}
                animate={{ x: "40%" }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              />

              {["Cadastre-se", "Iniciar sessão"].map((label) => (
                <button
                  key={label}
                  className="
                    relative w-full px-4 py-3 text-sm text-white text-center
                    transition
                  "
                >
                  <motion.span
                    whileHover={{
                      backgroundColor: "rgba(255,255,255,0.12)",
                      transition: { duration: 0.25 },
                    }}
                    className="absolute inset-0 rounded-full backdrop-blur-md"
                  />
                  <span className="relative z-10">{label}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
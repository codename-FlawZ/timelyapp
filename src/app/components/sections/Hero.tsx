"use client";

import { motion } from "framer-motion";
import GlassTag from "../ui/GlassTag";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-neutral-50 via-sky-50 to-blue-200 px-6 md:px-12 lg:px-20 py-7 flex flex-col gap-6">
      {/* Navbar */}
      <motion.header
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex justify-between items-center px-6 md:px-10 pb-10"
      >
        <h1 className="text-2xl font-bold text-gray-800">Timely</h1>

        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          {["Home", "Sobre", "Planos", "Contato"].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-gray-900 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          aria-label="Começar agora"
          className="bg-blue-500 text-white font-medium rounded-xl px-6 py-2 shadow-md hover:bg-blue-600 transition-colors"
        >
          Experimente Agora
        </button>
      </motion.header>

      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-28">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3.2, ease: "easeOut" }}
          className="max-w-xl text-center lg:text-left"
        >
          <GlassTag label="Now Trending" />

          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            <span className="text-slate-600">Organize</span> seu tempo
            <br />
            de forma{" "}
            <strong className="text-blue-500 underline">inteligente</strong>.
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Uma nova forma de gerenciar compromissos com leveza, clareza e
            estilo.
          </p>

          {/* Botões */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 0 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.8 },
              },
            }}
            className="mt-8 flex flex-wrap items-center gap-4 justify-center lg:justify-start"
          >
            <motion.button
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              aria-label="Ver planos"
              className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-md transition-colors"
            >
              Veja nossos planos
            </motion.button>
            <motion.button
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              aria-label="Saiba mais"
              className="px-6 py-3 rounded-xl border border-slate-300 text-slate-800 hover:bg-slate-900 hover:text-white font-medium transition-colors"
            >
              Saiba mais
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Mockup calendário */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <div className="rounded-3xl p-8 bg-gradient-to-br from-neutral-50/20 via-sky-50/20 to-blue-100/20 backdrop-blur-lg shadow-lg border border-neutral-50/80">
            <div className="w-64 h-64 flex flex-col items-center justify-center bg-gradient-to-br from-neutral-50/20 via-sky-50/20 to-blue-200/20 rounded-2xl shadow-inner border border-slate-100">
              {/* Dias */}
              <div className="flex justify-between w-full px-7 mb-4 text-slate-500 font-medium text-sm">
                {["D", "S", "T", "Q", "Q", "S", "S"].map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
              {/* Quadrados */}
              <div className="grid grid-cols-7 gap-2 text-slate-600 text-sm">
                {Array.from({ length: 31 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-6 h-6 rounded-md flex items-center justify-center ${
                      i === 10
                        ? "bg-blue-500/50 text-white"
                        : "bg-slate-300/30"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
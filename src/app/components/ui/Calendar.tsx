'use client'
import { motion } from "motion/react"

export default function Calendar() {
    return (
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
    )
}
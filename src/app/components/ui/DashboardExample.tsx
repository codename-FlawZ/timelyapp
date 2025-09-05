"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/** Paleta Timely (aprox. da hero) */
const COLORS = {
  navy: "#0B1B2F", // dark navy
  blue: "#4F7DFF", // primary
  text: "#111827", // slate-900-ish
  textMuted: "#6B7280", // slate-500-ish
  card: "rgba(255,255,255,0.9)",
  border: "rgba(15,23,42,0.06)",
};

type Event = {
  id: string;
  title: string;
  time: string;
  color: string;
  col: number;
  row: number;
};

const eventsData: Event[] = [
  { id: "1", title: "Entrevista", time: "9:00 — 10:00", color: "#6690FF", col: 2, row: 2 },
  { id: "2", title: "Almoço com Juliana", time: "12:00 — 13:00", color: "#34C759", col: 4, row: 4 },
  { id: "3", title: "Reunião de projeto", time: "14:00 — 15:30", color: "#7C66FF", col: 2, row: 5 },
  { id: "4", title: "Design review", time: "16:00 — 17:00", color: "#FF8A3D", col: 5, row: 6 },
];

/** Dados fictícios de agendamentos por mês */
const chartData = [
  { month: "Jan", agendamentos: 10 },
  { month: "Fev", agendamentos: 14 },
  { month: "Mar", agendamentos: 8 },
  { month: "Abr", agendamentos: 18 },
  { month: "Mai", agendamentos: 22 },
  { month: "Jun", agendamentos: 16 },
  { month: "Jul", agendamentos: 25 },
  { month: "Ago", agendamentos: 20 },
  { month: "Set", agendamentos: 28 },
  { month: "Out", agendamentos: 30 },
  { month: "Nov", agendamentos: 24 },
  { month: "Dez", agendamentos: 32 },
];

export default function DashboardExample() {
  const days = useMemo(() => ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"], []);
  const hours = useMemo(() => ["", "9", "11", "12", "13", "14", "16", "18"], []);

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-full h-full p-[5%] flex items-center justify-center">
        <div
          className="
            mx-auto 
            max-w-[1200px] 
            w-full 
            transform 
            scale-90 md:scale-95 
            rounded-3xl 
            overflow-hidden 
            shadow-[0_20px_60px_rgba(0,0,0,0.1)]
            flex
          "
          style={{
            background: COLORS.card,
            border: `1px solid ${COLORS.border}`,
          }}
        >
          {/* Sidebar */}
          <aside
            className="
              w-[240px] 
              shrink-0 
              p-6 
              flex 
              flex-col
            "
            style={{ background: COLORS.navy }}
          >
            <div className="flex justify-start items-center pb-30 p-2">
              <p className="text-neutral-200/60 text-sm">Timely</p>
            </div>
            <nav className="pb-50 space-y-3">
              <SidebarItem label="Home" active />
              <SidebarItem label="Estatísticas" icon="chart" />
              <SidebarItem label="Usuário" icon="user" />
            </nav>
            <div className="flex items-center gap-3 p-3">
              <div className="h-20 w-14 rounded-full flex items-center justify-center text-neutral-200 text-xl font-semibold">
                <img
                  src="../images/Jhon-Doe.png"
                  alt="Jhon Doe Picture"
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-neutral-200 font-medium leading-tight">John Doe</p>
                <p className="text-neutral-200/60 text-sm">Premium</p>
              </div>
            </div>
          </aside>

          {/* MAIN */}
          <main className="flex-1 p-6 space-y-6 overflow-auto">
            {/* Header */}
            <header className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Dezembro, 2025</h1>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="
                  px-4
                  py-2
                  rounded-xl
                  text-white
                  font-medium
                  shadow-md
                "
                style={{ background: COLORS.blue }}
              >
                Adicionar Evento
              </motion.button>
            </header>

            {/* Grid principal: calendário + estatísticas */}
            <div className="grid grid-cols-3 gap-6">
              {/* Calendário */}
              <div
                className="col-span-2 rounded-2xl p-6"
                style={{ background: COLORS.card, border: `1px solid ${COLORS.border}` }}
              >
                <InfoHeader />
                <div className="mt-4 grid grid-cols-7 gap-2">
                  {days.map((d) => (
                    <p
                      key={d}
                      className="text-sm font-medium text-center"
                      style={{ color: COLORS.textMuted }}
                    >
                      {d}
                    </p>
                  ))}
                  {Array.from({ length: 35 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-20 border border-dashed rounded-lg flex items-center justify-center text-sm"
                      style={{ borderColor: COLORS.border, color: COLORS.textMuted }}
                    >
                      {i < 30 ? i + 1 : ""}
                    </div>
                  ))}
                </div>
              </div>

              {/* Estatísticas */}
              <div className="space-y-4">
                <StatCard
                  title="Eventos este mês"
                  value="12"
                  subtitle="+3 em relação ao mês passado"
                />

                {/* Novo gráfico de linhas */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="rounded-2xl p-6"
                  style={{
                    background: COLORS.card,
                    border: `1px solid ${COLORS.border}`,
                    boxShadow: "0 6px 24px rgba(2,6,23,0.04)",
                  }}
                >
                  <p
                    className="text-sm font-medium mb-4"
                    style={{ color: COLORS.textMuted }}
                  >
                    Agendamentos Mensais
                  </p>
                  <div className="h-[150px] flex items-center flex-col justify-center">
                    <ResponsiveContainer width="100%" height="80%">
                      <LineChart data={chartData}>
                        <CartesianGrid
                          strokeDasharray="2 2"
                          stroke={COLORS.border}
                        />
                        <XAxis dataKey="month" stroke={COLORS.textMuted} />
                        <YAxis stroke={COLORS.textMuted} />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="agendamentos"
                          stroke={COLORS.blue}
                          strokeWidth={1}
                          dot={{ r: 2.5, fill: COLORS.blue }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>

                <StatCard
                  title="Reuniões concluídas"
                  value="9"
                  subtitle="Taxa de 90%"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Components ------------------------------- */

function SidebarItem({
  label,
  active = false,
  icon,
}: {
  label: string;
  active?: boolean;
  icon?: "chart" | "user";
}) {
  return (
    <button
      className={`w-full flex items-center gap-3 rounded-2xl px-4 py-3 transition ${
        active ? "bg-white/10" : "hover:bg-white/5"
      }`}
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
        {icon === "chart" && (
          <svg width="18" height="18" viewBox="0 0 24 24" className="text-white">
            <path
              fill="currentColor"
              d="M3 21v-2h18v2H3Zm2-4V7h3v10H5Zm5 0V3h3v14h-3Zm5 0V10h3v7h-3Z"
            />
          </svg>
        )}
        {icon === "user" && (
          <svg width="18" height="18" viewBox="0 0 24 24" className="text-white">
            <path
              fill="currentColor"
              d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5Zm0 2c-4 0-8 2-8 5v1h16v-1c0-3-4-5-8-5Z"
            />
          </svg>
        )}
        {!icon && (
          <svg width="18" height="18" viewBox="0 0 24 24" className="text-white">
            <path fill="currentColor" d="M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3l9-8Z" />
          </svg>
        )}
      </span>
      <span className="text-white font-medium">{label}</span>
    </button>
  );
}

function InfoHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl p-3 flex items-center justify-between"
      style={{
        background: COLORS.card,
        border: `1px solid ${COLORS.border}`,
      }}
    >
      <div
        className="px-3 py-2 rounded-xl text-sm font-semibold"
        style={{ background: "rgba(79,125,255,0.12)", color: COLORS.navy }}
      >
        Dezembro
      </div>
      <div
        className="px-3 py-2 rounded-xl text-sm font-semibold"
        style={{ background: "rgba(79,125,255,0.12)", color: COLORS.navy }}
      >
        2025
      </div>
    </motion.div>
  );
}

function StatCard({ title, value, subtitle }: { title: string; value: string; subtitle: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="rounded-2xl p-6"
      style={{
        background: COLORS.card,
        border: `1px solid ${COLORS.border}`,
        boxShadow: "0 6px 24px rgba(2,6,23,0.04)",
      }}
    >
      <p className="text-sm font-medium mb-2" style={{ color: COLORS.textMuted }}>
        {title}
      </p>
      <div className="text-4xl font-extrabold" style={{ color: COLORS.navy }}>
        {value}
      </div>
      <p className="mt-1 text-base" style={{ color: COLORS.text }}>
        {subtitle}
      </p>
    </motion.div>
  );
}
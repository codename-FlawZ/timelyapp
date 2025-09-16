"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/app/components/ui/select";

/** Paleta Timely */
const COLORS = {
  navy: "#0B1B2F",
  blue: "#4F7DFF",
  text: "#111827",
  textMuted: "#6B7280",
  card: "rgba(255,255,255,0.95)",
  border: "rgba(15,23,42,0.06)",
};

/* ------------------------------- Tipos e Dados ------------------------------- */

type CalendarEvent = {
  day: number;
  title: string;
  time: string;
};

const calendarEvents: CalendarEvent[] = [
  { day: 2, title: "Entrevista", time: "09:00 — 10:00" },
  { day: 2, title: "Briefing de Design", time: "11:00 — 11:30" },
  { day: 4, title: "Almoço com Juliana", time: "12:00 — 13:00" },
  { day: 5, title: "Reunião de projeto", time: "14:00 — 15:30" },
  { day: 6, title: "Design review", time: "16:00 — 17:00" },
];

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

/* ------------------------------- Componente Principal ------------------------------- */

export default function DashboardExample() {
  const [selectedMonth, setSelectedMonth] = useState(11); // Dezembro
  const [selectedYear, setSelectedYear] = useState(2025);

  return (
    <section 
     className="
      min-h-screen 
      flex 
      items-center 
      justify-center
    ">
      <div 
       className="
        w-full 
        h-full 
        p-[5%] 
        flex 
        items-center 
        justify-center
       ">
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
            <div 
             className="
              flex 
              justify-start 
              items-center 
              pb-30 
              p-2
            ">
              <p 
               className="
                text-neutral-200/60 
                text-sm
              ">
                Timely
              </p>
            </div>
            <nav 
             className="
              pb-50 
              space-y-3
            ">
              <SidebarItem label="Home" active />
              <SidebarItem label="Estatísticas" icon="chart" />
              <SidebarItem label="Usuário" icon="user" />
            </nav>
            <div 
             className="
              flex 
              items-center 
              gap-3 
              p-3
            ">
              <div 
               className="
                h-20 
                w-14 
                rounded-full 
                flex 
                items-center 
                justify-center 
                text-neutral-200 
                text-xl 
                font-semibold
              ">
                <img
                  src="../images/Jhon-Doe.png"
                  alt="Jhon Doe Picture"
                  className="rounded-full"
                />
              </div>
              <div>
                <p 
                 className="
                  text-neutral-200 
                  font-medium 
                  leading-tight
                ">
                  John Doe
                </p>
                <p 
                 className="
                  text-neutral-200/60 
                  text-sm
                ">
                  Premium
                </p>
              </div>
            </div>
          </aside>

          {/* MAIN */}
          <main 
           className="
            flex-1 
            p-6 
            space-y-6 
            overflow-auto
          ">
            {/* Header */}
            <header 
             className="
              flex 
              justify-between 
              items-center
            ">
              <h1 
               className="
                text-2xl 
                font-bold
              ">
                Seu Calendário
              </h1>
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
            <div 
             className="
              grid 
              grid-cols-3 
              gap-6
            ">
              {/* Calendário */}
              <div
                className="
                 col-span-2 
                 rounded-2xl 
                 p-6
                "
                style={{
                  background: COLORS.card,
                  border: `1px solid ${COLORS.border}`,
                }}
              >
                {/* Cabeçalho Mês/Ano refinado */}
                <div 
                 className="
                  flex 
                  items-center 
                  justify-between 
                  mb-4
                ">
                  {/* Mês */}
                  <Select
                    onValueChange={(value) => setSelectedMonth(Number(value))}
                    defaultValue={selectedMonth.toString()}
                  >
                    <SelectTrigger 
                     className="
                      flex 
                      items-center 
                      gap-1 
                      px-4 
                      py-2 
                      bg-gray-100/70 
                      backdrop-blur-md 
                      rounded-xl 
                      font-medium 
                      shadow-sm 
                      w-fit 
                      hover:bg-gray-200/70 
                      transition
                    ">
                      <SelectValue 
                       placeholder="Mês" 
                      />
                    </SelectTrigger>
                    <SelectContent 
                     className="
                      bg-white/80 
                      backdrop-blur-md 
                      border 
                      border-gray-200 
                      shadow-lg 
                      rounded-xl 
                      animate-in 
                      fade-in-50 
                      zoom-in-95
                     ">
                      {[
                        "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
                        "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
                      ].map((m, index) => (
                        <SelectItem
                          key={index}
                          value={index.toString()}
                          className="
                           hover:bg-blue-100/60 
                           rounded-md 
                           px-2 
                           py-1 
                           cursor-pointer 
                           transition
                          ">
                          {m}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {/* Ano */}
                  <Select
                    onValueChange={(value) => setSelectedYear(Number(value))}
                    defaultValue={selectedYear.toString()}
                  >
                    <SelectTrigger 
                     className="
                      flex 
                      items-center 
                      gap-1 
                      px-4 
                      py-2 
                      bg-gray-100/70 
                      backdrop-blur-md 
                      rounded-xl 
                      font-medium 
                      shadow-sm 
                      w-fit 
                      hover:bg-gray-200/70 
                      transition
                    ">
                      <SelectValue placeholder="Ano" />
                    </SelectTrigger>
                    <SelectContent 
                     className="
                      bg-white/80 
                      backdrop-blur-md 
                      border 
                      border-gray-200 
                      shadow-lg 
                      rounded-xl 
                      animate-in 
                      fade-in-50 
                      zoom-in-95
                    ">
                      {Array.from({ length: 6 }).map((_, i) => {
                        const y = 2023 + i;
                        return (
                          <SelectItem
                            key={y}
                            value={y.toString()}
                            className="
                             hover:bg-blue-100/60 
                             rounded-md 
                             px-2 
                             py-1 
                             cursor-pointer 
                             transition
                             ">
                            {y}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>

                {/* Calendário */}
                <CalendarGrid month={selectedMonth} year={selectedYear} />
              </div>

              {/* Estatísticas */}
              <div className="space-y-4">
                <StatCard
                  title="Eventos este mês"
                  value="12"
                  subtitle="+3 em relação ao mês passado"
                />
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

function InfoHeader({
  month,
  year,
  onMonthChange,
  onYearChange,
}: {
  month: number;
  year: number;
  onMonthChange: (m: number) => void;
  onYearChange: (y: number) => void;
}) {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl p-3 flex items-center justify-between gap-4"
      style={{
        background: COLORS.card,
        border: `1px solid ${COLORS.border}`,
      }}
    >
      <button
        className="px-3 py-1 rounded-lg text-white"
        style={{ background: COLORS.blue }}
        onClick={() => onMonthChange((month - 1 + 12) % 12)}
      >
        {"<"}
      </button>
      <div className="flex items-center gap-3">
        <span className="font-semibold">{months[month]}</span>
        <select
          value={year}
          onChange={(e) => onYearChange(Number(e.target.value))}
          className="border rounded-lg px-2 py-1 text-sm"
        >
          {Array.from({ length: 6 }).map((_, i) => {
            const y = 2023 + i;
            return (
              <option key={y} value={y}>
                {y}
              </option>
            );
          })}
        </select>
      </div>
      <button
        className="px-3 py-1 rounded-lg text-white"
        style={{ background: COLORS.blue }}
        onClick={() => onMonthChange((month + 1) % 12)}
      >
        {">"}
      </button>
    </motion.div>
  );
}

function StatCard({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: string;
  subtitle: string;
}) {
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
      <p className="mt-1 text-base" style={{ color: COLORS.blue }}>
        {subtitle}
      </p>
    </motion.div>
  );
}

/* ---------------- Calendar with Modal ---------------- */

function CalendarGrid({ month, year }: { month: number; year: number }) {
  const [hoveredEvent, setHoveredEvent] = useState<CalendarEvent | null>(null);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  return (
    <div className="mt-4 grid grid-cols-7 gap-2 relative">
      {/* Cabeçalho (dias da semana) */}
      {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((d) => (
        <p
          key={d}
          className="text-sm font-medium text-center"
          style={{ color: COLORS.textMuted }}
        >
          {d}
        </p>
      ))}

      {/* Dias */}
      {Array.from({ length: daysInMonth }).map((_, i) => {
        const dayNumber = i + 1;
        const events = calendarEvents.filter((e) => e.day === dayNumber);
        const event = events[0];

        return (
          <div
            key={i}
            className={`h-20 border border-dashed rounded-lg flex items-center justify-center text-sm relative cursor-pointer`}
            style={{
              borderColor: COLORS.border,
              color: event ? "white" : COLORS.textMuted,
              background: event ? COLORS.blue : "transparent",
            }}
            onMouseEnter={() => event && setHoveredEvent(event)}
            onMouseLeave={() => setHoveredEvent(null)}
            onClick={() => setSelectedDay(dayNumber)}
          >
            {dayNumber}

            {/* Popover (hover) */}
            {hoveredEvent?.day === dayNumber && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-50 p-3 rounded-xl shadow-lg text-sm"
                style={{
                  background: COLORS.card,
                  border: `1px solid ${COLORS.border}`,
                  color: COLORS.text,
                  minWidth: "180px",
                }}
              >
                <p className="font-semibold">{hoveredEvent.title}</p>
                <p className="text-xs text-gray-500">{hoveredEvent.time}</p>
              </motion.div>
            )}
          </div>
        );
      })}

      {/* Modal de eventos do dia */}
      <AnimatePresence>
        {selectedDay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl"
            >
              <h2 className="text-lg font-bold mb-4">
                Eventos do dia {selectedDay}
              </h2>
              {calendarEvents.filter((e) => e.day === selectedDay).length > 0 ? (
                <ul className="space-y-3">
                  {calendarEvents
                    .filter((e) => e.day === selectedDay)
                    .map((ev, idx) => (
                      <li
                        key={idx}
                        className="p-3 rounded-lg border"
                        style={{ borderColor: COLORS.border }}
                      >
                        <p className="font-medium">{ev.title}</p>
                        <p className="text-sm text-gray-500">{ev.time}</p>
                      </li>
                    ))}
                </ul>
              ) : (
                <p className="text-gray-500">Nenhum evento neste dia.</p>
              )}
              <button
                onClick={() => setSelectedDay(null)}
                className="mt-6 w-full py-2 rounded-lg text-white"
                style={{ background: COLORS.blue }}
              >
                Fechar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
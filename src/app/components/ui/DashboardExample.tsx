"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import Image from "next/image";
import LogoCheck from "/public/images/Logo-nobg.png";

/** Paleta Timely Premium */
const COLORS = {
  navy: "#0B1B2F",
  test:"#FFFFFF",
  blue: "#4F7DFF",
  blueLight: "#6B8AFF",
  text: "#111827",
  textMuted: "#6B7280",
  card: "rgba(255,255,255,0.98)",
  cardHover: "rgba(255,255,255,1)",
  border: "rgba(15,23,42,0.08)",
  borderLight: "rgba(15,23,42,0.04)",
  shadow: "rgba(11,27,47,0.08)",
  gradient: "linear-gradient(135deg, #4F7DFF 0%, #6B8AFF 100%)",
  gradientHover: "linear-gradient(135deg, #3F6FEF 0%, #5B7AEF 100%)",
  accent: "#F8FAFC",
};

/* ------------------------------- Tipos e Dados ------------------------------- */

type CalendarEvent = {
  day: number;
  title: string;
  time: string;
  type: 'meeting' | 'interview' | 'lunch' | 'review';
};

const calendarEvents: CalendarEvent[] = [
  { day: 2, title: "Entrevista Técnica", time: "09:00 — 10:00", type: 'interview' },
  { day: 2, title: "Briefing de Design", time: "11:00 — 11:30", type: 'meeting' },
  { day: 4, title: "Almoço com Juliana", time: "12:00 — 13:00", type: 'lunch' },
  { day: 5, title: "Reunião de Projeto", time: "14:00 — 15:30", type: 'meeting' },
  { day: 6, title: "Design Review", time: "16:00 — 17:00", type: 'review' },
  { day: 12, title: "Sprint Planning", time: "10:00 — 11:30", type: 'meeting' },
  { day: 15, title: "Client Meeting", time: "15:00 — 16:00", type: 'meeting' },
];

const chartData = [
  { month: "Jan", agendamentos: 10, meta: 15 },
  { month: "Fev", agendamentos: 14, meta: 15 },
  { month: "Mar", agendamentos: 8, meta: 15 },
  { month: "Abr", agendamentos: 18, meta: 20 },
  { month: "Mai", agendamentos: 22, meta: 25 },
  { month: "Jun", agendamentos: 16, meta: 20 },
  { month: "Jul", agendamentos: 25, meta: 25 },
  { month: "Ago", agendamentos: 20, meta: 25 },
  { month: "Set", agendamentos: 28, meta: 30 },
  { month: "Out", agendamentos: 30, meta: 30 },
  { month: "Nov", agendamentos: 24, meta: 25 },
  { month: "Dez", agendamentos: 32, meta: 30 },
];

/* ------------------------------- Componente Principal ------------------------------- */

export default function PremiumDashboard() {
  const [selectedMonth, setSelectedMonth] = useState(11);
  const [selectedYear, setSelectedYear] = useState(2025);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
    >
      <section className="min-h-screen flex items-center justify-center relative z-10 p-4">
        <div className="w-full max-w-[1200px] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-[700px] rounded-2xl overflow-hidden flex"
            style={{
              background: COLORS.card,
              border: `1px solid ${COLORS.border}`,
              boxShadow: `0 20px 60px rgba(11,27,47,0.12)`,
            }}
          >
            {/* Sidebar Premium */}
            <motion.aside
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="w-[250px] shrink-0 p-6 flex flex-col relative overflow-hidden"
              style={{ 
                background: `linear-gradient(120deg, #1e3a8a 0%, #020617 100%)`,
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              
              {/* Logo */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex justify-start items-center pb-8 relative z-10"
              >
                <Image src={LogoCheck} alt="" width={120} height={120}/>
              </motion.div>

              {/* Navigation */}
              <nav className="space-y-2 pb-12 relative z-10">
                <SidebarItem label="Dashboard" active />
                <SidebarItem label="Estatísticas" icon="chart" />
                <SidebarItem label="Calendário" icon="calendar" />
                <SidebarItem label="Configurações" icon="settings" />
              </nav>

              {/* User Profile */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-auto relative z-10"
              >
                <div 
                  className="flex items-center gap-4 p-4 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="relative">
                    <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-white/20">
                      <div 
                        className="w-full h-full rounded-full flex items-center justify-center text-white text-lg font-bold"
                      >
                        <img src="../images/Jhon-Doe.png" alt="Jhon Doe Profile Picture" />
                      </div>
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-400 rounded-full border-2 border-white/20" />
                  </div>
                  <div className="flex-1">
                    <p className="text-neutral-100 font-semibold text-sm">
                      John Doe
                    </p>
                    <div className="flex items-center gap-2">
                      <div 
                        className="px-2 py-0.5 rounded-md text-xs font-medium"
                        style={{ 
                          background: COLORS.gradient,
                          color: 'white'
                        }}
                      >
                        Premium
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.aside>

            {/* MAIN Content */}
            <main className="flex-1 p-6 space-y-6 overflow-auto bg-gradient-to-br from-slate-50/50 to-white/50">
              {/* Header Premium */}
              <motion.header 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex justify-between items-center"
              >
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                    Seu Calendário
                  </h1>
                  <p className="text-slate-500 mt-1 text-sm">
                    {new Date().toLocaleDateString('pt-BR', { 
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                
                <button
                  className="group relative px-5 py-2.5 rounded-xl text-white font-semibold shadow-lg overflow-hidden transition-all duration-200 hover:scale-105"
                  style={{ background: COLORS.gradient }}
                >
                  <div className="flex items-center gap-2 relative z-10">
                    <svg width="16" height="16" viewBox="0 0 24 24" className="text-white">
                      <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    </svg>
                    Adicionar Evento
                  </div>
                </button>
              </motion.header>

              {/* Grid principal melhorado */}
              <div className="grid grid-cols-3 gap-6">
                {/* Calendário Premium */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="col-span-2 rounded-2xl p-5 transition-all duration-200 hover:shadow-lg group"
                  style={{
                    background: COLORS.card,
                    border: `1px solid ${COLORS.border}`,
                    boxShadow: "0 4px 16px rgba(11,27,47,0.06)",
                  }}
                >
                  {/* Header do calendário */}
                  <div className="flex items-center justify-between mb-4">
                    <PremiumSelect
                      value={selectedMonth}
                      onValueChange={setSelectedMonth}
                      options={[
                        "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
                        "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
                      ]}
                    />
                    <PremiumSelect
                      value={selectedYear}
                      onValueChange={setSelectedYear}
                      options={Array.from({ length: 6 }, (_, i) => (2023 + i).toString())}
                    />
                  </div>

                  <CalendarGrid month={selectedMonth} year={selectedYear} />
                </motion.div>

                {/* Estatísticas Premium */}
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    onHoverStart={() => setHoveredStat(0)}
                    onHoverEnd={() => setHoveredStat(null)}
                  >
                    <StatCard
                      title="Eventos este mês"
                      value="12"
                      subtitle="+25% vs mês anterior"
                      icon="calendar"
                      isHovered={hoveredStat === 0}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="rounded-2xl p-5 group transition-all duration-200 hover:shadow-lg"
                    style={{
                      background: COLORS.card,
                      border: `1px solid ${COLORS.border}`,
                      boxShadow: "0 4px 16px rgba(11,27,47,0.06)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: `${COLORS.blue}15` }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" style={{ color: COLORS.blue }}>
                          <path
                            fill="currentColor"
                            d="M3 21v-2h18v2H3Zm2-4V7h3v10H5Zm5 0V3h3v14h-3Zm5 0V10h3v7h-3Z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-base font-semibold text-slate-800">
                        Tendência Anual
                      </h3>
                    </div>
                    
                    <div className="h-[140px] -mx-1">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}>
                          <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor={COLORS.blue} stopOpacity={0.3}/>
                              <stop offset="95%" stopColor={COLORS.blue} stopOpacity={0.05}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.2)" />
                          <XAxis 
                            dataKey="month" 
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 11, fill: COLORS.textMuted }}
                          />
                          <YAxis 
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 11, fill: COLORS.textMuted }}
                          />
                          <Tooltip 
                            contentStyle={{
                              background: 'rgba(255,255,255,0.95)',
                              border: 'none',
                              borderRadius: '8px',
                              boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                              fontSize: '12px'
                            }}
                          />
                          <Area
                            type="monotone"
                            dataKey="agendamentos"
                            stroke={COLORS.blue}
                            strokeWidth={2}
                            fill="url(#gradient)"
                            dot={{ r: 3, fill: COLORS.blue, strokeWidth: 1, stroke: 'white' }}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    onHoverStart={() => setHoveredStat(1)}
                    onHoverEnd={() => setHoveredStat(null)}
                  >
                    <StatCard
                      title="Taxa de Conclusão"
                      value="94%"
                      subtitle="Excelente performance"
                      icon="check"
                      isHovered={hoveredStat === 1}
                    />
                  </motion.div>
                </div>
              </div>
            </main>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ------------------------------- Components Premium ------------------------------- */

function SidebarItem({
  label,
  active = false,
  icon,
}: {
  label: string;
  active?: boolean;
  icon?: "chart" | "calendar" | "settings";
}) {
  return (
    <motion.button
      className={`w-full flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-200 group ${
        active 
          ? "bg-white/15 shadow-md" 
          : "hover:bg-white/8"
      }`}
    >
      <div className={`inline-flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-200 ${
        active ? "bg-white/20 shadow-sm" : "bg-white/10 group-hover:bg-white/15"
      }`}>
        {icon === "chart" && (
          <svg width="18" height="18" viewBox="0 0 24 24" className="text-white">
            <path
              fill="currentColor"
              d="M3 21v-2h18v2H3Zm2-4V7h3v10H5Zm5 0V3h3v14h-3Zm5 0V10h3v7h-3Z"
            />
          </svg>
        )}
        {icon === "calendar" && (
          <svg width="18" height="18" viewBox="0 0 24 24" className="text-white">
            <path
              fill="currentColor"
              d="M7 11h2v2H7v-2zm0 4h2v2H7v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2z"
            />
            <path
              fill="currentColor"
              d="M5 22h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zM5 7h14v13H5V7z"
            />
          </svg>
        )}
        {icon === "settings" && (
          <svg width="18" height="18" viewBox="0 0 24 24" className="text-white">
            <path
              fill="currentColor"
              d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"
            />
          </svg>
        )}
        {!icon && (
          <svg width="18" height="18" viewBox="0 0 24 24" className="text-white">
            <path
              fill="currentColor"
              d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z"
            />
          </svg>
        )}
      </div>
      <span className="text-white font-semibold">{label}</span>
    </motion.button>
  );
}

function PremiumSelect({
  value,
  onValueChange,
  options,
}: {
  value: number;
  onValueChange: (value: number) => void;
  options: string[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-5 py-3 rounded-2xl font-semibold transition-all duration-300 hover:shadow-md group"
        style={{
          background: `linear-gradient(135deg, ${COLORS.accent} 0%, rgba(248,250,252,0.8) 100%)`,
          border: `1px solid ${COLORS.borderLight}`,
        }}
      >
        <span className="text-slate-800">{options[value]}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          className="text-slate-600"
        >
          <path
            fill="currentColor"
            d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"
          />
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-full mt-2 left-0 right-0 rounded-2xl overflow-hidden z-50"
            style={{
              background: 'rgba(255,255,255,0.9)',
              border: '1px solid rgba(255,255,255,0.5)',
              boxShadow: `
                0 20px 60px rgba(11,27,47,0.15),
                inset 0 1px 0 rgba(255,255,255,1),
                0 1px 0 rgba(0,0,0,0.05)
              `,
              backdropFilter: "blur(40px) saturate(180%)",
              zIndex: 9999,
            }}
          >
            {options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ backgroundColor: "rgba(79,125,255,0.08)" }}
                onClick={() => {
                  onValueChange(index);
                  setIsOpen(false);
                }}
                className="w-full px-4 py-3 text-left text-slate-800 font-medium transition-colors duration-200 first:rounded-t-2xl last:rounded-b-2xl"
              >
                {option}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StatCard({
  title,
  value,
  subtitle,
  icon,
  isHovered,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
  isHovered: boolean;
}) {
  return (
    <motion.div
      className="rounded-2xl p-5 group transition-all duration-200 hover:shadow-lg hover:scale-102"
      style={{
        background: COLORS.card,
        border: `1px solid ${isHovered ? COLORS.blue + '30' : COLORS.border}`,
        boxShadow: isHovered 
          ? "0 12px 40px rgba(79,125,255,0.15)" 
          : "0 4px 16px rgba(11,27,47,0.06)",
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div 
          className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200"
          style={{ 
            backgroundColor: isHovered ? COLORS.blue + '20' : COLORS.blue + '15'
          }}
        >
          {icon === "calendar" && (
            <svg width="20" height="20" viewBox="0 0 24 24" style={{ color: COLORS.blue }}>
              <path
                fill="currentColor"
                d="M7 11h2v2H7v-2zm0 4h2v2H7v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2z"
              />
            </svg>
          )}
          {icon === "check" && (
            <svg width="20" height="20" viewBox="0 0 24 24" style={{ color: COLORS.blue }}>
              <path
                fill="currentColor"
                d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41L9 16.17z"
              />
            </svg>
          )}
        </div>
        <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
          {title}
        </h3>
      </div>
      
      <div className="space-y-1">
        <div 
          className="text-3xl font-black bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent"
        >
          {value}
        </div>
        <p className="text-sm font-medium" style={{ color: COLORS.blue }}>
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
}

/* ---------------- Calendar Premium ---------------- */

function CalendarGrid({ month, year }: { month: number; year: number }) {
  const [hoveredEvent, setHoveredEvent] = useState<CalendarEvent | null>(null);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const adjustedFirstDay = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

  const eventTypeColors = {
    meeting: COLORS.blue,
    interview: '#F59E0B',
    lunch: '#10B981',
    review: '#8B5CF6'
  };

  const handleMouseEnter = (event: CalendarEvent, e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: rect.left + rect.width / 2,
      y: rect.bottom + 12
    });
    setHoveredEvent(event);
  };

  return (
    <div className="mt-4 space-y-3">
      {/* Cabeçalho dos dias da semana */}
      <div className="grid grid-cols-7 gap-2">
        {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((d) => (
          <div
            key={d}
            className="text-xs font-bold text-center py-2 rounded-xl transition-all duration-200"
            style={{ 
              color: COLORS.textMuted,
              background: 'rgba(255,255,255,0.4)',
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px) saturate(150%)',
            }}
          >
            {d}
          </div>
        ))}
      </div>

      {/* Grid do calendário */}
      <div className="grid grid-cols-7 gap-2 relative">
        {/* Espaços vazios para o primeiro dia do mês */}
        {Array.from({ length: adjustedFirstDay }).map((_, i) => (
          <div key={`empty-${i}`} className="h-16" />
        ))}

        {/* Dias do mês */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const dayNumber = i + 1;
          const dayEvents = calendarEvents.filter((e) => e.day === dayNumber);
          const hasEvents = dayEvents.length > 0;
          const primaryEvent = dayEvents[0];

          return (
            <motion.div
              key={dayNumber}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="h-20 rounded-2xl flex flex-col items-center justify-center text-sm relative cursor-pointer group transition-all duration-300"
              style={{
                background: hasEvents 
                  ? `rgba(255,255,255,0.85)`
                  : 'rgba(255,255,255,0.6)',
                border: hasEvents 
                  ? `2px solid ${eventTypeColors[primaryEvent.type]}40`
                  : '1px solid rgba(255,255,255,0.3)',
                color: hasEvents ? eventTypeColors[primaryEvent.type] : COLORS.textMuted,
                boxShadow: hasEvents 
                  ? `
                      0 8px 32px ${eventTypeColors[primaryEvent.type]}20,
                      inset 0 1px 0 rgba(255,255,255,0.9),
                      0 1px 0 rgba(0,0,0,0.05)
                    `
                  : `
                      0 4px 16px rgba(148,163,184,0.1),
                      inset 0 1px 0 rgba(255,255,255,0.8),
                      0 1px 0 rgba(0,0,0,0.03)
                    `,
                backdropFilter: 'blur(20px) saturate(180%)',
              }}
              onMouseEnter={(e) => primaryEvent && handleMouseEnter(primaryEvent, e)}
              onMouseLeave={() => setHoveredEvent(null)}
              onClick={() => setSelectedDay(dayNumber)}
            >
              <span className={`font-bold ${hasEvents ? 'text-lg' : 'text-base'} transition-all duration-300`}>
                {dayNumber}
              </span>
              
              {hasEvents && (
                <div className="flex gap-1 mt-1">
                  {dayEvents.slice(0, 3).map((_, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 rounded-full"
                      style={{ background: eventTypeColors[dayEvents[idx].type] }}
                    />
                  ))}
                  {dayEvents.length > 3 && (
                    <span className="text-xs font-bold">+{dayEvents.length - 3}</span>
                  )}
                </div>
              )}
            </motion.div>
          );
        })}

        {/* Tooltips otimizados */}
        {hoveredEvent && (
          <div 
            className="fixed pointer-events-none"
            style={{ 
              zIndex: 10000,
              left: mousePosition.x,
              top: mousePosition.y,
              transform: 'translateX(-50%)'
            }}
          >
            <div
              className="p-3 rounded-xl shadow-lg min-w-[180px]"
              style={{
                background: 'rgba(255,255,255,0.95)',
                border: `1px solid rgba(255,255,255,0.4)`,
                boxShadow: '0 8px 32px rgba(11,27,47,0.2)',
                backdropFilter: "blur(20px) saturate(180%)",
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ background: eventTypeColors[hoveredEvent.type] }}
                />
                <p className="font-bold text-slate-800 text-sm">{hoveredEvent.title}</p>
              </div>
              <p className="text-xs text-slate-600">{hoveredEvent.time}</p>
            </div>
          </div>
        )}
      </div>

      {/* Modal simplificado */}
      <AnimatePresence>
        {selectedDay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
            onClick={() => setSelectedDay(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-md w-full mx-4 rounded-2xl p-6 relative"
              style={{
                background: COLORS.cardHover,
                border: `1px solid ${COLORS.border}`,
                boxShadow: "0 20px 60px rgba(11,27,47,0.3)",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-slate-800">
                  {selectedDay} de {["Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
                    "Jul", "Ago", "Set", "Out", "Nov", "Dez"][month]}
                </h2>
                <button
                  onClick={() => setSelectedDay(null)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200 hover:bg-slate-100"
                  style={{ color: COLORS.blue }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"/>
                  </svg>
                </button>
              </div>

              {calendarEvents.filter((e) => e.day === selectedDay).length > 0 ? (
                <div className="space-y-3">
                  {calendarEvents
                    .filter((e) => e.day === selectedDay)
                    .map((event, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:shadow-sm"
                        style={{
                          background: `${eventTypeColors[event.type]}08`,
                          border: `1px solid ${eventTypeColors[event.type]}20`,
                        }}
                      >
                        <div 
                          className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{ background: `${eventTypeColors[event.type]}20` }}
                        >
                          <div 
                            className="w-4 h-4 rounded-full"
                            style={{ background: eventTypeColors[event.type] }}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-800 text-sm">{event.title}</h3>
                          <p className="text-xs text-slate-600">{event.time}</p>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div 
                    className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                    style={{ background: `${COLORS.blue}10` }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" style={{ color: COLORS.blue }}>
                      <path fill="currentColor" d="M7 11h2v2H7v-2zm0 4h2v2H7v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2z"/>
                    </svg>
                  </div>
                  <p className="text-slate-600">Nenhum evento</p>
                </div>
              )}

              <button
                className="w-full mt-4 py-3 rounded-xl text-white font-semibold shadow-md transition-all duration-200 hover:shadow-lg"
                style={{ background: COLORS.gradient }}
              >
                Adicionar Evento
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
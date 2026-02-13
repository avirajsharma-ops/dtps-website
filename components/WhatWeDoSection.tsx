"use client";
import { useEffect, useRef, useState } from "react";

/* ================================================================== */
/*  Card data                                                         */
/* ================================================================== */
const cards = [
  {
    title: "Detoxification",
    desc: "This initial phase gently cleanses your body",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 22c3.5 0 6-2.5 6-6.5C18 11 12 2 12 2S6 11 6 15.5C6 19.5 8.5 22 12 22z" fill="white" />
        <path d="M10 16a2.5 2.5 0 0 0 4 2" stroke="#FF850B" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Fat-Burning Activation",
    desc: "Celebrate your success and maintain your weight loss",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="4" r="2.5" fill="white" />
        <path d="M15.5 22v-6l2.5-3.5-1.5-1.5L12 16 7.5 11 6 12.5 8.5 16v6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 9l3 3 3-3" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Anti-Inflammatory Reset",
    desc: "Anti-inflammatory foods to reduce inflammation",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L4.09 12.64a1 1 0 0 0 .78 1.63H11l-1 7.27L19.91 11.36a1 1 0 0 0-.78-1.63H13l1-7.73z" fill="white" />
      </svg>
    ),
  },
  {
    title: "Metabolic Optimisation",
    desc: "Rev up your metabolism with pur metabolic booster cycle",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M16 4h2a2 2 0 0 1 2 2v1M8 4H6a2 2 0 0 0-2 2v1" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <rect x="7" y="8" width="10" height="7" rx="2" stroke="white" strokeWidth="2" />
        <path d="M12 15v4M9 22h6M10 11h4" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Fat-Burning Activation",
    desc: "With a dynamic cycle focused on maximizing fat burning",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="5" stroke="white" strokeWidth="2" />
        <path d="M12 3c0 0 2.5 2.5 2.5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 20h10M9 17h6" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

/* ================================================================== */
/*  Layout constants (1200 × 790 design canvas)                       */
/* ================================================================== */
const CX = 600;           // centre X
const CY = 492;           // centre Y
const R = 196;             // dashed circle radius
const CARD_W = 304;
const CARD_H = 80;         // approx card height

/* Card positions from the HTML spec */
const cardPos = [
  { left: 448, top: 200 },   // 0 Detoxification – top centre
  { left: 80,  top: 402 },   // 1 Fat-Burning (celebrate) – left
  { left: 816, top: 402 },   // 2 Anti-Inflammatory – right
  { left: 160, top: 604 },   // 3 Metabolic – bottom-left
  { left: 737, top: 604 },   // 4 Fat-Burning (dynamic) – bottom-right
];

/* Dot positions – on the card edge closest to centre */
const dotPos = [
  { x: 600, y: 290 },   // below Detox card bottom-centre
  { x: 396, y: 442 },   // right edge of Fat-Burning card
  { x: 808, y: 442 },   // left edge of Anti-Inflammatory card
  { x: 474, y: 638 },   // right edge of Metabolic card
  { x: 727, y: 638 },   // left edge of Fat-Burning card
];

/* ================================================================== */
/*  MAIN COMPONENT                                                    */
/* ================================================================== */
export default function WhatWeDoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0].contentRect.width;
      if (w > 0) setScale(Math.min(w / 1200, 1));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const CANVAS_H = 790;

  return (
    <section ref={sectionRef} className="bg-[#014E4E] rounded-[24px] overflow-hidden">

      {/* ============ DESKTOP ≥ 900px ============ */}
      <div
        ref={containerRef}
        className="hidden min-[900px]:block w-full relative overflow-hidden"
        style={{ height: Math.ceil(CANVAS_H * scale) }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            width: 1200,
            height: CANVAS_H,
            transform: `translateX(-50%) scale(${scale})`,
            transformOrigin: "top center",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.7s ease",
          }}
        >
          {/* ---- Title ---- */}
          <h2 style={{
            position: "absolute", left: 0, right: 0, top: 40,
            textAlign: "center", color: "white", fontSize: 48, fontWeight: 700,
            lineHeight: "56px",
          }}>
            Our 5-Cycle, Science<br />Based Weight Loss Process
          </h2>

          {/* ---- SVG: dashed circle + lines + dots ---- */}
          <svg
            style={{ position: "absolute", left: 0, top: 0, width: 1200, height: CANVAS_H, pointerEvents: "none" }}
            viewBox={`0 0 1200 ${CANVAS_H}`}
            fill="none"
          >
            {/* Dashed circle */}
            <circle cx={CX} cy={CY} r={R} stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="14 10" />

            {/* Lines from centre to each dot */}
            {dotPos.map((d, i) => (
              <line key={`line-${i}`} x1={CX} y1={CY} x2={d.x} y2={d.y} stroke="white" strokeWidth="2" />
            ))}

            {/* Dots: white ring + orange centre */}
            {dotPos.map((d, i) => (
              <g key={`dot-${i}`}>
                <circle cx={d.x} cy={d.y} r="8" fill="white" stroke="#FF850B" strokeWidth="1" />
                <circle cx={d.x} cy={d.y} r="4" fill="#FF850B" />
              </g>
            ))}
          </svg>

          {/* ---- Centre white ring ---- */}
          <div style={{
            position: "absolute",
            left: CX - 80, top: CY - 80,
            width: 160, height: 160,
            borderRadius: "50%", background: "white",
          }} />

          {/* ---- Centre orange circle ---- */}
          <div style={{
            position: "absolute",
            left: CX - 74, top: CY - 74,
            width: 148, height: 148,
            borderRadius: "50%", background: "#FF850B",
          }} />

          {/* ---- WEIGHT LOSS text ---- */}
          <div style={{
            position: "absolute",
            left: CX - 60, top: CY - 24,
            width: 120, textAlign: "center",
            color: "white", fontSize: 32, fontWeight: 600, lineHeight: "32px",
          }}>
            WEIGHT<br />LOSS
          </div>

          {/* ---- CARDS ---- */}
          {cards.map((c, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: cardPos[i].left,
                top: cardPos[i].top,
                width: CARD_W,
                padding: 16,
                background: "rgba(255,255,255,0.08)",
                borderRadius: 12,
                outline: "0.5px solid rgba(255,255,255,0.5)",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <div style={{
                width: 48, height: 48, background: "#FF850B", borderRadius: 4,
                flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {c.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ color: "#FF850B", fontSize: 16, fontWeight: 600, lineHeight: "16px" }}>
                  {c.title}
                </div>
                <div style={{ color: "white", fontSize: 14, fontWeight: 400, lineHeight: "16px", marginTop: 2 }}>
                  {c.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============ MOBILE < 900px ============ */}
      <div className="min-[900px]:hidden px-4 py-10">
        <h2
          className={`text-center text-white font-bold text-[1.4rem] sm:text-[1.75rem] leading-tight mb-8 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          Our 5-Cycle, Science<br />Based Weight Loss Process
        </h2>

        {/* Centre circle */}
        <div className="relative w-[100px] h-[100px] mx-auto mb-4">
          <div className="absolute -inset-3 rounded-full border-[2px] border-dashed border-white/40" />
          <div className="absolute inset-0 rounded-full bg-white" />
          <div className="absolute inset-[5px] rounded-full bg-[#FF850B] flex items-center justify-center">
            <span className="text-white font-semibold text-[15px] leading-tight text-center">
              WEIGHT<br />LOSS
            </span>
          </div>
        </div>

        {/* Connector to first card */}
        <div className="flex flex-col items-center mb-1">
          <div className="w-[2px] h-4 bg-white/40" />
          <div className="w-4 h-4 rounded-full bg-white border border-[#FF850B] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#FF850B]" />
          </div>
          <div className="w-[2px] h-4 bg-white/40" />
        </div>

        {/* Stacked cards */}
        <div className="flex flex-col max-w-[400px] mx-auto">
          {cards.map((c, i) => (
            <div key={i}>
              <div
                className={`flex items-center gap-2.5 rounded-xl transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                }`}
                style={{
                  padding: 14,
                  background: "rgba(255,255,255,0.08)",
                  outline: "0.5px solid rgba(255,255,255,0.5)",
                  transitionDelay: `${150 + i * 100}ms`,
                }}
              >
                <div className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: 42, height: 42, background: "#FF850B", borderRadius: 4 }}>
                  {c.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-[#FF850B] font-semibold text-[14px] leading-tight">{c.title}</div>
                  <div className="text-white text-[12px] leading-snug mt-0.5 opacity-90">{c.desc}</div>
                </div>
              </div>
              {i < cards.length - 1 && (
                <div className="flex flex-col items-center py-0.5">
                  <div className="w-[2px] h-3 bg-white/30" />
                  <div className="w-3 h-3 rounded-full bg-white border border-[#FF850B] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF850B]" />
                  </div>
                  <div className="w-[2px] h-3 bg-white/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

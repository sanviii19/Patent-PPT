import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const peach = {
  50: "#FFF5F0",
  100: "#FFE4D6",
  200: "#FFCBB0",
  300: "#FFA07A",
  400: "#FF7F50",
  500: "#E8622A",
  600: "#C04A18",
  700: "#963710",
  800: "#6B260A",
  900: "#3D1503",
};

const slides = [
  {
    id: 1,
    type: "title",
    title: "Ergonomic Feeding Support Mechanism",
    subtitle: "A Smart, Adjustable Infant & Caregiver Comfort Solution",
    authors: ["Ria", "Sanvi Kumari", "Dolly Kumari"],
    institution: "Lovely Professional University, Punjab-144411, India",
    icon: "🍼",
  },
  {
    id: 2,
    type: "problem",
    title: "Problem Statement",
    subtitle: "Challenges with Traditional Feeding Supports",
    problems: [
      { icon: "🦴", title: "Poor Posture & Back Pain", desc: "Fixed height/angle causes spinal strain and neck pain during long feeding sessions." },
      { icon: "💪", title: "Arm & Shoulder Fatigue", desc: "Standard pillows lack firmness, causing arms to sink and muscles to tire quickly." },
      { icon: "⚠️", title: "Unstable Positioning", desc: "Nursing pillows slip on laps, disrupting safe feeding positions for the infant." },
      { icon: "🤱", title: "Post-Partum Difficulties", desc: "C-section mothers struggle with abdominal pressure when holding infants close." },
    ],
  },
  {
    id: 3,
    type: "invention",
    title: "The Invention",
    subtitle: "Ergonomic Feeding Support Mechanism",
    features: [
      { icon: "📐", label: "Adjustable Height", detail: "10cm – 50cm telescoping legs" },
      { icon: "🔄", label: "360° Pivot Arm", detail: "Ball-and-socket joint system" },
      { icon: "🛋️", label: "Memory Foam", detail: "Adaptive cushioning layer" },
      { icon: "🔒", label: "Secure Fastening", detail: "Anti-slip straps & Velcro" },
      { icon: "🧼", label: "Washable Cover", detail: "Removable, hypoallergenic fabric" },
      { icon: "🌍", label: "Portable Design", detail: "Lightweight & foldable frame" },
    ],
  },
  {
    id: 4,
    type: "comparison",
    title: "State of the Art",
    subtitle: "How We Improve Over Prior Patents",
    patents: [
      {
        id: "US11672349B2",
        title: "Standard U-shaped Nursing Pillow",
        gap: "No adjustable height/tilt; lacks multi-function use",
        novelty: "Dynamic height + tilt + memory foam + postpartum recovery aid",
      },
      {
        id: "US45566097B4",
        title: "Portable Feeding Tray",
        gap: "Rigid, bulky, no secure fastening, limited height range",
        novelty: "Telescopic height, secure locking, washable cover, travel-friendly",
      },
      {
        id: "US10046097B2",
        title: "Mechanical Baby Support",
        gap: "Only for bottle-fed infants; complex, expensive mechanism",
        novelty: "Cost-effective, supports breastfeeding + bottle, dynamic arm support",
      },
    ],
  },
  {
    id: 5,
    type: "objectives",
    title: "Key Objectives",
    subtitle: "What This Invention Achieves",
    objectives: [
      { icon: "✅", text: "Improve posture & reduce back/neck/shoulder strain" },
      { icon: "✅", text: "Adaptive cushioning for caregiver & infant comfort" },
      { icon: "✅", text: "Non-slip base with adjustable straps for stability" },
      { icon: "✅", text: "Support cradle, cross-cradle & football feeding holds" },
      { icon: "✅", text: "Assist post-partum & C-section mothers safely" },
      { icon: "✅", text: "Multi-use: lounging, tummy time, posture aid" },
      { icon: "✅", text: "Machine-washable hypoallergenic cover" },
      { icon: "✅", text: "Lightweight, portable & travel-ready" },
    ],
  },
  {
    id: 6,
    type: "results",
    title: "Results & Advantages",
    subtitle: "Performance Comparison",
    metrics: [
      { label: "Adjustability", old: 20, new: 95 },
      { label: "User Comfort", old: 45, new: 92 },
      { label: "Independence", old: 25, new: 88 },
      { label: "Portability", old: 30, new: 90 },
      { label: "Stability", old: 35, new: 94 },
      { label: "Hygiene", old: 40, new: 91 },
    ],
  },
  {
    id: 7,
    type: "thanks",
    title: "Thank You",
    subtitle: "Ergonomic Feeding Support Mechanism",
    message: "This invention represents a meaningful step forward in caregiver comfort and infant safety — combining ergonomics, adaptability, and thoughtful design.",
    team: ["Ria", "Sanvi Kumari", "Dolly Kumari"],
    institution: "Lovely Professional University",
  },
];

const pageVariants = {
  initial: { opacity: 0, x: 80, scale: 0.97 },
  animate: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: -80, scale: 0.97 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
};

function ProgressBar({ value, delay }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(value), delay * 150 + 400);
    return () => clearTimeout(t);
  }, [value, delay]);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
      <div style={{ flex: 1, height: 10, background: peach[100], borderRadius: 20, overflow: "hidden" }}>
        <motion.div
          style={{ height: "100%", background: `linear-gradient(90deg, ${peach[300]}, ${peach[500]})`, borderRadius: 20 }}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function TitleSlide({ slide }) {
  return (
    <motion.div variants={stagger} initial="initial" animate="animate"
      style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: "40px 32px", textAlign: "center" }}>
      <motion.div variants={fadeUp} style={{ fontSize: 64, marginBottom: 12 }}>{slide.icon}</motion.div>
      <motion.h1 variants={fadeUp}
        style={{ fontSize: 26, fontWeight: 700, color: peach[700], margin: "0 0 10px", lineHeight: 1.3, maxWidth: 600 }}>
        {slide.title}
      </motion.h1>
      <motion.p variants={fadeUp}
        style={{ fontSize: 15, color: peach[500], margin: "0 0 28px", maxWidth: 480 }}>
        {slide.subtitle}
      </motion.p>
      <motion.div variants={fadeUp}
        style={{ background: peach[50], border: `1.5px solid ${peach[200]}`, borderRadius: 16, padding: "18px 32px", marginBottom: 20 }}>
        <p style={{ fontSize: 13, color: peach[600], margin: "0 0 10px", fontWeight: 600, letterSpacing: 1 }}>INVENTORS</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          {slide.authors.map((a, i) => (
            <motion.div key={i} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4 + i * 0.15, type: "spring" }}
              style={{ background: peach[400], color: "#fff", borderRadius: 40, padding: "8px 18px", fontSize: 14, fontWeight: 600 }}>
              {a}
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.p variants={fadeUp} style={{ fontSize: 12, color: peach[400] }}>{slide.institution}</motion.p>
    </motion.div>
  );
}

function ProblemSlide({ slide }) {
  return (
    <motion.div variants={stagger} initial="initial" animate="animate" style={{ padding: "30px 28px", height: "100%" }}>
      <motion.div variants={fadeUp} style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: peach[700], margin: 0 }}>{slide.title}</h2>
        <p style={{ fontSize: 13, color: peach[400], margin: "4px 0 0" }}>{slide.subtitle}</p>
      </motion.div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {slide.problems.map((p, i) => (
          <motion.div key={i} variants={fadeUp}
            style={{ background: peach[50], border: `1px solid ${peach[200]}`, borderRadius: 14, padding: "16px 16px" }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>{p.icon}</div>
            <p style={{ fontSize: 14, fontWeight: 700, color: peach[700], margin: "0 0 6px" }}>{p.title}</p>
            <p style={{ fontSize: 12, color: peach[600], margin: 0, lineHeight: 1.5 }}>{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function InventionSlide({ slide }) {
  return (
    <motion.div variants={stagger} initial="initial" animate="animate" style={{ padding: "30px 28px", height: "100%" }}>
      <motion.div variants={fadeUp} style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: peach[700], margin: 0 }}>{slide.title}</h2>
        <p style={{ fontSize: 13, color: peach[400], margin: "4px 0 0" }}>{slide.subtitle}</p>
      </motion.div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
        {slide.features.map((f, i) => (
          <motion.div key={i} variants={fadeUp}
            whileHover={{ scale: 1.04, boxShadow: `0 6px 24px ${peach[200]}` }}
            style={{ background: peach[50], border: `1px solid ${peach[200]}`, borderRadius: 14, padding: "14px 14px", textAlign: "center", cursor: "default" }}>
            <div style={{ fontSize: 28, marginBottom: 6 }}>{f.icon}</div>
            <p style={{ fontSize: 13, fontWeight: 700, color: peach[700], margin: "0 0 4px" }}>{f.label}</p>
            <p style={{ fontSize: 11, color: peach[500], margin: 0 }}>{f.detail}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function ComparisonSlide({ slide }) {
  return (
    <motion.div variants={stagger} initial="initial" animate="animate" style={{ padding: "30px 28px", height: "100%" }}>
      <motion.div variants={fadeUp} style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: peach[700], margin: 0 }}>{slide.title}</h2>
        <p style={{ fontSize: 13, color: peach[400], margin: "4px 0 0" }}>{slide.subtitle}</p>
      </motion.div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {slide.patents.map((p, i) => (
          <motion.div key={i} variants={fadeUp}
            style={{ background: peach[50], border: `1px solid ${peach[200]}`, borderRadius: 14, padding: "14px 16px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, alignItems: "start" }}>
            <div>
              <p style={{ fontSize: 10, color: peach[400], margin: "0 0 3px", fontWeight: 600 }}>PATENT</p>
              <p style={{ fontSize: 12, fontWeight: 700, color: peach[700], margin: 0 }}>{p.id}</p>
              <p style={{ fontSize: 11, color: peach[600], margin: "3px 0 0" }}>{p.title}</p>
            </div>
            <div style={{ borderLeft: `2px solid ${peach[200]}`, paddingLeft: 12 }}>
              <p style={{ fontSize: 10, color: peach[400], margin: "0 0 3px", fontWeight: 600 }}>RESEARCH GAP</p>
              <p style={{ fontSize: 11, color: "#C04A18", margin: 0, lineHeight: 1.4 }}>{p.gap}</p>
            </div>
            <div style={{ borderLeft: `2px solid ${peach[300]}`, paddingLeft: 12 }}>
              <p style={{ fontSize: 10, color: peach[400], margin: "0 0 3px", fontWeight: 600 }}>OUR NOVELTY</p>
              <p style={{ fontSize: 11, color: peach[600], margin: 0, lineHeight: 1.4 }}>{p.novelty}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function ObjectivesSlide({ slide }) {
  return (
    <motion.div variants={stagger} initial="initial" animate="animate" style={{ padding: "30px 28px", height: "100%" }}>
      <motion.div variants={fadeUp} style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: peach[700], margin: 0 }}>{slide.title}</h2>
        <p style={{ fontSize: 13, color: peach[400], margin: "4px 0 0" }}>{slide.subtitle}</p>
      </motion.div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {slide.objectives.map((o, i) => (
          <motion.div key={i} variants={fadeUp}
            style={{ display: "flex", alignItems: "flex-start", gap: 10, background: peach[50], border: `1px solid ${peach[200]}`, borderRadius: 12, padding: "12px 14px" }}>
            <span style={{ fontSize: 16, flexShrink: 0 }}>{o.icon}</span>
            <p style={{ fontSize: 12, color: peach[700], margin: 0, lineHeight: 1.5 }}>{o.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function ResultsSlide({ slide }) {
  return (
    <motion.div variants={stagger} initial="initial" animate="animate" style={{ padding: "30px 28px", height: "100%" }}>
      <motion.div variants={fadeUp} style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: peach[700], margin: 0 }}>{slide.title}</h2>
        <p style={{ fontSize: 13, color: peach[400], margin: "4px 0 0" }}>{slide.subtitle}</p>
      </motion.div>
      <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 12, height: 12, borderRadius: 3, background: peach[200] }} />
          <span style={{ fontSize: 11, color: peach[500] }}>Prior Art</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 12, height: 12, borderRadius: 3, background: peach[400] }} />
          <span style={{ fontSize: 11, color: peach[500] }}>Our Invention</span>
        </div>
      </div>
      {slide.metrics.map((m, i) => (
        <motion.div key={i} variants={fadeUp} style={{ marginBottom: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
            <span style={{ fontSize: 13, color: peach[700], fontWeight: 600 }}>{m.label}</span>
            <span style={{ fontSize: 12, color: peach[500] }}>{m.old}% → <strong style={{ color: peach[600] }}>{m.new}%</strong></span>
          </div>
          <div style={{ position: "relative", height: 18, background: peach[100], borderRadius: 20, overflow: "hidden" }}>
            <motion.div
              style={{ position: "absolute", top: 0, left: 0, height: "100%", background: peach[200], borderRadius: 20 }}
              initial={{ width: 0 }}
              animate={{ width: `${m.old}%` }}
              transition={{ delay: i * 0.1 + 0.3, duration: 0.8 }}
            />
            <motion.div
              style={{ position: "absolute", top: 0, left: 0, height: "100%", background: `linear-gradient(90deg, ${peach[300]}, ${peach[500]})`, borderRadius: 20 }}
              initial={{ width: 0 }}
              animate={{ width: `${m.new}%` }}
              transition={{ delay: i * 0.1 + 0.6, duration: 1 }}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function ThanksSlide({ slide }) {
  return (
    <motion.div variants={stagger} initial="initial" animate="animate"
      style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: "40px 32px", textAlign: "center" }}>
      <motion.div variants={fadeUp}
        style={{ fontSize: 56, marginBottom: 10 }}>🙏</motion.div>
      <motion.h1 variants={fadeUp}
        style={{ fontSize: 32, fontWeight: 800, color: peach[700], margin: "0 0 8px" }}>{slide.title}</motion.h1>
      <motion.p variants={fadeUp}
        style={{ fontSize: 14, color: peach[500], maxWidth: 460, margin: "0 0 28px", lineHeight: 1.7 }}>
        {slide.message}
      </motion.p>
      <motion.div variants={fadeUp}
        style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap", justifyContent: "center" }}>
        {slide.team.map((t, i) => (
          <motion.div key={i}
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 + i * 0.15, type: "spring", stiffness: 200 }}
            style={{ width: 72, height: 72, borderRadius: "50%", background: peach[400], color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, textAlign: "center", padding: 8 }}>
            {t.split(" ")[0]}
          </motion.div>
        ))}
      </motion.div>
      <motion.p variants={fadeUp}
        style={{ fontSize: 12, color: peach[300] }}>
        📍 {slide.institution}
      </motion.p>
    </motion.div>
  );
}

const slideComponents = {
  title: TitleSlide,
  problem: ProblemSlide,
  invention: InventionSlide,
  comparison: ComparisonSlide,
  objectives: ObjectivesSlide,
  results: ResultsSlide,
  thanks: ThanksSlide,
};

export default function Presentation() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];
  const SlideComp = slideComponents[slide.type];

  const prev = () => setCurrent(c => Math.max(0, c - 1));
  const next = () => setCurrent(c => Math.min(slides.length - 1, c + 1));

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div style={{ fontFamily: "var(--font-sans, system-ui)", background: peach[50], minHeight: "100vh", display: "flex", flexDirection: "column", padding: "16px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", width: "100%" }}>
        {/* Header bar */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12, padding: "10px 16px", background: peach[400], borderRadius: 12 }}>
          <span style={{ fontSize: 12, color: "#fff", fontWeight: 600, opacity: 0.9 }}>
            🍼 Ergonomic Feeding Support Mechanism
          </span>
          <span style={{ fontSize: 12, color: "#fff", opacity: 0.8 }}>
            {current + 1} / {slides.length}
          </span>
        </motion.div>

        {/* Slide area */}
        <div style={{ background: "#fff", borderRadius: 20, border: `2px solid ${peach[200]}`, overflow: "hidden", minHeight: 480, position: "relative", boxShadow: `0 8px 40px ${peach[200]}` }}>
          {/* Decorative corner */}
          <div style={{ position: "absolute", top: 0, right: 0, width: 120, height: 120, background: peach[50], borderRadius: "0 0 0 120px", zIndex: 0 }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, width: 80, height: 80, background: peach[50], borderRadius: "0 80px 0 0", zIndex: 0 }} />

          <div style={{ position: "relative", zIndex: 1, height: "100%" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ height: "100%" }}
              >
                <SlideComp slide={slide} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.3 } }}
          style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, marginTop: 16 }}>
          <motion.button onClick={prev} disabled={current === 0}
            whileHover={{ scale: current === 0 ? 1 : 1.06 }}
            whileTap={{ scale: 0.95 }}
            style={{ background: current === 0 ? peach[100] : peach[400], color: current === 0 ? peach[300] : "#fff", border: "none", borderRadius: 10, padding: "10px 22px", fontSize: 14, cursor: current === 0 ? "default" : "pointer", fontWeight: 600 }}>
            ← Prev
          </motion.button>

          {/* Dots */}
          <div style={{ display: "flex", gap: 8 }}>
            {slides.map((_, i) => (
              <motion.div key={i}
                onClick={() => setCurrent(i)}
                animate={{ width: i === current ? 24 : 10, background: i === current ? peach[500] : peach[200] }}
                style={{ height: 10, borderRadius: 10, cursor: "pointer" }}
              />
            ))}
          </div>

          <motion.button onClick={next} disabled={current === slides.length - 1}
            whileHover={{ scale: current === slides.length - 1 ? 1 : 1.06 }}
            whileTap={{ scale: 0.95 }}
            style={{ background: current === slides.length - 1 ? peach[100] : peach[400], color: current === slides.length - 1 ? peach[300] : "#fff", border: "none", borderRadius: 10, padding: "10px 22px", fontSize: 14, cursor: current === slides.length - 1 ? "default" : "pointer", fontWeight: 600 }}>
            Next →
          </motion.button>
        </motion.div>

        {/* Slide title chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14, justifyContent: "center" }}>
          {slides.map((s, i) => (
            <motion.div key={i} onClick={() => setCurrent(i)}
              whileHover={{ scale: 1.05 }}
              style={{ fontSize: 11, padding: "4px 12px", borderRadius: 20, background: i === current ? peach[400] : peach[100], color: i === current ? "#fff" : peach[600], cursor: "pointer", fontWeight: i === current ? 600 : 400 }}>
              {s.title}
            </motion.div>
          ))}
        </div>

        <p style={{ textAlign: "center", fontSize: 11, color: peach[300], marginTop: 12 }}>
          Use ← → arrow keys or click to navigate
        </p>
      </div>
    </div>
  );
}

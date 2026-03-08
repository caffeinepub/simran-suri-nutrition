import {
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Stethoscope,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  show: { transition: { staggerChildren: 0.1 } },
};

const focusAreas = [
  "Digestive health support",
  "PCOS and hormonal balance",
  "Diabetes and blood sugar management",
  "Thyroid health",
  "Lifestyle and energy optimisation",
  "Sustainable weight management",
];

const credentials = [
  {
    icon: GraduationCap,
    label: "Education",
    lines: [
      "BSc Home Science, Lady Irwin College, Delhi University",
      "MSc Food & Nutrition, Delhi University",
    ],
  },
  {
    icon: Stethoscope,
    label: "Clinical Experience",
    lines: ["Indraprastha Apollo Hospital", "Metro Hospitals"],
  },
  {
    icon: BookOpen,
    label: "Foundation",
    lines: ["Internship at AIIMS", "Medical Nutrition Therapy"],
  },
  {
    icon: Users,
    label: "Current Practice",
    lines: ["Nutrition Consultant", "Freelance Dietitian"],
  },
];

export function AboutPage() {
  return (
    <main className="pt-[72px]">
      {/* ── Page Hero ─────────────────────────────────────────────────── */}
      <section className="bg-cream section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-3 rounded-[36px] bg-sage-light/30 -rotate-1" />
              <div
                className="relative w-full rounded-2xl shadow-warm overflow-hidden bg-cream"
                style={{ maxHeight: "560px", aspectRatio: "4/5" }}
              >
                <img
                  src="/assets/uploads/tempImageOjm00x-Edited-1.jpg"
                  alt="Simran Suri, Clinical Dietitian"
                  className="w-full h-full object-contain object-center"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Intro text */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger}
              className="space-y-6 pt-4"
            >
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                <span className="inline-block text-xs font-body font-semibold tracking-widest uppercase text-sage border border-sage/30 bg-sage/8 rounded-full px-3 py-1">
                  Clinical Dietitian & Nutrition Consultant
                </span>
                <span className="inline-block text-xs font-body font-semibold tracking-wide text-warm-brown border border-warm-brown/30 bg-warm-brown/8 rounded-full px-3 py-1">
                  20+ Years of Experience
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-display text-5xl md:text-6xl font-bold text-foreground leading-tight"
              >
                About Simran Suri
              </motion.h1>

              <motion.div
                variants={fadeUp}
                className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"
              >
                <p>
                  Simran Suri is a Clinical Dietitian and Nutrition Consultant
                  with over 20 years of experience in dietetics and nutrition.
                  She holds a BSc in Home Science from Lady Irwin College, Delhi
                  University, and an MSc in Food and Nutrition from Delhi
                  University, building a strong academic foundation in clinical
                  nutrition.
                </p>
                <p>
                  Her professional journey began with an internship at AIIMS,
                  where she developed a solid grounding in medical nutrition
                  therapy. She went on to work with leading healthcare
                  institutions, including Indraprastha Apollo Hospital and Metro
                  Hospitals, gaining extensive clinical experience in
                  therapeutic nutrition and patient care.
                </p>
                <p>
                  Today, Simran works as a nutrition consultant and freelance
                  dietitian, helping individuals adopt balanced, practical, and
                  sustainable nutrition practices tailored to their unique
                  lifestyle and health goals. Her approach combines
                  evidence-informed guidance with a deep respect for individual
                  food preferences, cultural habits, and long-term wellbeing —
                  making nutrition feel achievable and meaningful for every
                  client.
                </p>
              </motion.div>

              {/* Credentials Grid */}
              <motion.div
                variants={stagger}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
              >
                {credentials.map((cred) => (
                  <motion.div
                    key={cred.label}
                    variants={fadeUp}
                    className="rounded-xl border border-sage/25 bg-card p-5 flex gap-4 items-start hover:border-sage/50 hover:shadow-sm transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sage/15 flex items-center justify-center shrink-0 group-hover:bg-sage/25 transition-colors">
                      <cred.icon size={18} className="text-sage" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-body text-xs font-semibold uppercase tracking-widest text-sage">
                        {cred.label}
                      </p>
                      {cred.lines.map((line) => (
                        <p
                          key={line}
                          className="font-body text-sm text-foreground/75 leading-snug"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Philosophy ────────────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.965 0.025 133) 0%, oklch(0.955 0.030 130) 100%)",
        }}
      >
        <div className="container-narrow">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="space-y-6"
          >
            <div className="flex items-start gap-3">
              <div className="w-1 h-8 bg-sage rounded-full mt-2 shrink-0" />
              <motion.h2
                variants={fadeUp}
                className="font-display text-4xl md:text-5xl font-bold text-foreground"
              >
                Philosophy
              </motion.h2>
            </div>
            <motion.div
              variants={fadeUp}
              className="space-y-4 font-body text-base text-muted-foreground leading-relaxed max-w-2xl border-l-4 border-l-sage pl-6 bg-sage/5 rounded-r-xl py-4"
            >
              <p>
                Nutrition guidance should never feel restrictive or
                overwhelming. Instead, it should empower individuals to
                understand their food choices and develop habits that support
                long-term health.
              </p>
              <p>
                By focusing on balanced meals, realistic routines, and
                evidence-informed nutrition practices, the goal is to create
                sustainable changes that improve overall quality of life.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Areas of Focus ────────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.99 0.003 90) 0%, oklch(0.975 0.015 130) 100%)",
        }}
      >
        <div className="container-narrow">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="space-y-8"
          >
            <div className="flex items-start gap-3">
              <div className="w-1 h-8 bg-sage rounded-full mt-2 shrink-0" />
              <motion.h2
                variants={fadeUp}
                className="font-display text-4xl md:text-5xl font-bold text-foreground"
              >
                Areas of Focus
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {focusAreas.map((area) => (
                <motion.div
                  key={area}
                  variants={fadeUp}
                  className="flex items-center gap-3 p-4 rounded-xl border border-sage/25 bg-card hover:border-sage/50 transition-colors"
                >
                  <CheckCircle2 size={18} className="text-sage shrink-0" />
                  <span className="font-body text-sm font-medium text-foreground/80">
                    {area}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Disclaimer */}
            <motion.div
              variants={fadeUp}
              className="mt-8 p-5 rounded-xl bg-muted/50 border border-border"
            >
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                <strong className="font-semibold text-foreground/60">
                  Disclaimer:{" "}
                </strong>
                Nutrition guidance is provided as part of dietetic consultation
                and is intended to support overall wellbeing. It does not
                replace medical diagnosis, treatment, or advice from a
                physician.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

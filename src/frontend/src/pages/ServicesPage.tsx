import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { HeartPulse, Star, Video } from "lucide-react";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
};

const services = [
  {
    icon: Video,
    tag: "Online",
    title: "Online Nutrition Consultation",
    desc: "A one-to-one consultation that focuses on understanding your dietary habits, health goals, and lifestyle patterns. The session includes an assessment of your current nutrition practices and practical recommendations designed to support sustainable dietary improvements.",
  },
  {
    icon: Star,
    tag: "Personalised",
    title: "Personalised Nutrition Guidance",
    desc: "Structured nutrition recommendations tailored to your specific needs and lifestyle. The goal is to help develop balanced eating habits that support energy levels, digestion, and long-term health.",
  },
  {
    icon: HeartPulse,
    tag: "Condition-Specific",
    title: "Condition-Specific Support",
    desc: "Nutrition guidance designed to support individuals managing specific conditions such as PCOS, diabetes, thyroid concerns, digestive discomfort, and lifestyle-related health goals. Recommendations are designed to complement medical care while focusing on sustainable dietary practices.",
  },
];

export function ServicesPage() {
  return (
    <main className="pt-[72px]">
      {/* ── Page Header ───────────────────────────────────────────────── */}
      <section className="bg-cream section-padding">
        <div className="container-narrow">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="space-y-5"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block text-xs font-body font-semibold tracking-widest uppercase text-sage border border-sage/30 bg-sage/8 rounded-full px-3 py-1"
            >
              Services
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl md:text-6xl font-bold text-foreground leading-tight"
            >
              Nutrition Services
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="font-body text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              Consultations are designed to provide personalised guidance based
              on individual health goals, lifestyle patterns, and nutritional
              needs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Service Cards ─────────────────────────────────────────────── */}
      <section className="bg-background section-padding">
        <div className="container-narrow">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                data-ocid={`services_page.card.${i + 1}`}
                className="rounded-2xl border border-border bg-card p-7 space-y-5 flex flex-col hover:border-sage/40 hover:shadow-md transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-sage/10 flex items-center justify-center group-hover:bg-sage/20 transition-colors">
                  <service.icon size={20} className="text-sage" />
                </div>

                <div className="space-y-2 flex-1">
                  <span className="inline-block text-xs font-body font-semibold tracking-widest uppercase text-sage/70">
                    {service.tag}
                  </span>
                  <h2 className="font-display text-xl font-bold text-foreground leading-snug">
                    {service.title}
                  </h2>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <Link to="/contact">
                  <Button
                    className="bg-primary text-primary-foreground hover:opacity-90 font-body w-full"
                    data-ocid={`services_page.primary_button.${i + 1}`}
                  >
                    Book Consultation
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────────────── */}
      <section className="bg-cream-dark section-padding">
        <div className="container-narrow">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center space-y-5"
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl md:text-4xl font-bold text-foreground"
            >
              Not sure which service is right for you?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-body text-muted-foreground max-w-md mx-auto"
            >
              Get in touch and we'll help identify the best approach for your
              individual needs.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:opacity-90 font-body px-8"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

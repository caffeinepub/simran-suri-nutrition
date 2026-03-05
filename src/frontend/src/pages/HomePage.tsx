import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Download,
  Droplets,
  Quote,
  Wind,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

/* ── Animation variants ───────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  show: { transition: { staggerChildren: 0.1 } },
};

/* ── Data ─────────────────────────────────────────────────────────────── */
const areas = [
  {
    icon: Wind,
    title: "Digestive Health",
    desc: "Support for concerns such as bloating, acidity, and gut discomfort through balanced nutrition and lifestyle guidance.",
  },
  {
    icon: Activity,
    title: "PCOS & Hormonal Support",
    desc: "Practical nutrition strategies designed to support hormonal balance and long-term lifestyle sustainability.",
  },
  {
    icon: Droplets,
    title: "Diabetes & Blood Sugar Management",
    desc: "Guidance on structuring balanced meals that support stable energy and blood sugar levels.",
  },
  {
    icon: Zap,
    title: "Thyroid & Lifestyle Health",
    desc: "Nutrition approaches that support energy levels, metabolism, and everyday wellbeing.",
  },
];

const testimonials = [
  {
    shortQuote:
      "Within three months I had lost 10 kg and my blood reports returned to a healthy range. Simran's guidance helped me rebuild sustainable habits and regain confidence in my health.",
    attribution: "— Client",
    fullStory: [
      "I always prided myself on being fit and healthy. It was the one thing I never compromised on. But then Covid happened, and suddenly there were so many other things to worry about. With my elderly parents living with me, I spent more than a year mostly indoors. Stress, self-neglect, and emotional eating slowly caught up with me. Two years later, I was 15 kg heavier and my blood reports were moving toward medication.",
      "That was my wake-up call. I started exercising and trying to watch my diet, but I realised I needed professional guidance. That's when I started working with Simran.",
      "She began as my dietitian but quickly became someone who genuinely supported me through the process. With her practical guidance, structured meal plans, and constant encouragement, I slowly started feeling like myself again.",
      "Within three months I had already lost 10 kg, and my blood reports returned to a healthy range. More importantly, I regained confidence in my ability to take care of my health again.",
      "Thank you, Simran, for your patience, guidance, and encouragement throughout the journey.",
    ],
  },
  {
    shortQuote:
      "I recently placed 3rd in a 3 km race and can now comfortably complete 7 km runs. Simran's structured nutrition approach made the difference in my training.",
    attribution: "— Client",
    fullStory: [
      "Thank you for the amazing diet plans and guidance. Your support has helped me stay consistent with my training and overall nutrition.",
      "Because of the structured approach you suggested, I've been able to improve my endurance and performance. I recently placed 3rd in a 3 km race and can now comfortably complete 7 km runs.",
      "Your guidance has played a huge role in helping me stay disciplined with my nutrition while training.",
    ],
  },
];

/* ── Component ────────────────────────────────────────────────────────── */
export function HomePage() {
  const [openStoryIndex, setOpenStoryIndex] = useState<number | null>(null);

  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="pt-[72px] min-h-[80vh] flex items-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.98 0.005 85) 0%, oklch(0.96 0.018 130) 100%)",
        }}
      >
        <div className="container-wide section-padding w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
            {/* Left */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger}
              className="space-y-7"
            >
              <motion.div variants={fadeUp} className="space-y-3">
                <span className="inline-block text-xs font-body font-semibold tracking-widest uppercase text-sage border border-sage/30 bg-sage/8 rounded-full px-3 py-1">
                  Clinical Dietitian & Nutrition Consultant
                </span>
                <p className="font-body text-sm font-medium text-warm-brown/80 tracking-wide">
                  Evidence-informed nutrition guidance focused on sustainable,
                  practical health
                </p>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-display text-5xl md:text-6xl lg:text-[62px] font-bold leading-[1.1] tracking-tight text-foreground"
              >
                Enjoy the taste of{" "}
                <em className="text-sage not-italic">eating right.</em>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="font-body text-lg text-muted-foreground leading-relaxed max-w-lg"
              >
                Personalised, sustainable nutrition guidance designed to fit
                real life. Supporting better digestion, balanced energy, and
                long-term health through practical, evidence-informed nutrition.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-3 pt-2"
              >
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary-dark transition-colors font-body font-medium px-7 shadow-sage"
                    data-ocid="hero.primary_button"
                  >
                    Book a Consultation
                  </Button>
                </Link>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-sage text-sage hover:bg-sage/8 font-body font-medium px-7"
                    data-ocid="hero.secondary_button"
                  >
                    WhatsApp Now
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Right — Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Decorative blob behind photo */}
                <div className="absolute -inset-4 rounded-[40px] bg-sage-light/40 rotate-2" />
                <div
                  className="relative w-full max-w-[440px] rounded-2xl shadow-warm overflow-hidden bg-cream"
                  style={{ aspectRatio: "4/5" }}
                >
                  <img
                    src="/assets/uploads/tempImageOjm00x-Edited-1.jpg"
                    alt="Simran Suri, Clinical Dietitian"
                    className="w-full h-full object-contain object-center"
                    loading="eager"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Areas I Support ───────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.975 0.012 95) 0%, oklch(0.955 0.028 133) 100%)",
        }}
      >
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="space-y-12"
          >
            <motion.div variants={fadeUp} className="max-w-2xl space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-1 h-8 bg-sage rounded-full mt-2 shrink-0" />
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Nutrition support for real life
                </h2>
              </div>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Nutrition isn't one-size-fits-all. My approach focuses on
                helping individuals build sustainable habits that support
                overall wellbeing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {areas.map((area, i) => (
                <motion.div
                  key={area.title}
                  variants={fadeUp}
                  data-ocid={`areas.card.${i + 1}`}
                  className="bg-background rounded-2xl p-6 border-l-4 border-l-sage/60 border border-sage/25 hover:border-sage/50 hover:shadow-md transition-all duration-300 group pl-5"
                >
                  <div className="w-10 h-10 rounded-xl bg-sage/15 flex items-center justify-center mb-4 group-hover:bg-sage/25 transition-colors">
                    <area.icon size={18} className="text-sage" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 leading-snug">
                    {area.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {area.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── My Approach ───────────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.945 0.028 72) 0%, oklch(0.94 0.025 110) 100%)",
        }}
      >
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="space-y-6"
            >
              <motion.div variants={fadeUp} className="flex items-start gap-3">
                <div className="w-1 h-8 bg-sage rounded-full mt-2 shrink-0" />
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Sustainable nutrition, not extreme diets.
                </h2>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="space-y-4 font-body text-base text-muted-foreground leading-relaxed"
              >
                <p>
                  Healthy eating should feel practical, enjoyable, and
                  sustainable. My approach focuses on helping individuals
                  develop balanced eating habits that work with their routine,
                  cultural food preferences, and lifestyle.
                </p>
                <p>
                  Instead of restrictive plans or quick fixes, the goal is to
                  build long-term habits that support better energy, digestion,
                  and overall health.
                </p>
                <p>
                  Nutrition guidance is personalised to ensure that
                  recommendations remain realistic, flexible, and sustainable
                  over time.
                </p>
              </motion.div>
              <motion.div variants={fadeUp}>
                <Link to="/about">
                  <Button
                    variant="outline"
                    className="border-sage text-sage hover:bg-sage/8 font-body font-medium gap-2"
                    data-ocid="approach.button"
                  >
                    Learn More About My Approach
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative w-full max-w-sm">
                <div className="rounded-3xl bg-sage/15 border border-sage/35 rounded-2xl p-8 shadow-sage">
                  <div className="space-y-5">
                    {[
                      "No crash diets",
                      "Cultural food preferences respected",
                      "Evidence-informed guidance",
                      "Flexible & realistic plans",
                      "Long-term sustainable habits",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-sage shrink-0" />
                        <span className="font-body text-sm font-medium text-foreground/80">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────────── */}
      <section className="bg-background section-padding">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="space-y-10"
          >
            <motion.div variants={fadeUp} className="flex items-start gap-3">
              <div className="w-1 h-8 bg-sage rounded-full mt-2 shrink-0" />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Nutrition Services
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Service Card 1 */}
              <motion.div
                variants={fadeUp}
                data-ocid="services.card.1"
                className="rounded-2xl border border-sage/25 border-t-2 border-t-sage/60 bg-card p-8 space-y-4 flex flex-col hover:border-sage/50 hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-3 flex-1">
                  <span className="inline-block text-xs font-body font-semibold tracking-widest uppercase text-sage bg-sage/8 rounded-full px-3 py-1">
                    Consultation
                  </span>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Online Nutrition Consultation
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    Personalised consultations designed to understand your
                    lifestyle, health goals, and dietary habits. Each session
                    focuses on creating realistic strategies that help improve
                    overall wellbeing while supporting sustainable nutrition
                    practices.
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    Includes lifestyle review, dietary assessment, and
                    personalised guidance.
                  </p>
                </div>
                <Link to="/contact">
                  <Button
                    className="bg-primary text-primary-foreground hover:bg-primary-dark transition-colors font-body w-full"
                    data-ocid="services.primary_button.1"
                  >
                    Book Consultation
                  </Button>
                </Link>
              </motion.div>

              {/* Service Card 2 */}
              <motion.div
                variants={fadeUp}
                data-ocid="services.card.2"
                className="rounded-2xl border border-sage/25 border-t-2 border-t-sage/60 bg-card p-8 space-y-4 flex flex-col hover:border-sage/50 hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-3 flex-1">
                  <span className="inline-block text-xs font-body font-semibold tracking-widest uppercase text-sage bg-sage/8 rounded-full px-3 py-1">
                    Condition-Specific
                  </span>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Condition-Specific Nutrition Support
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    Nutrition guidance tailored for individuals managing
                    specific health concerns such as PCOS, diabetes, thyroid
                    conditions, digestive concerns, and lifestyle-related health
                    goals.
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    The focus remains on balanced nutrition strategies that
                    complement medical care and support long-term health.
                  </p>
                </div>
                <Link to="/contact">
                  <Button
                    className="bg-primary text-primary-foreground hover:bg-primary-dark transition-colors font-body w-full"
                    data-ocid="services.primary_button.2"
                  >
                    Book Consultation
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: "oklch(0.975 0.018 130)" }}
      >
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="space-y-10"
          >
            <motion.div
              variants={fadeUp}
              className="flex items-start gap-3 justify-center"
            >
              <div className="w-1 h-8 bg-sage rounded-full mt-2 shrink-0" />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                What Clients Say
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <motion.div
                  // biome-ignore lint/suspicious/noArrayIndexKey: static testimonials list
                  key={i}
                  variants={fadeUp}
                  data-ocid={`testimonials.card.${i + 1}`}
                  className="bg-background rounded-2xl p-7 border border-sage/25 relative flex flex-col gap-4 hover:border-sage/50 hover:shadow-md transition-all duration-300"
                >
                  <Quote
                    size={28}
                    className="text-warm-brown/50 fill-warm-brown/15"
                    strokeWidth={1}
                  />
                  <p className="font-body text-foreground/80 leading-relaxed italic flex-1">
                    "{t.shortQuote}"
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-2 border-t border-border/50">
                    <span className="font-body text-sm text-muted-foreground">
                      {t.attribution}
                    </span>
                    <button
                      type="button"
                      onClick={() => setOpenStoryIndex(i)}
                      data-ocid={`testimonials.read_more_button.${i + 1}`}
                      className="font-body text-sm text-sage underline underline-offset-2 hover:text-sage/70 transition-colors flex items-center gap-1"
                    >
                      Read Full Story
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Full Story Dialogs ────────────────────────────────────────── */}
      {testimonials.map((t, i) => (
        <Dialog
          key={t.shortQuote.slice(0, 20)}
          open={openStoryIndex === i}
          onOpenChange={(open) => !open && setOpenStoryIndex(null)}
        >
          <DialogContent
            className="max-w-lg max-h-[80vh] overflow-y-auto"
            data-ocid={`testimonials.dialog.${i + 1}`}
          >
            <DialogHeader>
              <DialogTitle className="font-display text-xl font-semibold text-foreground">
                Client Experience
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-2">
              <Quote
                size={28}
                className="text-sage/30 fill-sage/10"
                strokeWidth={1}
              />
              {t.fullStory.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 30)}
                  className="font-body text-foreground/80 leading-relaxed text-sm"
                >
                  {paragraph}
                </p>
              ))}
              <p className="font-body text-sm text-muted-foreground pt-2 border-t border-border/50">
                {t.attribution}
              </p>
            </div>
            <div className="flex justify-end mt-4">
              <Button
                variant="outline"
                onClick={() => setOpenStoryIndex(null)}
                data-ocid={`testimonials.close_button.${i + 1}`}
                className="font-body border-sage/30 text-sage hover:bg-sage/8"
              >
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      ))}

      {/* ── Free Resources ────────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.46 0.092 145) 0%, oklch(0.40 0.082 148) 100%)",
        }}
      >
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="max-w-2xl space-y-6"
          >
            <motion.div variants={fadeUp} className="space-y-1">
              <span className="inline-block text-xs font-body font-semibold tracking-widest uppercase text-background/70 border border-background/20 rounded-full px-3 py-1">
                Free Resources
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl font-bold text-background leading-tight"
            >
              Free Nutrition Resources
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-body text-lg text-background/80 leading-relaxed"
            >
              Simple tools and educational resources designed to help you build
              balanced eating habits and understand the fundamentals of healthy
              nutrition. Resources include practical guides and checklists that
              support everyday nutrition decisions.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
              <Link to="/resources">
                <Button
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 font-body font-medium gap-2"
                  data-ocid="resources.primary_button"
                >
                  <BookOpen size={16} />
                  Explore Resources
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-background/40 text-background hover:bg-background/10 font-body font-medium gap-2"
                data-ocid="resources.secondary_button"
              >
                <Download size={16} />
                Download Free Guide
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.28 0.055 140) 0%, oklch(0.20 0.025 130) 100%)",
        }}
      >
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center max-w-2xl mx-auto space-y-6"
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl font-bold text-background leading-tight"
            >
              Ready to improve your relationship with food?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-body text-lg text-background/70 leading-relaxed"
            >
              Book a consultation to receive personalised nutrition guidance
              designed to support your health goals and lifestyle.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-sage text-background hover:bg-primary-dark transition-colors font-body font-medium px-8 shadow-sage"
                  data-ocid="cta.primary_button"
                >
                  Book a Consultation
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

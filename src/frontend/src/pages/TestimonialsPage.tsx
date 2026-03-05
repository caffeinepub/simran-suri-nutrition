import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowRight, Quote } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
};

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

export function TestimonialsPage() {
  const [openStoryIndex, setOpenStoryIndex] = useState<number | null>(null);

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
              Client Experiences
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl md:text-6xl font-bold text-foreground leading-tight"
            >
              Client Experiences
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="font-body text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              Feedback from individuals who have received personalised nutrition
              consultations and guidance.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials Grid ─────────────────────────────────────────── */}
      <section className="bg-background section-padding">
        <div className="container-narrow">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {testimonials.map((t, i) => (
              <motion.div
                // biome-ignore lint/suspicious/noArrayIndexKey: static testimonials list
                key={i}
                variants={fadeUp}
                data-ocid={`testimonials.card.${i + 1}`}
                className="bg-card rounded-2xl p-8 border border-sage/25 space-y-4 flex flex-col hover:border-sage/50 hover:shadow-md transition-all duration-300"
              >
                <Quote
                  size={32}
                  className="text-sage/30 fill-sage/10"
                  strokeWidth={1}
                />
                <p className="font-body text-foreground/80 leading-relaxed italic flex-1">
                  "{t.shortQuote}"
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-border/50 mt-auto">
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

      {/* ── Large featured quote ──────────────────────────────────────── */}
      <section className="bg-cream-dark section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <Quote
              size={48}
              className="text-sage/20 fill-sage/10 mx-auto"
              strokeWidth={1}
            />
            <blockquote className="font-display text-2xl md:text-3xl font-semibold text-foreground italic leading-relaxed max-w-2xl mx-auto">
              "Within three months I had lost 10 kg and my blood reports
              returned to a healthy range. Simran's guidance helped me rebuild
              sustainable habits and regain confidence in my health."
            </blockquote>
            <p className="font-body text-muted-foreground">— Client</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "@tanstack/react-router";
import { BarChart2, Clock, Download, FileText } from "lucide-react";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
};

const resources = [
  {
    icon: FileText,
    tag: "PDF Guide",
    title: "Balanced Plate Method for Indian Meals",
    desc: "A practical guide to structuring balanced, nutritious meals using familiar Indian ingredients and everyday cooking styles.",
    buttonLabel: "Download Guide",
    pdfUrl: "/assets/Balanced Diet.pdf",
  },
  {
    icon: BarChart2,
    tag: "Tracker",
    title: "Weekly Nutrition Habit Tracker",
    desc: "A simple checklist to help track daily nutrition habits and progress towards your wellbeing goals over time.",
    buttonLabel: "Download Tracker",
    pdfUrl: "/assets/Weekly_Nutrition_Check_In_Updated.pdf",
  },
];

export function ResourcesPage() {
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
              Resources
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl md:text-6xl font-bold text-foreground leading-tight"
            >
              Nutrition Resources
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="font-body text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              Educational articles and practical guides designed to help
              individuals better understand nutrition and build sustainable
              eating habits.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="font-body text-base text-muted-foreground leading-relaxed max-w-xl"
            >
              Topics include balanced meal planning, digestive health,
              sustainable lifestyle habits, and evidence-informed nutrition
              practices.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Blog Articles ──────────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.99 0.003 90) 0%, oklch(0.975 0.016 130) 100%)",
        }}
        data-ocid="resources.blog_section"
      >
        <div className="container-narrow">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="space-y-10"
          >
            {/* Section heading */}
            <motion.div
              variants={fadeUp}
              className="space-y-3 border-l-4 border-sage pl-5"
            >
              <span className="inline-block text-xs font-body font-semibold tracking-widest uppercase text-sage">
                From the Blog
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Nutrition Articles
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed max-w-lg">
                Evidence-informed articles on nutrition science, meal planning,
                and building sustainable healthy habits. Written by Clinical
                Dietitian Simran Suri.
              </p>
            </motion.div>

            {/* Featured first article */}
            {blogPosts.length > 0 && (
              <motion.article
                variants={fadeUp}
                data-ocid="resources.blog_card.featured"
                className="relative rounded-2xl border border-sage/40 bg-sage/10 p-8 md:p-10 flex flex-col md:flex-row gap-7 hover:border-sage/70 hover:bg-sage/14 transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-sage/60 rounded-l-2xl" />
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-block text-xs font-body font-semibold tracking-widest uppercase text-sage-dark border border-sage/40 bg-sage/20 rounded-full px-3 py-1">
                      {blogPosts[0].category}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-body text-muted-foreground">
                      <Clock size={11} className="text-sage/60" />
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-snug group-hover:text-sage-dark transition-colors">
                    {blogPosts[0].title}
                  </h3>
                  <p className="font-display text-base italic text-muted-foreground">
                    {blogPosts[0].subtitle}
                  </p>
                  <Link
                    to="/resources/blog/$slug"
                    params={{ slug: blogPosts[0].slug }}
                    data-ocid="resources.blog_card.button.featured"
                  >
                    <Button className="bg-primary text-primary-foreground hover:bg-primary-dark transition-colors font-body mt-2">
                      Read Article
                    </Button>
                  </Link>
                </div>
                <img
                  src="/assets/uploads/Simran-Suri-Letterhead.pdf-2-1.png"
                  alt=""
                  aria-hidden="true"
                  className="hidden md:block h-20 w-auto object-contain opacity-20 self-center shrink-0 pointer-events-none select-none"
                />
              </motion.article>
            )}

            {/* Remaining article cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {blogPosts.slice(1).map((post, i) => (
                <motion.article
                  key={post.slug}
                  variants={fadeUp}
                  data-ocid={`resources.blog_card.${i + 2}`}
                  className="relative rounded-2xl border border-sage/30 bg-sage/8 p-6 space-y-4 flex flex-col hover:border-sage/60 hover:bg-sage/13 hover:shadow-sm transition-all duration-300 group overflow-hidden"
                >
                  {/* Category badge */}
                  <span className="inline-block self-start text-xs font-body font-semibold tracking-widest uppercase text-sage-dark border border-sage/40 bg-sage/20 rounded-full px-3 py-1">
                    {post.category}
                  </span>

                  <div className="flex-1 space-y-2">
                    <h3 className="font-display text-lg font-bold text-foreground leading-snug group-hover:text-sage-dark transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-body text-sm italic text-muted-foreground">
                      {post.subtitle}
                    </p>
                  </div>

                  {/* Read time + button row */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="flex items-center gap-1 text-xs font-body text-muted-foreground">
                      <Clock size={11} className="text-sage/60" />
                      {post.readTime}
                    </span>
                    <Link
                      to="/resources/blog/$slug"
                      params={{ slug: post.slug }}
                      data-ocid={`resources.blog_card.button.${i + 2}`}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-sage/60 text-sage-dark bg-white/60 hover:bg-sage/20 hover:border-sage font-body text-xs"
                      >
                        Read Article
                      </Button>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Resource Cards ────────────────────────────────────────────── */}
      <section className="bg-cream section-padding">
        <div className="container-narrow">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-10"
          >
            {/* Section heading */}
            <motion.div variants={fadeUp} className="space-y-3">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Free Downloads
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed max-w-lg">
                Practical guides and tools to help you build balanced eating
                habits.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource, i) => (
                <motion.div
                  key={resource.title}
                  variants={fadeUp}
                  data-ocid={`resources_page.card.${i + 1}`}
                  className="rounded-2xl border border-sage/25 bg-card p-7 space-y-5 flex flex-col hover:border-sage/50 hover:shadow-md transition-all duration-300 group"
                >
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-sage/15 flex items-center justify-center group-hover:bg-sage/25 transition-colors">
                    <resource.icon size={20} className="text-sage" />
                  </div>

                  <div className="space-y-2 flex-1">
                    <span className="inline-block text-xs font-body font-semibold tracking-widest uppercase text-sage/70">
                      {resource.tag}
                    </span>
                    <h2 className="font-display text-xl font-bold text-foreground leading-snug">
                      {resource.title}
                    </h2>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {resource.desc}
                    </p>
                  </div>

                  <a
                    href={resource.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    data-ocid={`resources_page.button.${i + 1}`}
                  >
                    <Button
                      variant="outline"
                      className="border-sage text-sage hover:bg-sage/8 font-body gap-2 w-full"
                    >
                      <Download size={14} />
                      {resource.buttonLabel}
                    </Button>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Subscribe teaser ──────────────────────────────────────────── */}
      <section className="bg-cream-dark section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-lg space-y-4"
          >
            <h2 className="font-display text-3xl font-bold text-foreground">
              More resources coming soon
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              New practical guides and articles about sustainable nutrition are
              added regularly. Get in touch to stay informed about new
              resources.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

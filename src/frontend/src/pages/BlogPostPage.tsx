import { blogPosts } from "@/data/blogPosts";
import type { BlogSection } from "@/data/blogPosts";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, Clock } from "lucide-react";
import type { Variants } from "motion/react";
import { motion } from "motion/react";

/* ── Animation variants ───────────────────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stagger: Variants = {
  show: { transition: { staggerChildren: 0.08 } },
};

/* ── Section renderer ─────────────────────────────────────────────────────── */
function SectionBlock({
  section,
  index,
}: {
  section: BlogSection;
  index: number;
}) {
  return (
    <motion.div variants={fadeUp} data-ocid={`blog_post.section.${index + 1}`}>
      {section.type === "paragraph" && (
        <p className="font-body text-[1.0625rem] text-foreground/80 leading-[1.85] mb-6">
          {section.content}
        </p>
      )}

      {section.type === "heading" && (
        <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3 leading-snug">
          {section.content}
        </h3>
      )}

      {section.type === "list" && section.items && (
        <ul className="mb-6 space-y-2 pl-1">
          {section.items.map((item, i) => (
            <li
              // biome-ignore lint/suspicious/noArrayIndexKey: static list items
              key={i}
              className="flex items-start gap-3 font-body text-[1.0625rem] text-foreground/80 leading-relaxed"
            >
              <span className="mt-[0.45rem] w-2 h-2 rounded-full bg-sage shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {section.type === "quote" && (
        <blockquote className="my-8 pl-5 border-l-4 border-sage">
          <p className="font-display text-lg italic text-foreground/75 leading-relaxed">
            "{section.content}"
          </p>
        </blockquote>
      )}

      {section.type === "highlight" && (
        <div className="my-8 rounded-2xl bg-sage/10 border border-sage/20 px-8 py-6 text-center">
          <p className="font-display text-2xl font-bold text-sage">
            {section.content}
          </p>
        </div>
      )}
    </motion.div>
  );
}

/* ── Main page ────────────────────────────────────────────────────────────── */
export function BlogPostPage() {
  const { slug } = useParams({ strict: false }) as { slug: string };
  const post = blogPosts.find((p) => p.slug === slug);

  /* Not found state */
  if (!post) {
    return (
      <main className="pt-[72px] min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-5 px-6">
          <h1 className="font-display text-4xl font-bold text-foreground">
            Article not found
          </h1>
          <p className="font-body text-muted-foreground">
            The article you are looking for does not exist.
          </p>
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 font-body text-sage underline underline-offset-4 hover:text-sage/70 transition-colors"
            data-ocid="blog_post.back_link"
          >
            <ArrowLeft size={16} />
            Back to Resources
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      className="pt-[72px] bg-background min-h-screen"
      data-ocid="blog_post.page"
    >
      {/* ── Article header banner ──────────────────────────────────────────── */}
      <section className="bg-cream section-padding pb-12">
        <div className="container-narrow">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="space-y-5"
          >
            {/* Breadcrumb */}
            <motion.nav
              variants={fadeUp}
              className="flex items-center gap-2 text-sm font-body text-muted-foreground"
            >
              <Link
                to="/resources"
                className="hover:text-sage transition-colors"
                data-ocid="blog_post.back_link"
              >
                Resources
              </Link>
              <span className="text-border">›</span>
              <span className="text-foreground/60 truncate max-w-[200px] sm:max-w-none">
                {post.title}
              </span>
            </motion.nav>

            {/* Category badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-block text-xs font-body font-semibold tracking-widest uppercase text-sage border border-sage/30 bg-sage/8 rounded-full px-3 py-1">
                {post.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl lg:text-[54px] font-bold text-foreground leading-[1.1] tracking-tight"
            >
              {post.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="font-display text-xl md:text-2xl text-sage/80 italic font-medium leading-snug"
            >
              {post.subtitle}
            </motion.p>

            {/* Read time */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-2 text-sm font-body text-muted-foreground pt-1"
            >
              <Clock size={14} className="text-sage/60" />
              <span>{post.readTime}</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────────────────────────── */}
      <div className="h-px bg-border/60" />

      {/* ── Article body ──────────────────────────────────────────────────── */}
      <section className="bg-background section-padding">
        <div className="max-w-2xl mx-auto px-6 lg:px-0">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            {post.sections.map((section, i) => (
              <SectionBlock
                // biome-ignore lint/suspicious/noArrayIndexKey: static ordered sections
                key={i}
                section={section}
                index={i}
              />
            ))}
          </motion.div>

          {/* ── Back link ─────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-14 pt-8 border-t border-border"
          >
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 font-body text-sage font-medium underline underline-offset-4 hover:text-sage/70 transition-colors group"
              data-ocid="blog_post.back_link"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back to Resources
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

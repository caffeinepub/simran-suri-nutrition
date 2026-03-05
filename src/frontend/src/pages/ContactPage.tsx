import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContactForm } from "@/hooks/useQueries";
import {
  AlertCircle,
  CheckCircle2,
  Instagram,
  Linkedin,
  Loader2,
  Mail,
  MessageCircle,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  show: { transition: { staggerChildren: 0.1 } },
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "simransuri.dietitian@gmail.com",
    href: "mailto:simransuri.dietitian@gmail.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@simransuri_73",
    href: "https://www.instagram.com/simransuri_73",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Simran Suri",
    href: "https://www.linkedin.com/in/simran-suri-67ba34139/",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "WhatsApp Now",
    href: "https://wa.me/",
  },
];

export function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const mutation = useSubmitContactForm();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(form);
  };

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
              Get in Touch
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl md:text-6xl font-bold text-foreground leading-tight"
            >
              Contact
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="font-body text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              For consultation inquiries or further information, please use the
              contact details below.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Two-column form ───────────────────────────────────────────── */}
      <section className="bg-background section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">
            {/* LEFT — Form */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
              className="lg:col-span-3 space-y-6"
            >
              <motion.div variants={fadeUp} className="space-y-2">
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Send a Message
                </h2>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Online consultations are available for individuals seeking
                  personalised nutrition guidance. For appointments or
                  inquiries, please fill out the contact form or reach out
                  through the contact information provided.
                </p>
              </motion.div>

              {mutation.isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  data-ocid="contact.success_state"
                  className="p-6 rounded-2xl border border-sage/30 bg-sage/8 flex items-start gap-4"
                >
                  <CheckCircle2
                    className="text-sage mt-0.5 shrink-0"
                    size={22}
                  />
                  <div className="space-y-1">
                    <p className="font-body font-semibold text-foreground">
                      Message sent successfully!
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      Thank you for reaching out. Simran will be in touch
                      shortly.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  variants={fadeUp}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Name */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="fullName"
                      className="font-body text-sm font-medium text-foreground/80"
                    >
                      Full Name <span className="text-sage">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="font-body"
                      data-ocid="contact_name.input"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="email"
                      className="font-body text-sm font-medium text-foreground/80"
                    >
                      Email Address <span className="text-sage">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="font-body"
                      data-ocid="contact_email.input"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="phone"
                      className="font-body text-sm font-medium text-foreground/80"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+44 7000 000000"
                      className="font-body"
                      data-ocid="contact_phone.input"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="message"
                      className="font-body text-sm font-medium text-foreground/80"
                    >
                      Message <span className="text-sage">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your health goals or any questions you have..."
                      required
                      rows={5}
                      className="font-body resize-none"
                      data-ocid="contact_message.textarea"
                    />
                  </div>

                  {/* Error state */}
                  {mutation.isError && (
                    <div
                      data-ocid="contact.error_state"
                      className="p-4 rounded-xl border border-destructive/30 bg-destructive/8 flex items-center gap-3"
                    >
                      <AlertCircle
                        className="text-destructive shrink-0"
                        size={18}
                      />
                      <p className="font-body text-sm text-destructive">
                        Something went wrong. Please try again.
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={mutation.isPending}
                    className="bg-primary text-primary-foreground hover:bg-primary-dark transition-colors font-body font-medium w-full"
                    data-ocid="contact.submit_button"
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </motion.form>
              )}
            </motion.div>

            {/* RIGHT — Contact info */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
              className="lg:col-span-2 space-y-6 lg:pt-16"
            >
              <motion.div variants={fadeUp} className="space-y-5">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-sage/25 bg-card hover:border-sage/50 hover:bg-sage/4 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sage/15 flex items-center justify-center group-hover:bg-sage/25 transition-colors shrink-0">
                      <item.icon size={18} className="text-sage" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="font-body text-xs font-semibold text-muted-foreground tracking-wide uppercase">
                        {item.label}
                      </p>
                      <p className="font-body text-sm font-medium text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

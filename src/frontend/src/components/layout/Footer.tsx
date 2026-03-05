import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
];

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:simransuri.dietitian@gmail.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/simransuri_73",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/simran-suri-67ba34139/",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/",
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-foreground text-background/90">
      <div className="container-wide section-padding !py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="space-y-3">
            <img
              src="/assets/uploads/Simran-Suri-Letterhead.pdf-2-1.png"
              alt="Simran Suri Nutrition logo"
              className="h-12 w-auto object-contain mb-2 brightness-0 invert opacity-80"
            />
            <h3 className="font-display text-xl font-semibold text-background">
              Simran Suri
            </h3>
            <p className="text-xs font-body tracking-wide uppercase text-background/60 font-medium">
              Clinical Dietitian & Nutrition Consultant
            </p>
            {/* Social icons */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-background/20 flex items-center justify-center text-background/70 hover:text-background hover:border-background/50 transition-colors"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <div className="space-y-3">
            <h4 className="font-body text-xs font-semibold tracking-widest uppercase text-background/50">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid="footer.link"
                  className="text-sm font-body text-background/70 hover:text-background transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div className="space-y-3">
            <h4 className="font-body text-xs font-semibold tracking-widest uppercase text-background/50">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:simransuri.dietitian@gmail.com"
                className="flex items-start gap-2.5 text-sm font-body text-background/70 hover:text-background transition-colors w-fit group"
              >
                <Mail size={14} className="shrink-0 mt-0.5" />
                <span className="leading-snug">
                  simransuri.dietitian@gmail.com
                </span>
              </a>
              <a
                href="https://www.instagram.com/simransuri_73"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm font-body text-background/70 hover:text-background transition-colors w-fit"
              >
                <Instagram size={14} className="shrink-0" />
                <span>@simransuri_73</span>
              </a>
              <a
                href="https://www.linkedin.com/in/simran-suri-67ba34139/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm font-body text-background/70 hover:text-background transition-colors w-fit"
              >
                <Linkedin size={14} className="shrink-0" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm font-body text-background/70 hover:text-background transition-colors w-fit"
              >
                <MessageCircle size={14} className="shrink-0" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 pt-6 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
            <p className="text-xs font-body text-background/40 max-w-md leading-relaxed">
              Nutrition guidance provided on this website is for educational
              purposes and does not replace professional medical advice.
            </p>
            <p className="text-xs font-body text-background/30 shrink-0">
              © {currentYear}. Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-background/50 transition-colors underline underline-offset-2"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

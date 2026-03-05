import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Testimonials", to: "/testimonials" },
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
    href: "https://wa.me/919311050022",
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="container-wide section-padding !py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="space-y-3">
            <img
              src="/assets/uploads/Simran-Suri-Letterhead.pdf-2-1.png"
              alt="Simran Suri Nutrition logo"
              className="h-12 w-auto object-contain mb-2 brightness-0 invert opacity-90"
            />
            <h3 className="font-display text-xl font-semibold text-white">
              Simran Suri
            </h3>
            <p className="text-xs font-body tracking-wide uppercase text-white/80 font-medium">
              Clinical Dietitian & Nutrition Consultant
            </p>
            <p className="text-sm font-body italic text-white/70">
              Enjoy the taste of eating right.
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
                  className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:text-white hover:border-sage/60 transition-colors"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <div className="space-y-3">
            <h4 className="font-body text-xs font-semibold tracking-widest uppercase text-white/70">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid="footer.link"
                  className="text-sm font-body text-white/80 hover:text-white transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div className="space-y-3">
            <h4 className="font-body text-xs font-semibold tracking-widest uppercase text-white/70">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:simransuri.dietitian@gmail.com"
                className="flex items-start gap-2.5 text-sm font-body text-white/80 hover:text-white transition-colors w-fit group"
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
                className="flex items-center gap-2.5 text-sm font-body text-white/80 hover:text-white transition-colors w-fit"
              >
                <Instagram size={14} className="shrink-0" />
                <span>@simransuri_73</span>
              </a>
              <a
                href="https://www.linkedin.com/in/simran-suri-67ba34139/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm font-body text-white/80 hover:text-white transition-colors w-fit"
              >
                <Linkedin size={14} className="shrink-0" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://wa.me/919311050022"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm font-body text-white/80 hover:text-white transition-colors w-fit"
              >
                <MessageCircle size={14} className="shrink-0" />
                <span>+91 93110 50022</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 pt-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
            <p className="text-xs font-body text-white/60 max-w-md leading-relaxed">
              Nutrition guidance provided on this website is for educational
              purposes and does not replace professional medical advice.
            </p>
            <p className="text-xs font-body text-white/50 shrink-0">
              © {currentYear} Simran Suri Nutrition. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

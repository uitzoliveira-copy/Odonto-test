import { motion } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Tratamentos", href: "#treatments" },
    { name: "Sobre", href: "#about" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Localização", href: "#location" },
  ];

  const whatsappNumber = "5511999999999";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação%20na%20Odontotest.`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "glass py-3 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative z-10"
        >
          <Logo />
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold hover:text-premium-gold transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-premium-black text-white px-6 py-3 rounded-full text-[10px] uppercase tracking-widest font-sans font-bold hover:bg-premium-gold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-black/5"
          >
            <Phone size={14} />
            Agendar Agora
          </motion.a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 lg:hidden">
          <a
            href={`tel:+${whatsappNumber}`}
            className="w-10 h-10 rounded-full bg-premium-gold text-white flex items-center justify-center shadow-lg"
          >
            <Phone size={18} />
          </a>
          <button
            className="text-premium-black p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md"
      >
        <div className="flex flex-col p-8 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xs uppercase tracking-[0.3em] font-sans font-bold text-premium-black border-b border-gray-100 pb-4"
            >
              {link.name}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-premium-gold text-white px-6 py-5 rounded-2xl text-center text-xs uppercase tracking-widest font-sans font-bold shadow-xl shadow-premium-gold/20 flex items-center justify-center gap-3"
          >
            <Phone size={18} />
            Agendar pelo WhatsApp
          </a>
        </div>
      </motion.div>
    </nav>
  );
}

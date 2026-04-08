import { motion } from "motion/react";
import { Instagram, Facebook, Mail, MapPin, Phone, Clock } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const whatsappNumber = "5511999999999";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação%20na%20Odontotest.`;

  return (
    <footer className="bg-premium-black text-white pt-24 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <Logo goldOnly />
            <p className="text-gray-400 font-sans font-light text-sm leading-relaxed max-w-xs">
              Transformando sorrisos com excelência, tecnologia e cuidado humanizado. Sua saúde bucal em boas mãos.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-premium-gold hover:border-premium-gold transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-premium-gold hover:border-premium-gold transition-all duration-300">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs uppercase tracking-[0.3em] text-premium-gold font-sans font-bold">Links Rápidos</h4>
            <ul className="space-y-4">
              {[
                { name: "Início", href: "#home" },
                { name: "Tratamentos", href: "#treatments" },
                { name: "Sobre", href: "#about" },
                { name: "Depoimentos", href: "#testimonials" },
                { name: "FAQ", href: "#faq" },
                { name: "Localização", href: "#location" }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors font-sans">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs uppercase tracking-[0.3em] text-premium-gold font-sans font-bold">Contato</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-premium-gold shrink-0" />
                <a 
                  href="https://www.google.com/maps/dir//Av.+Paulista,+1000+-+Bela+Vista,+S%C3%A3o+Paulo+-+SP,+01310-100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 font-sans hover:text-white transition-colors leading-relaxed"
                >
                  Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-premium-gold shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 font-sans hover:text-white transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="text-premium-gold shrink-0" />
                <a href="mailto:contato@odontotest.com.br" className="text-sm text-gray-400 font-sans hover:text-white transition-colors">
                  contato@odontotest.com.br
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs uppercase tracking-[0.3em] text-premium-gold font-sans font-bold">Horários</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <Clock size={20} className="text-premium-gold shrink-0" />
                <div className="text-sm text-gray-400 font-sans">
                  <p className="font-bold text-white">Segunda - Sexta</p>
                  <p>08:00 - 19:00</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Clock size={20} className="text-premium-gold shrink-0" />
                <div className="text-sm text-gray-400 font-sans">
                  <p className="font-bold text-white">Sábado</p>
                  <p>08:00 - 13:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-gray-500 font-sans">
            © 2026 Odontotest. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-gray-500 font-sans">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
      
      {/* Decorative background text */}
      <div className="absolute -bottom-20 -right-20 text-[20rem] font-serif text-white/5 pointer-events-none select-none">
        TEST
      </div>
    </footer>
  );
}

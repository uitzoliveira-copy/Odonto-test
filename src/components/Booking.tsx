import React from "react";
import { motion } from "motion/react";
import { Phone, Calendar, ArrowRight } from "lucide-react";

export default function Booking() {
  const whatsappNumber = "5511999999999";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação%20na%20Odontotest.`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const service = formData.get("service");
    
    const text = `Olá! Meu nome é ${name}. Gostaria de agendar uma avaliação para ${service}. Meu contato é ${phone}.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-premium-black rounded-[2rem] md:rounded-[3rem] overflow-hidden relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-premium-gold)_1px,_transparent_1px)] bg-[size:40px_40px]" />
          </div>

          <div className="grid lg:grid-cols-2 items-center relative z-10">
            <div className="p-8 md:p-20">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs uppercase tracking-[0.3em] text-premium-gold font-sans font-bold mb-6 block"
              >
                Agendamento Rápido
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight"
              >
                Agende sua avaliação de forma <span className="italic">rápida e prática</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-gray-400 font-sans font-light mb-12 max-w-md text-sm md:text-base"
              >
                Fale agora com nossa equipe e descubra o melhor tratamento para o seu sorriso. Sem burocracia e sem excesso de etapas.
              </motion.p>
              
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-4 bg-premium-gold text-white px-8 md:px-10 py-5 md:py-6 rounded-full font-sans text-xs md:text-sm uppercase tracking-widest font-bold shadow-2xl shadow-premium-gold/20"
              >
                <Phone size={20} />
                Agendar pelo WhatsApp
                <ArrowRight size={20} />
              </motion.a>
            </div>

            <div className="p-8 md:p-20 bg-white/5 backdrop-blur-sm border-t lg:border-t-0 lg:border-l border-white/10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-sans font-bold text-gray-400">Nome Completo</label>
                  <input 
                    name="name"
                    type="text" 
                    required
                    placeholder="Seu nome"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-sans focus:outline-none focus:border-premium-gold transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-sans font-bold text-gray-400">Telefone / WhatsApp</label>
                  <input 
                    name="phone"
                    type="tel" 
                    required
                    placeholder="(00) 00000-0000"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-sans focus:outline-none focus:border-premium-gold transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-sans font-bold text-gray-400">Procedimento de Interesse</label>
                  <select 
                    name="service"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-sans focus:outline-none focus:border-premium-gold transition-colors appearance-none"
                  >
                    <option className="bg-premium-black">Clareamento Dental</option>
                    <option className="bg-premium-black">Facetas em Resina</option>
                    <option className="bg-premium-black">Implantes</option>
                    <option className="bg-premium-black">Ortodontia</option>
                    <option className="bg-premium-black">Outros</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-white text-premium-black py-5 rounded-2xl font-sans text-xs uppercase tracking-widest font-bold hover:bg-premium-gold hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Calendar size={16} />
                  Solicitar Contato
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

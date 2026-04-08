import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const trustBadges = [
    "Atendimento Humanizado",
    "Tecnologia Moderna",
    "Resultados Naturais",
    "Avaliação Personalizada",
  ];

  const whatsappNumber = "5511999999999";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação%20na%20Odontotest.`;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-clinical-light/30 -z-10 skew-x-[-10deg] translate-x-1/4" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-premium-gold/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block text-xs uppercase tracking-[0.3em] text-premium-gold font-sans font-bold mb-6"
          >
            Excelência em Odontologia
          </motion.span>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-8 text-premium-black">
            Seu sorriso com mais <span className="italic">confiança</span>, estética e saúde
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-sans font-light leading-relaxed mb-10 max-w-lg">
            Na Odontotest, unimos tecnologia, atendimento humanizado e resultados reais para transformar sorrisos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-premium-black text-white px-8 py-5 rounded-full font-sans text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-3 hover:bg-premium-gold transition-all duration-300 shadow-xl shadow-black/10"
            >
              Agendar pelo WhatsApp
              <ArrowRight size={18} />
            </motion.a>
            
            <motion.a
              href="#treatments"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white border border-gray-200 text-premium-black px-8 py-5 rounded-full font-sans text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-3 hover:border-premium-gold transition-all duration-300"
            >
              Ver Tratamentos
            </motion.a>
          </div>

          <div className="grid grid-cols-2 gap-y-4 gap-x-8">
            {trustBadges.map((badge, i) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-2 text-xs uppercase tracking-widest font-sans font-medium text-gray-500"
              >
                <CheckCircle2 size={16} className="text-premium-gold" />
                {badge}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/20 aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
              alt="Odontologia Premium"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-premium-gold/10 rounded-full blur-2xl -z-10" />
          <div className="absolute -top-10 -right-10 w-60 h-60 bg-clinical-blue/10 rounded-full blur-3xl -z-10" />
          
          {/* Floating Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-6 bottom-20 glass p-6 rounded-2xl shadow-xl z-20 hidden lg:block max-w-[200px]"
          >
            <p className="text-xs font-sans font-bold uppercase tracking-widest text-premium-gold mb-2">
              +10.000
            </p>
            <p className="text-[10px] font-sans uppercase tracking-widest text-gray-600 leading-tight">
              Sorrisos transformados com excelência
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

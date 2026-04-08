import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Silva",
    role: "Paciente de Facetas",
    text: "Atendimento impecável e resultado incrível. Minha autoestima mudou completamente após o tratamento na Odontotest.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Ricardo Oliveira",
    role: "Paciente de Implantes",
    text: "Me senti seguro do início ao fim. Profissionais extremamente competentes e um ambiente que transmite muita paz.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Ana Paula Costa",
    role: "Paciente de Ortodontia",
    text: "Profissionais atenciosos e ambiente excelente. O planejamento 3D me deu muita confiança no resultado final.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-clinical-light/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-premium-gold font-sans font-semibold mb-4 block"
          >
            Depoimentos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-premium-black"
          >
            A voz de quem <span className="italic">confia</span> em nós
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-[2.5rem] relative hover:shadow-xl transition-all duration-500"
            >
              <Quote className="absolute top-8 right-8 text-premium-gold/20" size={40} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-premium-gold text-premium-gold" />
                ))}
              </div>
              
              <p className="text-gray-600 font-sans font-light italic leading-relaxed mb-8">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-sans font-bold text-premium-black">{t.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

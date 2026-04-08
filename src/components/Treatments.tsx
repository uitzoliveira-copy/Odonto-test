import { motion } from "motion/react";
import { ArrowUpRight, Sparkles, ShieldCheck, Zap } from "lucide-react";

const treatments = [
  {
    title: "Clareamento Dental",
    description: "Recupere o brilho natural do seu sorriso com tecnologia de ponta.",
    benefits: ["Resultados rápidos", "Seguro e indolor", "Efeito duradouro"],
    tag: "Mais Procurado",
    icon: <Sparkles className="text-premium-gold" />,
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Facetas em Resina",
    description: "Transformação estética completa com mínima intervenção.",
    benefits: ["Harmonia facial", "Resistência", "Naturalidade"],
    tag: "Resultado Premium",
    icon: <Zap className="text-premium-gold" />,
    image: "https://images.unsplash.com/photo-1597764690523-15bea4c581c9?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Implantes Dentários",
    description: "Recupere sua função mastigatória e autoestima com segurança.",
    benefits: ["Estabilidade total", "Saúde óssea", "Conforto"],
    tag: "Alta Tecnologia",
    icon: <ShieldCheck className="text-premium-gold" />,
    image: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Ortodontia Moderna",
    description: "Alinhamento perfeito com aparelhos discretos e eficientes.",
    benefits: ["Invisível", "Confortável", "Planejamento 3D"],
    tag: "Inovação",
    icon: <Sparkles className="text-premium-gold" />,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Harmonização Facial",
    description: "Equilíbrio e beleza para realçar seus melhores traços.",
    benefits: ["Sutileza", "Rejuvenescimento", "Personalizado"],
    tag: "Estética Avançada",
    icon: <Sparkles className="text-premium-gold" />,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Restauração Estética",
    description: "Recupere a forma e função dos seus dentes com perfeição.",
    benefits: ["Saúde bucal", "Durabilidade", "Estética natural"],
    tag: "Essencial",
    icon: <ShieldCheck className="text-premium-gold" />,
    image: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Treatments() {
  const whatsappNumber = "5511999999999";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação%20na%20Odontotest.`;

  return (
    <section id="treatments" className="py-24 bg-premium-offwhite">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.3em] text-premium-gold font-sans font-bold mb-4 block"
            >
              Nossos Serviços
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-premium-black"
            >
              Tratamentos de <span className="italic">alta performance</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-xs uppercase tracking-widest font-sans font-bold text-premium-black hover:text-premium-gold transition-colors"
            >
              Ver todos os tratamentos
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-premium-gold transition-colors">
                <ArrowUpRight size={18} />
              </div>
            </a>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={t.image}
                  alt={t.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-sans font-bold text-premium-gold">
                  {t.tag}
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-4">{t.icon}</div>
                <h3 className="text-2xl font-serif text-premium-black mb-4">{t.title}</h3>
                <p className="text-sm text-gray-500 font-sans font-light mb-6 leading-relaxed">
                  {t.description}
                </p>
                
                <ul className="space-y-2 mb-8">
                  {t.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-sans font-medium text-gray-400">
                      <div className="w-1 h-1 bg-premium-gold rounded-full" />
                      {b}
                    </li>
                  ))}
                </ul>
                
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-sans font-bold text-premium-black hover:text-premium-gold transition-colors"
                >
                  Agendar Avaliação
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

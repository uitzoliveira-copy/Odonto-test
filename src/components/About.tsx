import { motion } from "motion/react";
import { Award, Users, Shield, Zap } from "lucide-react";

export default function About() {
  const stats = [
    { icon: <Award size={24} />, label: "Excelência", text: "Atendimento personalizado" },
    { icon: <Zap size={24} />, label: "Tecnologia", text: "Equipamentos de ponta" },
    { icon: <Shield size={24} />, label: "Segurança", text: "Processos certificados" },
    { icon: <Users size={24} />, label: "Experiência", text: "Foco no paciente" },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2rem] md:rounded-[3rem] overflow-hidden aspect-square shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80"
                alt="Nossa Clínica"
                loading="lazy"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Decorative frames */}
            <div className="absolute -top-6 -left-6 w-full h-full border border-premium-gold/20 rounded-[3rem] -z-10" />
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-clinical-blue/20 rounded-[3rem] -z-10" />
            
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-8 left-12 glass p-8 rounded-3xl shadow-xl z-20 max-w-[240px]"
            >
              <p className="text-3xl font-serif text-premium-gold mb-1">15+</p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-gray-600">
                Anos de dedicação à saúde bucal
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-premium-gold font-sans font-semibold mb-6 block">
              Sobre a Odontotest
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-premium-black mb-8 leading-tight">
              Uma nova experiência em <span className="italic">odontologia moderna</span>
            </h2>
            
            <div className="space-y-6 mb-12">
              <p className="text-gray-600 font-sans font-light leading-relaxed">
                A Odontotest nasceu do desejo de oferecer mais do que apenas tratamentos dentários. Nosso foco é a experiência completa do paciente, unindo o que há de mais moderno em tecnologia com um atendimento verdadeiramente humanizado.
              </p>
              <p className="text-gray-600 font-sans font-light leading-relaxed">
                Acreditamos que cada sorriso é único e merece um planejamento personalizado, focado não apenas na estética, mas na saúde e funcionalidade a longo prazo.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="text-premium-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <h4 className="text-sm uppercase tracking-widest font-sans font-bold text-premium-black mb-1">
                    {stat.label}
                  </h4>
                  <p className="text-xs text-gray-400 font-sans tracking-wider">
                    {stat.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

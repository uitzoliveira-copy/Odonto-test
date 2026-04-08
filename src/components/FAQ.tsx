import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "O tratamento dói?",
    answer: "Trabalhamos com as técnicas mais modernas e anestesia computadorizada para garantir que seu tratamento seja o mais confortável e indolor possível."
  },
  {
    question: "Quanto tempo dura o resultado?",
    answer: "A durabilidade depende do tipo de tratamento e dos seus cuidados diários. Facetas e implantes podem durar décadas com a manutenção correta."
  },
  {
    question: "Posso parcelar o meu tratamento?",
    answer: "Sim! Oferecemos diversas formas de pagamento, incluindo parcelamento no cartão de crédito em até 12x e condições especiais no boleto bancário."
  },
  {
    question: "Como funciona a primeira avaliação?",
    answer: "Na primeira consulta, realizamos um check-up completo com câmeras intraorais e planejamento digital para que você entenda exatamente o que precisa ser feito."
  },
  {
    question: "Quanto tempo leva para ver o resultado?",
    answer: "Tratamentos como clareamento mostram resultados imediatos. Já transformações com facetas podem ser concluídas em apenas duas sessões."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-premium-offwhite">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-premium-gold font-sans font-semibold mb-4 block"
          >
            Dúvidas Frequentes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-premium-black"
          >
            Perguntas <span className="italic">comuns</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-serif text-premium-black">{faq.question}</span>
                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-premium-gold">
                  {activeIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-gray-500 font-sans font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

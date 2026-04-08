import { motion } from "motion/react";
import { CreditCard, Banknote, QrCode, Wallet } from "lucide-react";

export default function PaymentMethods() {
  const methods = [
    { icon: <QrCode size={32} />, label: "PIX", text: "Pagamento instantâneo" },
    { icon: <CreditCard size={32} />, label: "Cartão", text: "Até 12x sem juros" },
    { icon: <Wallet size={32} />, label: "Débito", text: "À vista com desconto" },
    { icon: <Banknote size={32} />, label: "Boleto", text: "Condições especiais" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-premium-gold font-sans font-semibold mb-4 block"
          >
            Facilidades
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-premium-black"
          >
            Formas de <span className="italic">pagamento</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {methods.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 rounded-[2.5rem] border border-gray-100 bg-premium-offwhite hover:bg-white hover:shadow-2xl transition-all duration-500 text-center"
            >
              <div className="text-premium-gold mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {m.icon}
              </div>
              <h4 className="text-sm uppercase tracking-widest font-sans font-bold text-premium-black mb-2">
                {m.label}
              </h4>
              <p className="text-[10px] text-gray-400 font-sans tracking-wider uppercase">
                {m.text}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-gray-400">
            Condições acessíveis para o seu tratamento
          </p>
        </div>
      </div>
    </section>
  );
}

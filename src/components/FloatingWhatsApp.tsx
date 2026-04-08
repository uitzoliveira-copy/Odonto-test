import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappNumber = "5511999999999";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação%20na%20Odontotest.`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        boxShadow: ["0px 0px 0px rgba(37, 211, 102, 0)", "0px 0px 20px rgba(37, 211, 102, 0.5)", "0px 0px 0px rgba(37, 211, 102, 0)"]
      }}
      transition={{
        boxShadow: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-white text-premium-black px-4 py-2 rounded-xl text-[10px] font-sans font-bold uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
        Fale conosco agora
      </span>
    </motion.a>
  );
}

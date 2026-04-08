import { motion } from "motion/react";
import { MapPin, Navigation } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-premium-gold font-sans font-semibold mb-6 block">
              Onde Estamos
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-premium-black mb-8 leading-tight">
              Visite nossa clínica no <span className="italic">coração de São Paulo</span>
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-premium-offwhite flex items-center justify-center text-premium-gold shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest font-sans font-bold text-premium-black mb-1">Endereço</h4>
                  <p className="text-gray-500 font-sans font-light leading-relaxed">
                    Av. Paulista, 1000 - Bela Vista<br />
                    São Paulo - SP, 01310-100
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-premium-offwhite flex items-center justify-center text-premium-gold shrink-0">
                  <Navigation size={24} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest font-sans font-bold text-premium-black mb-1">Como Chegar</h4>
                  <p className="text-gray-500 font-sans font-light leading-relaxed">
                    Próximo ao Metrô Trianon-Masp. Estacionamento conveniado no local para sua total comodidade.
                  </p>
                </div>
              </div>
            </div>

            <motion.a
              href="https://www.google.com/maps/dir//Av.+Paulista,+1000+-+Bela+Vista,+S%C3%A3o+Paulo+-+SP,+01310-100"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-premium-black text-white px-8 py-4 rounded-full font-sans text-xs uppercase tracking-widest font-bold hover:bg-premium-gold transition-all duration-300"
            >
              Abrir no Google Maps
              <Navigation size={16} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197503007447!2d-46.6523918!3d-23.5613497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1712528000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Odontotest"
              className="grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

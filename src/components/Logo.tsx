import { motion } from "motion/react";

export default function Logo({ className = "", goldOnly = false }: { className?: string, goldOnly?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex items-center justify-center w-10 h-10 bg-premium-gold/10 rounded-xl shrink-0">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-premium-gold"
        >
          <path d="M7 3C4.23858 3 2 5.23858 2 8C2 10.7614 4.23858 13 7 13C7.55228 13 8 13.4477 8 14V18C8 19.6569 9.34315 21 11 21C12.6569 21 14 19.6569 14 18V14C14 13.4477 14.4477 13 15 13C17.7614 13 20 10.7614 20 8C20 5.23858 17.7614 3 15 3C13.5 3 12.5 3.5 12 4.5C11.5 3.5 10.5 3 9 3H7Z" />
          <path d="M12 21L13 19M12 21L11 19" />
        </svg>
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 bg-premium-gold/20 rounded-xl blur-md -z-10"
        />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-xl font-serif tracking-widest ${goldOnly ? 'text-premium-gold' : 'text-premium-black'}`}>
          ODONTO<span className="text-premium-gold">TEST</span>
        </span>
        <span className="text-[8px] uppercase tracking-[0.4em] text-gray-400 mt-1">
          Odontologia Premium
        </span>
      </div>
    </div>
  );
}

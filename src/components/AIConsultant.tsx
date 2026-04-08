import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, X, Send, Bot, User, Minimize2, Maximize2 } from "lucide-react";
import { getAIResponse } from "../services/geminiService";

interface Message {
  role: "user" | "model";
  text: string;
}

export default function AIConsultant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", text: "Olá! ✨ Sou a OdontoAI, sua consultora virtual. Como posso ajudar com seu sorriso hoje?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    // Prepare history for Gemini
    const history = messages.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    const response = await getAIResponse(userMessage, history);
    
    setMessages(prev => [...prev, { role: "model", text: response || "Desculpe, não consegui processar sua mensagem. ✨" }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-[100] flex flex-col items-start">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? "80px" : "500px"
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-100 flex flex-col"
          >
            {/* Header */}
            <div className="bg-premium-black p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-premium-gold/20 rounded-full flex items-center justify-center">
                  <Sparkles size={16} className="text-premium-gold" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-serif font-medium">OdontoAI</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                >
                  {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-premium-offwhite/30 scrollbar-hide">
                  {messages.map((msg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: msg.role === "user" ? 10 : -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`flex gap-2 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1 ${
                          msg.role === "user" ? "bg-premium-gold text-white" : "bg-white border border-gray-100 text-premium-gold"
                        }`}>
                          {msg.role === "user" ? <User size={12} /> : <Bot size={12} />}
                        </div>
                        <div className={`p-3 rounded-2xl text-xs leading-relaxed ${
                          msg.role === "user" 
                            ? "bg-premium-gold text-white rounded-tr-none" 
                            : "bg-white text-premium-black shadow-sm border border-gray-50 rounded-tl-none"
                        }`}>
                          {msg.text}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-50 flex gap-1">
                        <span className="w-1.5 h-1.5 bg-premium-gold/40 rounded-full animate-bounce" />
                        <span className="w-1.5 h-1.5 bg-premium-gold/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 bg-premium-gold/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-gray-50">
                  <div className="relative flex items-center">
                    <textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyPress}
                      placeholder="Sua mensagem..."
                      rows={1}
                      className="w-full bg-premium-offwhite/50 border-none rounded-2xl py-3 pl-4 pr-12 text-xs focus:ring-1 focus:ring-premium-gold/30 resize-none font-sans"
                    />
                    <button
                      onClick={handleSend}
                      disabled={!input.trim() || isLoading}
                      className="absolute right-2 p-2 text-premium-gold hover:bg-premium-gold/10 rounded-xl transition-colors disabled:opacity-30"
                    >
                      <Send size={18} />
                    </button>
                  </div>
                  <p className="text-[9px] text-gray-400 text-center mt-3 uppercase tracking-widest">
                    Powered by Gemini AI
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 ${
          isOpen ? "bg-white text-premium-gold rotate-90" : "bg-premium-black text-white"
        }`}
      >
        {isOpen ? <X size={24} /> : <Sparkles size={24} className="text-premium-gold" />}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-premium-gold rounded-full flex items-center justify-center border-2 border-white"
          >
            <span className="text-[10px] font-bold text-white">1</span>
          </motion.div>
        )}
      </motion.button>
    </div>
  );
}

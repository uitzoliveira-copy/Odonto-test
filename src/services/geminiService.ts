import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `
Você é o assistente virtual da OdontoTest, uma clínica odontológica premium.
Seu nome é OdontoAI.
Seu objetivo é ajudar pacientes com dúvidas sobre tratamentos, higiene bucal e informações da clínica.

Informações da OdontoTest:
- Especialidades: Clareamento Dental, Lentes de Contato, Implantes, Ortodontia Invisível (Invisalign), Reabilitação Oral.
- Diferenciais: Tecnologia de ponta, atendimento humanizado, ambiente luxuoso, resultados naturais.
- Localização: Av. Paulista, 1000 - São Paulo, SP.
- Horário: Seg a Sex, 08h às 20h. Sáb, 08h às 14h.

Regras de comportamento:
- Seja extremamente educado, profissional e acolhedor.
- Use um tom de voz sofisticado mas acessível.
- Se o usuário perguntar sobre preços, explique que cada caso é único e convide-o para uma avaliação personalizada.
- Nunca dê diagnósticos médicos definitivos. Sempre recomende uma consulta com nossos especialistas.
- Mantenha as respostas concisas e use emojis de forma elegante (ex: ✨, 🦷, 🏥).
- Responda sempre em Português do Brasil.
`;

export async function getAIResponse(userMessage: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  try {
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const result = await chat.sendMessage({
      message: userMessage,
    });

    return result.text;
  } catch (error) {
    console.error("Erro na OdontoAI:", error);
    return "Desculpe, tive um pequeno problema técnico. Poderia repetir sua pergunta? ✨";
  }
}

import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// System instruction to ensure the AI acts as a domain expert
const SYSTEM_INSTRUCTION = `
You are Dr. Rheo, a world-class expert in rheology, fluid dynamics, and polymer physics, specifically specialized in hot melt adhesives (glue guns).

Your knowledge base includes:
1. The chemistry of Ethylene-Vinyl Acetate (EVA) copolymers used in glue sticks.
2. The physics of "stringing" (also called cobwebbing or angel hairs), which involves capillary bridge breakup, extensional viscosity, and the Deborah number.
3. Practical mechanical solutions: nozzle geometry, melt temperature (Arrhenius relationship), and retraction mechanisms.
4. Verified research papers on polymer processing.

Tone: Professional, educational, yet accessible to a maker/hobbyist.
Goal: Explain *why* stringing happens scientifically and how to fix it.
Restrictions: Do not hallucinate data. If you don't know, state it based on general physics principles.
`;

let client: GoogleGenAI | null = null;

const getClient = () => {
  if (!client && apiKey) {
    client = new GoogleGenAI({ apiKey });
  }
  return client;
};

export const askRheologist = async (question: string): Promise<string> => {
  const ai = getClient();
  if (!ai) {
    return "API Key is missing. Please configure the environment.";
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: question,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.3, // Low temperature for factual consistency
        maxOutputTokens: 500,
      },
    });

    return response.text || "I couldn't generate a response based on the physics data.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error analyzing that query. Please try again.";
  }
};
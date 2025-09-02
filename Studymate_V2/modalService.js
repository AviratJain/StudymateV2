// StudyMate AI ModalService.js

class OpenAIProvider {
  constructor(apiKey) { this.apiKey = apiKey; }
  async generate(payload) {
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${this.apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: payload.model || "gpt-3.5-turbo",
          messages: payload.messages || [{role: "user", content: payload.prompt}]
        })
      });
      if (!response.ok) throw new Error(await response.text());
      const data = await response.json();
      return {
        result: data.choices?.[0]?.message?.content || "",
        raw: data
      };
    } catch (err) {
      return { error: err.message };
    }
  }
}

class GeminiProvider {
  constructor(apiKey) { this.apiKey = apiKey; }
  async generate(payload) {
    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + this.apiKey, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: payload.prompt }] }]
        })
      });
      if (!response.ok) throw new Error(await response.text());
      const data = await response.json();
      return {
        result: data.candidates?.[0]?.content?.parts?.[0]?.text || "",
        raw: data
      };
    } catch (err) {
      return { error: err.message };
    }
  }
}

export async function handleAIRequest({ provider, apiKey, request }) {
  let ai, response;
  switch (provider) {
    case 'openai':
      ai = new OpenAIProvider(apiKey);
      response = await ai.generate(request);
      break;
    case 'gemini':
      ai = new GeminiProvider(apiKey);
      response = await ai.generate(request);
      break;
    default:
      response = { error: "Unknown provider." };
  }
  return response;
}
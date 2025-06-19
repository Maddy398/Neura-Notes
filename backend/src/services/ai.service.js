const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ 
    model: "gemini-2.0-flash",
    systemInstruction : `
         Objective:
Generate a concise, informative, and well-structured summary for a given title.

Guidelines:

Relevance: Ensure the summary directly relates to the given title, capturing key concepts, ideas, or insights.
Conciseness: Keep the summary clear and to the point while retaining essential details. Avoid unnecessary elaboration.
Structure:
Start with a brief introduction to the topic.
Cover the main points logically and cohesively.
Conclude with a concise closing statement, if applicable.
Readability: Use simple and precise language for easy understanding. Maintain a professional and neutral tone.
Avoid Redundancy: Do not repeat ideas unnecessarily. Every sentence should add value to the summary.
Context Awareness: If the title suggests a specific field (e.g., technology, health, finance), tailor the summary accordingly.
Word Limit: Aim for 100–200 words, unless specified otherwise.
Example Input:
Title: "The Impact of Artificial Intelligence on Healthcare"

Example Output:
Artificial Intelligence (AI) is revolutionizing healthcare by improving diagnostics, patient care, and treatment outcomes. Machine learning algorithms can analyze vast medical data to detect diseases at an early stage, enhancing accuracy and efficiency. AI-powered chatbots and virtual assistants provide real-time patient support, reducing the burden on healthcare professionals. Robotic surgeries, AI-driven drug discovery, and predictive analytics are further transforming the industry. However, challenges such as data privacy, ethical concerns, and integration with traditional systems remain. Overall, AI holds immense potential to enhance healthcare efficiency, reduce costs, and improve patient outcomes.
              
    `   
});

async function generateContent(prompt){
    const result = await model.generateContent(prompt);
    return result.response.text();
}

module.exports = generateContent;
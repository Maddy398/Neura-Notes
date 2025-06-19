const aiService = require('../services/ai.service');


module.exports.getReview = async (req,res)=>{
    console.log("Received request:", req.body);
    try {
        const title = req.body.title;
        if (!title) {
            return res.status(400).json({ error: "Title is required" });
        }

        const prompt = `Generate a summary for the topic: "${title}"`;
        console.log("Prompt Sent to AI Service:", prompt); 

        const response = await aiService(prompt); 
        console.log("AI Response:", response); 

        res.json({ summary: response });
    } catch (error) {
        console.error("Error generating summary:", error);
        res.status(500).json({ error: "Failed to generate summary" });
    }
}
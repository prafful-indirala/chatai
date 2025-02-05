const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Route to send prompts to Ollama
app.post('/chat', async (req, res) => {
    console.log('Received chat request:', req.body);

    if (!req.body.prompt) {
        console.error('No prompt provided in request body');
        return res.status(400).json({ error: 'No prompt provided' });
    }

    try {
        console.log('Sending request to Ollama:', {
            model: 'mistral',
            prompt: req.body.prompt
        });

        const response = await axios.post('http://localhost:11434/api/generate', {
            model: 'mistral',
            prompt: req.body.prompt
        });

        console.log('Received response from Ollama');
        res.json({ response: response.data.response });
    } catch (error) {
        console.error('Error in /chat route:', error.message);
        if (error.response) {
            console.error('Ollama API response:', error.response.data);
        }
        res.status(500).json({
            error: error.message,
            details: error.response?.data
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log('CORS enabled, accepting requests from all origins');
});
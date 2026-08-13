import axios from 'axios';

const API_URL = 'https://api.example.com/enhance'; // Replace with your actual API endpoint

export const fetchEnhancedPrompt = async (prompt, options) => {
    try {
        const response = await axios.post(API_URL, {
            prompt,
            options
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching enhanced prompt:', error);
        throw error;
    }
};
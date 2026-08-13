import type { NextApiRequest, NextApiResponse } from 'next';
import { enhancePrompt } from '../../services/promptService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { prompt, options } = req.body;

        try {
            const enhancedPrompt = await enhancePrompt(prompt, options);
            res.status(200).json({ enhancedPrompt });
        } catch (error) {
            res.status(500).json({ error: 'Failed to enhance prompt' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
import React, { useState } from 'react';
import PromptInput from '../components/PromptInput';
import PromptOutput from '../components/PromptOutput';
import EnhancementOptions from '../components/EnhancementOptions';
import Header from '../components/Header';
import { enhancePrompt } from '../services/promptService';

const HomePage = () => {
    const [prompt, setPrompt] = useState('');
    const [enhancedPrompt, setEnhancedPrompt] = useState('');
    const [options, setOptions] = useState({});

    const handlePromptChange = (newPrompt) => {
        setPrompt(newPrompt);
    };

    const handleOptionsChange = (newOptions) => {
        setOptions(newOptions);
    };

    const handleEnhancePrompt = async () => {
        const result = await enhancePrompt(prompt, options);
        setEnhancedPrompt(result);
    };

    return (
        <div>
            <Header />
            <PromptInput value={prompt} onChange={handlePromptChange} />
            <EnhancementOptions options={options} onChange={handleOptionsChange} />
            <button onClick={handleEnhancePrompt}>Enhance Prompt</button>
            <PromptOutput enhancedPrompt={enhancedPrompt} />
        </div>
    );
};

export default HomePage;
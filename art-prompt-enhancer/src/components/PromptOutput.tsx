import React from 'react';

interface PromptOutputProps {
    enhancedPrompt: string;
}

const PromptOutput: React.FC<PromptOutputProps> = ({ enhancedPrompt }) => {
    return (
        <div className="prompt-output">
            <h2>Enhanced Art Prompt</h2>
            <p>{enhancedPrompt}</p>
        </div>
    );
};

export default PromptOutput;
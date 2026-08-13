import React, { useState } from 'react';

const PromptInput: React.FC<{ onChange: (value: string) => void }> = ({ onChange }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
        onChange(value);
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter your art prompt"
            />
        </div>
    );
};

export default PromptInput;
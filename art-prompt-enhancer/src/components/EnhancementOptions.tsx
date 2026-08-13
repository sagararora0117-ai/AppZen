import React, { useState } from 'react';

const EnhancementOptions = ({ onOptionsChange }) => {
    const [options, setOptions] = useState({
        style: '',
        colorPalette: '',
        complexity: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedOptions = { ...options, [name]: value };
        setOptions(updatedOptions);
        onOptionsChange(updatedOptions);
    };

    return (
        <div className="enhancement-options">
            <h3>Enhancement Options</h3>
            <label>
                Style:
                <select name="style" value={options.style} onChange={handleChange}>
                    <option value="">Select Style</option>
                    <option value="realistic">Realistic</option>
                    <option value="abstract">Abstract</option>
                    <option value="impressionist">Impressionist</option>
                </select>
            </label>
            <label>
                Color Palette:
                <select name="colorPalette" value={options.colorPalette} onChange={handleChange}>
                    <option value="">Select Color Palette</option>
                    <option value="vibrant">Vibrant</option>
                    <option value="pastel">Pastel</option>
                    <option value="monochrome">Monochrome</option>
                </select>
            </label>
            <label>
                Complexity:
                <select name="complexity" value={options.complexity} onChange={handleChange}>
                    <option value="">Select Complexity</option>
                    <option value="simple">Simple</option>
                    <option value="detailed">Detailed</option>
                </select>
            </label>
        </div>
    );
};

export default EnhancementOptions;
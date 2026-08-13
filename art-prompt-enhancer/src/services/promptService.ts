export const enhancePrompt = (prompt: string, options: any): string => {
    // Basic enhancement logic (this can be expanded)
    let enhancedPrompt = prompt;

    if (options.style) {
        enhancedPrompt += ` in the style of ${options.style}`;
    }

    if (options.theme) {
        enhancedPrompt += ` with a theme of ${options.theme}`;
    }

    if (options.elements) {
        enhancedPrompt += ` including ${options.elements.join(', ')}`;
    }

    return enhancedPrompt;
};
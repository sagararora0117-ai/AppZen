export const formatPrompt = (prompt: string): string => {
    return prompt.trim().replace(/\s+/g, ' ');
};

export const validateInput = (input: string): boolean => {
    return input.length > 0 && input.length <= 500;
};
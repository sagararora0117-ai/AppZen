export interface Prompt {
    id: string;
    text: string;
}

export interface EnhancementOptions {
    style: string;
    colorPalette: string;
    complexity: number;
}

export interface ApiResponse {
    enhancedPrompt: string;
    success: boolean;
    error?: string;
}
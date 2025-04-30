
/**
 * API Key Manager for JARVIS
 * 
 * This utility helps manage API keys across the application.
 */

// Define valid API service types
export type ApiServiceType = 'openai' | 'elevenlabs';

/**
 * Check if an API key exists for a service
 */
export const apiKeyExists = async (service: ApiServiceType): Promise<boolean> => {
  const key = localStorage.getItem(`${service.toLowerCase()}_api_key`);
  return !!key;
};

/**
 * Set an API key for a service
 */
export const setApiKey = async (service: ApiServiceType, value: string): Promise<void> => {
  localStorage.setItem(`${service.toLowerCase()}_api_key`, value);
};

/**
 * Get an API key for a service
 */
export const getApiKey = async (service: ApiServiceType): Promise<string | null> => {
  return localStorage.getItem(`${service.toLowerCase()}_api_key`);
};

/**
 * Remove an API key for a service
 */
export const removeApiKey = async (service: ApiServiceType): Promise<void> => {
  localStorage.removeItem(`${service.toLowerCase()}_api_key`);
};

/**
 * Get voice ID for the assistant
 */
export function getVoiceId(): string {
  return 'iP95p4xoKVk53GoZ742B'; // Chris voice from ElevenLabs
}

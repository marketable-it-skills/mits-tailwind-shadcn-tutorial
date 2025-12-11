// Map language codes to flag emojis
const flagEmojis: Record<string, string> = {
  EN: "🇬🇧", // English - Great Britain flag
  HU: "🇭🇺", // Hungarian - Hungary flag
  FI: "🇫🇮", // Finnish - Finland flag
  DE: "🇩🇪", // German - Germany flag
  FR: "🇫🇷", // French - France flag
  ES: "🇪🇸", // Spanish - Spain flag
  IT: "🇮🇹", // Italian - Italy flag
  PT: "🇵🇹", // Portuguese - Portugal flag
  NL: "🇳🇱", // Dutch - Netherlands flag
  SE: "🇸🇪", // Swedish - Sweden flag
  NO: "🇳🇴", // Norwegian - Norway flag
  DK: "🇩🇰", // Danish - Denmark flag
  PL: "🇵🇱", // Polish - Poland flag
  CZ: "🇨🇿", // Czech - Czech Republic flag
  // Add more as needed
};

/**
 * Gets the flag emoji for a language code
 * Returns empty string if not found
 */
export function getFlagEmoji(languageCode: string): string {
  return flagEmojis[languageCode.toUpperCase()] || "";
}

/**
 * Formats a language code with its flag emoji
 * Example: "EN" -> "🇬🇧 EN"
 */
export function formatLanguage(languageCode: string): string {
  const flag = getFlagEmoji(languageCode);
  return flag
    ? `${flag} ${languageCode.toUpperCase()}`
    : languageCode.toUpperCase();
}



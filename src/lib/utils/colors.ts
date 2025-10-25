// Reusable color constants for Zertov
// Brand Colors
export const brandColors = {
  zaffre: "#0006AA", // Deep blue - primary brand color
  cetaceanBlue: "#000043", // Extremely dark blue - secondary
  chineseBlack: "#111111", // Soft black - accent/text
};

export const colors = {
  // Brand colors
  brand: {
    primary: brandColors.zaffre,
    secondary: brandColors.cetaceanBlue,
    accent: brandColors.chineseBlack,
  },

  // Background colors
  background: {
    primary: "bg-white dark:bg-black",
    secondary: "bg-white dark:bg-black",
    muted: "bg-white dark:bg-black",
    card: "bg-white dark:bg-black",
    cardTransparent: "bg-white/80 dark:bg-black/80",
    section: "bg-white dark:bg-black",
  },

  // Text colors
  text: {
    primary: "text-[#111111] dark:text-white",
    secondary: "text-[#111111]/70 dark:text-gray-300",
    muted: "text-[#111111]/50 dark:text-gray-400",
    accent: "text-[#0006AA] dark:text-[#0006AA]",
  },

  // Gradient colors
  gradients: {
    primary: "bg-gradient-to-r from-[#0006AA] via-[#000043] to-[#111111]",
    secondary: "bg-gradient-to-l from-[#0006AA] via-[#000043] to-[#111111]",
    vertical: "bg-gradient-to-b from-[#0006AA] via-[#000043] to-[#111111]",
    light: "bg-gradient-to-r from-[#0006AA]/20 via-[#000043]/20 to-[#111111]/20",
    text: "bg-gradient-to-r from-[#0006AA] via-[#000043] to-[#111111] bg-clip-text text-transparent",
  },

  // Border colors
  border: {
    primary: "border-[#0006AA]/20 dark:border-gray-700",
    accent: "border-[#0006AA]/40 dark:border-[#0006AA]/40",
    focus: "border-[#0006AA] dark:border-[#0006AA]",
  },

  // Status colors
  status: {
    success: "from-green-400 to-emerald-500",
    info: "from-blue-400 to-cyan-500",
    warning: "from-yellow-400 to-orange-500",
    error: "from-red-500 to-yellow-500",
  },
};

// Utility function to combine colors
export const combineColors = (...colorClasses: string[]) => {
  return colorClasses.join(" ");
};

// Helper function for gradient text classes
export const getGradientText = (variant: 'primary' | 'secondary' | 'vertical' = 'primary') => {
  const gradientMap = {
    primary: colors.gradients.text,
    secondary: `bg-gradient-to-l from-[#0006AA] via-[#000043] to-[#111111] bg-clip-text text-transparent`,
    vertical: `bg-gradient-to-b from-[#0006AA] via-[#000043] to-[#111111] bg-clip-text text-transparent`,
  };
  return gradientMap[variant];
};

// Predefined combinations
export const colorCombinations = {
  heroSection: combineColors(colors.background.primary, colors.text.primary),
  card: combineColors(
    colors.background.card,
    colors.border.primary,
    colors.text.primary
  ),
  contactForm: combineColors(
    colors.background.cardTransparent,
    colors.border.focus,
    colors.text.primary
  ),
  brandGradient: combineColors(colors.gradients.primary),
  gradientText: combineColors(colors.gradients.text),
};

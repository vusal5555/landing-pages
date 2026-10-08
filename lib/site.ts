export const site = {
  name: "Novra AI",
  url: "https://novraai.dev",
  email: "help@novraai.dev",
  location: "Georgia",
  bookingUrl: "https://calendly.com/novruzovvusal364/new-meeting",
} as const;

export const primaryNavigation = [
  { label: "Product", href: "/product" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
] as const;

export const legalNavigation = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Refund Policy", href: "/refund-policy" },
] as const;

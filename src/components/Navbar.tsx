// src/config/navbar.ts

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Analytics", href: "/analytics" },
  { label: "Features", href: "/features" },
  { label: "FAQ", href: "/faq" },
];

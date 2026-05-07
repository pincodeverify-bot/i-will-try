import { useState, useEffect } from 'react';

const defaultNavItems = [
  { id: "1", label: "Home", href: "/", active: true },
  {
    id: "2",
    label: "Standard Filters",
    href: "/products",
    hasDropdown: true,
    dropdownItems: [
      "Sintered Filter",
      "Sintered Bronze Filter",
      "Sintered Stainless Steel Filter",
      "Sintered Plastic Filter",
      "Sintered Sparger",
      "Sintered Filter Cartridge",
      "Sintered Nickel Filter",
      "Sintered Titanium Filter",
      "Sintered Mesh Filter",
      "Pneumatic Silencer"
    ]
  },
  { id: "3", label: "Shapes", href: "#", hasDropdown: true, dropdownItems: [] },
  { id: "4", label: "Materials", href: "#", hasDropdown: true, dropdownItems: [] },
  { id: "5", label: "About Us", href: "/about-us" },
  { id: "6", label: "Contact Us", href: "/contact-us" }
];

export function useNavItems() {
  const [navItems, setNavItems] = useState(() => {
    const saved = localStorage.getItem('navItems');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Ensure we use the latest default items if saved items are empty or corrupted
        return parsed.length > 0 ? parsed : defaultNavItems;
      } catch (e) {
        return defaultNavItems;
      }
    }
    return defaultNavItems;
  });

  useEffect(() => {
    localStorage.setItem('navItems', JSON.stringify(navItems));
  }, [navItems]);

  return [navItems, setNavItems];
}
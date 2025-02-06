'use client';
import { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [isMounted, setIsMounted] = useState(false);

  // Apply theme changes
  const applyTheme = (theme) => {
    document.body.dataset.theme = theme;
    document.body.style.colorScheme = theme;
    document.body.classList.add(theme);
    document.body.classList.remove(theme === 'light' ? 'dark' : 'light');
    document.documentElement.style.colorScheme = theme;
    document.documentElement.dataset.theme = theme;
  };

  // Update theme after component mounts
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    applyTheme(storedTheme);
    setIsMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  // Only render after mounting to prevent hydration mismatch
  if (!isMounted) {
    return null; // Or a loading spinner if you prefer
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}

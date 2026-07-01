import { useEffect } from "react";

// The site is locked to light mode — no theme switching.
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("dark");
    root.classList.add("light");
  }, []);

  return <>{children}</>;
}

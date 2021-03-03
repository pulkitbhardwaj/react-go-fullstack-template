import { useEffect, useState } from "react";

const matchDark = "(prefer-color-scheme: dark)";

export function useDarkMode(): boolean {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window?.matchMedia) {
      const media = window.matchMedia(matchDark);

      setDarkMode(media.matches);

      const listener = ({ matches }: MediaQueryListEvent) =>
        setDarkMode(matches);

      media.addEventListener("change", listener);

      return () => media.removeEventListener("change", listener);
    }
  }, []);

  return darkMode;
}

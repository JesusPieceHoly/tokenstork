// components/ThemeSwitcher.tsx
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@tremor/react";

const ThemeSwitcher: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    console.log(`Current theme: ${theme}`);
  }, [theme]);

  if (!mounted) return null;

  return (
    <div className="flex gap-4">
      <Button size="sm" variant="primary" onClick={() => { setTheme("light"); console.log("Switched to light theme"); }}>
        Light
      </Button>
      <Button size="sm" variant="primary" onClick={() => { setTheme("dark"); console.log("Switched to dark theme"); }}>
        Dark
      </Button>
      <Button size="sm" variant="primary" onClick={() => { setTheme("modern"); console.log("Switched to modern theme"); }}>
        Modern
      </Button>
    </div>
  );
};

export default ThemeSwitcher;

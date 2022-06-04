import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      <button
        className="bg-black text-white dark:bg-white dark:text-black py-2 px-4 rounded-md hover:opacity-70 font-bold"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        Change Theme: {theme}
      </button>
    </div>
  );
};

export default ThemeSwitch;

import './Theme.css';

// Fontawesome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faN } from '@fortawesome/free-solid-svg-icons';

// UseEffect & UseState import
import { useState, useEffect } from 'react';

// Use Local Storage For Theme
const getLocalStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }

  return theme;
};

export default function Theme() {
  const [Theme, setTheme] = useState(getLocalStorageTheme());

  const toggleTheme = () => {
    Theme === 'light-theme' ? setTheme('dark-theme') : setTheme('light-theme');
  };

  useEffect(() => {
    document.documentElement.className = Theme;
    localStorage.setItem('theme', Theme);
  }, [Theme]);

  return (
    <span className="Bg-toggler" onClick={toggleTheme}>
      <FontAwesomeIcon icon={faMoon} />
    </span>
  );
}

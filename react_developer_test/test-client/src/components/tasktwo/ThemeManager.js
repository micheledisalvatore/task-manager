import React, { useEffect, useState } from 'react';

import './ThemeManager.scss';

const ThemeManager = () => {
  const [isDarkTheme, enableDarkTheme] = useState(false);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkTheme]);

  const onThemeChange = (e) => {
    const { checked } = e.target;

    enableDarkTheme(checked);
  };

  return (
    <label
      htmlFor="theme"
      className="ThemeManager"
    >
      Dark mode
      <input
        id="theme"
        type="checkbox"
        onChange={onThemeChange}
      />
    </label>
  );
};

export default ThemeManager;

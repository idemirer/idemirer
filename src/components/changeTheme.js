import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useDarkMode from 'use-dark-mode';

export default function ChangeTheme() {
  const { value: theme, toggle: toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const root = document.documentElement;
    theme
      ? root.style.setProperty('--background', 'var(--lightBackgroundColor)') &
        root.style.setProperty('--text', 'var(--lightTextColor)') &
        root.style.setProperty('--link', 'var(--lightLinkColor)') &
        root.style.setProperty('--hover', 'var(--lightHoverColor)') &
        root.style.setProperty('--shadow', 'var(--lightShadow)') &
        root.style.setProperty('--lightText', 'var(--lightLText)')
      : root.style.setProperty('--background', 'var(--darkBackgroundColor)') &
        root.style.setProperty('--text', 'var(--darkTextColor)') &
        root.style.setProperty('--link', 'var(--darkLinkColor)') &
        root.style.setProperty('--hover', 'var(--darkHoverColor)') &
        root.style.setProperty('--shadow', 'var(--darkShadow)') &
        root.style.setProperty('--lightText', 'var(--lightDText)');
  });

  return (
    <Link href='#'>
      <a onClick={toggleDarkMode}>
        <i className='fas fa-moon'></i>
      </a>
    </Link>
  );
}

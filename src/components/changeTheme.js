import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ChangeTheme() {
  const [theme, setTheme] = useState();

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

  const onClick = () => {
    setTheme(!theme);
  };
  return (
    <Link href=''>
      <a onClick={onClick}>{theme ? <span>&#127767;</span> : <span>&#127765;</span>}</a>
    </Link>
  );
}

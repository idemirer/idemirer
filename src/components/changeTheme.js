import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ChangeTheme() {
  return (
    <Link href=''>
      <a onClick={onClick}>{theme ? <span>&#127767;</span> : <span>&#127765;</span>}</a>
    </Link>
  );
}

'use client'

import { useEffect, useState } from 'react';

const useBlink = (text: string) => {
    const [typedText, setTypedText] = useState('');
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTypedText(text.slice(0, typedText.length+1))
    }, 250);

    return () => clearTimeout(timeout);
  }, [typedText.length, text]);

  return typedText;
}

export default useBlink;
import { useState, useEffect, useRef } from 'react';

interface UseTypedTextOptions {
  typeSpeed?: number;
  deleteSpeed?: number;
  delayAfterType?: number;
  delayAfterDelete?: number;
}

export function useTypedText(
  textArray: string[],
  typeSpeed: number = 100,
  delayAfterType: number = 2000,
  deleteSpeed: number = 50,
  delayAfterDelete: number = 500
) {
  const [typedText, setTypedText] = useState('');
  const [cursor, setCursor] = useState(true);
  const textArrayIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);
  const isWaiting = useRef(false);

  useEffect(() => {
    const typeCharacter = () => {
      const currentText = textArray[textArrayIndex.current];
      
      if (isWaiting.current) {
        isWaiting.current = false;
        if (isDeleting.current) {
          isDeleting.current = false;
          textArrayIndex.current = (textArrayIndex.current + 1) % textArray.length;
        } else {
          isDeleting.current = true;
        }
        return;
      }

      if (isDeleting.current) {
        setTypedText(currentText.substring(0, charIndex.current - 1));
        charIndex.current -= 1;
        
        if (charIndex.current <= 0) {
          isWaiting.current = true;
          setTimeout(typeCharacter, delayAfterDelete);
          return;
        }
      } else {
        setTypedText(currentText.substring(0, charIndex.current + 1));
        charIndex.current += 1;
        
        if (charIndex.current >= currentText.length) {
          isWaiting.current = true;
          setTimeout(typeCharacter, delayAfterType);
          return;
        }
      }

      setTimeout(typeCharacter, isDeleting.current ? deleteSpeed : typeSpeed);
    };

    const intervalId = setTimeout(typeCharacter, 500); // Initial delay
    
    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setCursor(prev => !prev);
    }, 400);

    return () => {
      clearTimeout(intervalId);
      clearInterval(cursorInterval);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { typedText, cursor };
}

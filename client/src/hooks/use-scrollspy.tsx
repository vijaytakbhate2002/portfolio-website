import { useState, useEffect } from 'react';

interface UseScrollSpyOptions {
  offset?: number;
}

export function useScrollSpy(
  ids: string[],
  options: UseScrollSpyOptions = {}
): string | null {
  const { offset = 0 } = options;
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      // Get all sections
      const sections = ids.map(id => {
        const element = document.getElementById(id);
        if (!element) return { id, top: 0, bottom: 0 };
        
        const rect = element.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        return {
          id,
          top,
          bottom: top + rect.height
        };
      });
      
      // Find the section that is currently viewed
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (scrollPosition >= section.top - 100) {
          setActiveId(section.id);
          return;
        }
      }
      
      // If no section is found, set the first section as active
      if (sections.length > 0 && scrollPosition < sections[0].top) {
        setActiveId(sections[0].id);
      }
    };

    handleScroll(); // Call once on mount
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ids, offset]);

  return activeId;
}

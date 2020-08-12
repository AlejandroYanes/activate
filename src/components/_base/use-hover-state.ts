import { useEffect, useState } from 'react';

export function useHoverState(ref) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const component = ref.current;
      const activateHover = () => setIsHovered(true);
      const deactivateHover = () => setIsHovered(false);

      component.addEventListener('mouseenter', activateHover);
      component.addEventListener('mouseleave', deactivateHover);

      return () => {
        component.removeEventListener('mouseenter', activateHover);
        component.removeEventListener('mouseleave', deactivateHover);
      };
    }
    return undefined;
  }, [ref]);

  return isHovered;
}

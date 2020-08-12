import { useEffect, useState } from 'react';

export function useHoverState(ref) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (ref && ref.current) {
      const activateHover = () => setIsHovered(true);
      const deactivateHover = () => setIsHovered(false);

      ref.current.addEventListener('mouseenter', activateHover);
      ref.current.addEventListener('mouseleave', deactivateHover);

      return () => {
        ref.current.removeEventListener('mouseenter', activateHover);
        ref.current.removeEventListener('mouseleave', deactivateHover);
      };
    }
    return undefined;
  }, [ref]);

  return isHovered;
}

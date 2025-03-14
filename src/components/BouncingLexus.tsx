import { useEffect, useRef } from 'react';

export const BouncingLexus: React.FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const animationRef = useRef<number>();
  const positionRef = useRef({ x: 40, y: 50 });
  const velocityRef = useRef({ x: 2, y: 3 });

  useEffect(() => {
    const animate = () => {
      if (!imgRef.current) return;

      const img = imgRef.current;
      const rect = img.getBoundingClientRect();
      const maxX = window.innerWidth - rect.width;
      const maxY = window.innerHeight - rect.height;

      // Update position
      positionRef.current.x += velocityRef.current.x;
      positionRef.current.y += velocityRef.current.y;

      // Bounce off edges
      if (positionRef.current.x <= 0 || positionRef.current.x >= maxX) {
        velocityRef.current.x *= -1;
      }
      if (positionRef.current.y <= 0 || positionRef.current.y >= maxY) {
        velocityRef.current.y *= -1;
      }

      // Apply position
      img.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`;

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src="/lexus.png"
      alt="Bouncing Lexus"
      className="fixed w-[80px] h-[80px] object-contain z-50"
      style={{ top: 0, left: 0 }}
    />
  );
};

import React, { useEffect, useRef } from 'react';

const RetroGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initial setup
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Grid properties
    const gridSize = 40;
    const perspectiveDepth = 10;
    const horizonY = canvas.height * 0.5;
    let animationFrame: number;
    let offset = 0;

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#000');
      gradient.addColorStop(0.5, '#120338');
      gradient.addColorStop(1, '#290066');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw horizontal grid lines
      for (let i = 0; i <= perspectiveDepth; i++) {
        const y = horizonY + (i * gridSize) + (offset % gridSize);
        const alpha = 1 - (i / perspectiveDepth);
        
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.strokeStyle = `rgba(255, 0, 255, ${alpha * 0.5})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      
      // Draw vertical grid lines
      const verticalLines = Math.ceil(canvas.width / gridSize) + 1;
      for (let i = 0; i < verticalLines; i++) {
        const x = (i * gridSize) - (offset % gridSize);
        
        ctx.beginPath();
        ctx.moveTo(x, horizonY);
        ctx.lineTo(x, canvas.height);
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.5)';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      
      // Draw sun
      const sunRadius = canvas.width * 0.1;
      const sunX = canvas.width * 0.5;
      const sunY = horizonY - sunRadius * 0.5;
      
      const sunGradient = ctx.createRadialGradient(
        sunX, sunY, 0,
        sunX, sunY, sunRadius
      );
      sunGradient.addColorStop(0, 'rgba(255, 80, 150, 1)');
      sunGradient.addColorStop(0.7, 'rgba(255, 0, 128, 0.8)');
      sunGradient.addColorStop(1, 'rgba(255, 0, 128, 0)');
      
      ctx.beginPath();
      ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2);
      ctx.fillStyle = sunGradient;
      ctx.fill();
      
      // Update offset for animation
      offset += 0.5;
      
      // Continue animation
      animationFrame = requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-40"
    />
  );
};

export default RetroGrid;

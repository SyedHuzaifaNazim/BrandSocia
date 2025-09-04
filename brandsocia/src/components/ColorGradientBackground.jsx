// components/ColorGradientBackground.jsx
'use client';

import { useEffect, useRef } from 'react';

export default function ColorGradientBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const colors = [
      '#e58435', '#f07025', '#c63a21', '#e58932', 
      '#e68035', '#e3a23c', '#af2c1d', '#fdfdfd', 
      '#71c0eb', '#103255', '#000000'
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      
      // Add color stops with smooth distribution
      colors.forEach((color, index) => {
        gradient.addColorStop(index / (colors.length - 1), color);
      });
      
      // Fill with gradient
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add subtle noise texture
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        // Add subtle noise
        const noise = Math.random() * 10;
        data[i] = Math.min(255, data[i] + noise);     // R
        data[i + 1] = Math.min(255, data[i + 1] + noise); // G
        data[i + 2] = Math.min(255, data[i + 2] + noise); // B
      }
      
      ctx.putImageData(imageData, 0, 0);
    };

    // Initial resize
    resizeCanvas();

    // Handle window resize
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 opacity-20"
      style={{ transition: 'opacity 0.5s ease' }}
    />
  );
}
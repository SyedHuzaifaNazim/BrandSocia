// components/AnimatedGradientBackground.jsx
'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedGradientBackground() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const colors = [
      '#e58435', '#f07025', '#c63a21', '#e58932', 
      '#e68035', '#e3a23c', '#af2c1d', '#fdfdfd', 
      '#71c0eb', '#103255', '#000000'
    ];

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Create particles
      particlesRef.current = [];
      const numberOfParticles = Math.min(50, Math.floor((canvas.width * canvas.height) / 15000));
      
      for (let i = 0; i < numberOfParticles; i++) {
        particlesRef.current.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, colors[0]);
      gradient.addColorStop(0.5, colors[Math.floor(colors.length / 2)]);
      gradient.addColorStop(1, colors[colors.length - 1]);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particlesRef.current.length; i++) {
        particlesRef.current[i].update();
        particlesRef.current[i].draw();
      }
      
      // Connect particles with lines
      connectParticles();
      
      animationRef.current = requestAnimationFrame(animate);
    };

    const connectParticles = () => {
      const opacity = 0.2;
      for (let a = 0; a < particlesRef.current.length; a++) {
        for (let b = a; b < particlesRef.current.length; b++) {
          const dx = particlesRef.current[a].x - particlesRef.current[b].x;
          const dy = particlesRef.current[a].y - particlesRef.current[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesRef.current[a].x, particlesRef.current[a].y);
            ctx.lineTo(particlesRef.current[b].x, particlesRef.current[b].y);
            ctx.stroke();
          }
        }
      }
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 opacity-15"
      style={{ transition: 'opacity 0.5s ease' }}
    />
  );
}
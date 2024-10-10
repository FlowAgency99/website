import React, { useEffect } from 'react';

const ParticlesBackground = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 60, // Moins de particules pour un effet plus élégant
            density: { enable: true, value_area: 1000 },
          },
          color: {
            value: ['#1f3b73', '#ffffff', '#00eaff'], // Bleu roi, blanc et bleu néon pour correspondre à l'image de marque
          },
          shape: {
            type: 'circle', // Cercles uniquement pour un effet propre
            stroke: { width: 0, color: '#000000' },
          },
          opacity: {
            value: 0.6, // Opacité moyenne pour que les particules ne soient pas trop dominantes
            random: true,
          },
          size: {
            value: 4, // Taille des particules légèrement plus grande
            random: true,
          },
          line_linked: {
            enable: true,
            distance: 200, // Les lignes sont plus longues et fluides
            color: '#ffffff', // Lignes blanches pour un contraste épuré
            opacity: 0.2, // Lignes plus subtiles
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5, // Mouvement plus lent et fluide pour une ambiance sereine
            direction: 'none', // Mouvement aléatoire pour un effet naturel
            random: true,
            straight: false,
            out_mode: 'out', // Les particules sortent de l'écran et réapparaissent
            bounce: false,
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'grab' }, // Les particules sont attirées par le curseur au survol
            onclick: { enable: true, mode: 'push' }, // Plus de particules apparaissent au clic
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: { opacity: 0.35 }, // Lignes plus visibles au survol
            },
          },
        },
        retina_detect: true,
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="particles-js" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>;
};

export default ParticlesBackground;

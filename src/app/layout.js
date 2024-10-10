"use client";  // Indique que ce composant est un Client Component

import './globals.css';  // Import des styles globaux
import { useState, useEffect } from 'react';  // Import de useState et useEffect pour gérer l'état
import FlowLogo from './components/icons/FlowLogo';  // Import du logo pour la navbar
import FlowLogoFooter from './components/icons/FlowLogoFooter';  // Import du logo pour le footer
import Link from 'next/link';  // Utilise Link de Next.js pour une navigation fluide
import Head from 'next/head';

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);  // Gestion de l'état du menu hamburger

  // Gestion de la flèche pour remonter en haut
  useEffect(() => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    const handleScroll = () => {
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');  // Montre la flèche
      } else {
        scrollToTopBtn.classList.remove('show');  // Cache la flèche
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',  // Défilement fluide
    });
  };

  return (
    <html lang="fr">
    <Head>
      <title>Flow | Solutions Digitales</title> {/* Titre global */}
      <meta name="description" content="Flow, l'agence digitale pour des solutions web performantes et innovantes." />
      <link rel="icon" href="/favicon.ico" /> {/* Favicon */}
    </Head>
      <body>
        {/* Navbar */}
        <header className="navbar">
        <div className="logo">
    <Link href="/">
        <FlowLogo />
    </Link>
  </div>

          <span className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰ {/* Icône du menu hamburger */}
          </span>
          <nav className={menuOpen ? 'active' : ''}>
  <ul>
    <li>
      <Link href="/#hero" onClick={() => setMenuOpen(false)}>Accueil</Link>
    </li>
    <li>
      <Link href="/#why-us" onClick={() => setMenuOpen(false)}>Pourquoi Nous</Link>
    </li>
    <li>
      <Link href="/#process" onClick={() => setMenuOpen(false)}>Processus</Link>
    </li>
    <li>
      <Link href="/#offers" onClick={() => setMenuOpen(false)}>Nos Offres</Link>
    </li>
    <li>
      <Link href="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
    </li>
  </ul>
</nav>


        </header>

        {/* Contenu de la page */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-container">
            {/* Navigation */}
            <div className="footer-section links">
              <h4>Liens Rapides</h4>
              <ul>
                <li><Link href="/#hero">Accueil</Link></li>
                <li><Link href="/#why-us">Pourquoi Flow</Link></li>
                <li><Link href="/#process">Processus</Link></li>
                <li><Link href="/#contact">Contact</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-section contact">
              <h4>Contact</h4>
              <p>✉ contact@flow-agency.digital</p>
              <p>☎ +33 7 59 67 57 00</p>
              <div className="socials">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>

            {/* Logo et Description */}
            <div className="footer-section about">
              <div className="logo">
                <FlowLogoFooter />
              </div>
              <p>
                Flow, votre partenaire digital pour des sites web performants et uniques. Spécialisée dans la création sur mesure, notre agence aide les entreprises à se démarquer en ligne.
              </p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p>© 2024 Flow. Tous droits réservés.</p>
          </div>
        </footer>

        {/* Mentions légales et autres liens */}
        <div className="footer-legal">
          <ul className="footer-legal-links">
            <li><Link href="/privacy-policy">Données personnelles</Link></li>
            <li><Link href="/legal-notice">Mentions légales</Link></li>
            <li><Link href="/terms-of-service">Conditions d&apos;utilisation</Link></li>
          </ul>
        </div>

        {/* Flèche pour remonter en haut */}
        <a onClick={scrollToTop} className="scroll-to-top" id="scrollToTopBtn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="24" height="24">
            <path d="M12 5V19M12 5L6 11M12 5L18 11" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </body>
    </html>
  );
}

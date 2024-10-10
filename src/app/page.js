// src/app/page.js
"use client";

import Head from 'next/head';
import './globals.css';  // Styles globaux déjà définis
import { useEffect, useState } from 'react'; 
import FlowLogo from './components/icons/FlowLogo';
import ReactLogo from './components/icons/ReactLogo'; 
import NextLogo from './components/icons/NextLogo';
import NodeJSLogo from './components/icons/NodeJSLogo';
import StrapiLogo from './components/icons/StrapiLogo';
import VercelLogo from './components/icons/VercelLogo';
import MongoDBLogo from './components/icons/MongoDBLogo';
import ParticlesBackground from './components/ParticlesBackground';
import Image from 'next/image';


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false); // Déclaration de useState en dehors de useEffect
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [consent, setConsent] = useState(false);
  
  // Fonction pour remonter en haut de la page
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Défilement fluide
  });
};

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

  // Nettoyage de l'événement de scroll pour éviter les fuites de mémoire
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });
    
     const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  // Défilement fluide
    });
  };

    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Nettoyage de l'observer
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setStatus('Envoi du message...');
  
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
  
    // Vérification du statut avant de parser la réponse JSON
    if (res.ok) {
      const result = await res.json();  // essaie d'extraire le JSON si la réponse est bonne
      if (res.status === 200) {
        setStatus('Message envoyé avec succès !');
      } else {
        setStatus('Erreur lors de l\'envoi du message.');
      }
    } else {
      setStatus('Erreur lors de l\'envoi du message.');  // Pas de contenu ou mauvais statut
    }
  };
  

  return (
    <>
      <Head>
      <title>Flow | Solutions Digitales</title> {/* Titre global */}
      <meta name="description" content="Flow, l'agence digitale pour des solutions web performantes et innovantes." />
      <link rel="icon" href="/favicon.ico" /> {/* Favicon */}
      </Head>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <ParticlesBackground />
        <div className="hero-content">
        <h1 className="hero-title">
   Boostez votre <span className="highlight">visibilité</span> en ligne, avec <span className="highlight handwriting-underline">Flow</span> !
</h1>

          <p className="hero-subtitle">
          Nous concevons des sites web sur mesure, rapides et adaptés à vos besoins, pour maximiser votre impact en ligne.
          </p>
          <a href="#contact" className="header-button hero-cta">Démarrez votre projet maintenant</a>
        </div>
      </section>

      {/* Pourquoi Nous Section */}
      <section id="why-us" className="why-us-section section fade-in-left">
        <h2 className="section-title">Pourquoi Flow ?</h2>
        <div className="why-us-grid">
          <div className="why-us-card">
            <h3>Projets alliant innovation et créativité</h3>
            <p>Nous repensons chaque projet pour y intégrer les dernières tendances et technologies, créant ainsi une expérience digitale unique et immersive.</p>
          </div>
          <div className="why-us-card">
            <h3>Processus agile et transparent</h3>
            <p>Vous êtes impliqué à chaque étape du projet, de la conception à la mise en ligne. Nous garantissons un suivi clair et des ajustements en temps réel.</p>
          </div>
          <div className="why-us-card">
            <h3>Expérience utilisateur optimale</h3>
            <p>Nous créons des interfaces intuitives pour que vos visiteurs trouvent facilement ce qu&apos;ils cherchent et interagissent efficacement avec votre contenu.</p>
          </div>
        </div>
      </section>
      
      

      {/* Technologies Section */}
      <section id="technologies" className="technologies-section">
        <h2 className="section-title">Nos Technologies</h2>
        <p className="section-description">
          Nous utilisons les technologies les plus performantes pour garantir des sites rapides, sécurisés et évolutifs.
        </p>
        <div className="tech-icons">
          <NextLogo />
          <NodeJSLogo />
          <StrapiLogo />
          <VercelLogo />
          <MongoDBLogo />
          <ReactLogo />
        </div>
      </section>
      
      

      {/* Processus Section */}
      <section id="process" className="process-section section fade-in-right">
        <h2 className="section-title">Notre Processus de Travail</h2>
        <div className="process-grid">
          <div className="process-step">
            <h3>1. Analyse approfondie</h3>
            <p>Nous comprenons vos besoins et analysons votre marché pour concevoir une solution sur mesure.</p>
          </div>
          <div className="process-step">
            <h3>2. Design UX/UI de pointe</h3>
            <p>Nos designers créent des interfaces intuitives et attrayantes, pensées pour maximiser l’expérience utilisateur.</p>
          </div>
          <div className="process-step">
            <h3>3. Développement et optimisation</h3>
            <p>Nous développons votre site avec les meilleures pratiques, assurant sa rapidité, sécurité et scalabilité.</p>
          </div>
          <div className="process-step">
            <h3>4. Lancement et suivi</h3>
            <p>Nous lançons votre site en ligne et continuons à le surveiller pour maximiser son impact.</p>
          </div>
        </div>
      </section>
      
      {/* Services créatifs Section */}
<section id="creative-services" className="creative-services-section section">
  <div className="creative-content">
    <div className="creative-item creative-item-left">
      <h3>Création de logos et visuels</h3>
      <p>Nous concevons des logos et visuels uniques qui représentent l&apos;identité de votre marque, tout en créant des expériences graphiques qui marquent.</p>
    </div>

    <div className="creative-item creative-item-right">
      <h3>Sites flexibles et indépendants</h3>
      <p>Chez Flow, nous privilégions des solutions sur mesure plutôt que des CMS comme WordPress.. Nos sites sont développés sur mesure, garantissant plus de flexibilité, de sécurité et d&apos;indépendance.</p>
    </div>

    <div className="creative-item creative-item-left">
      <h3>Optimisation SEO & Performance</h3>
      <p>Votre succès en ligne passe aussi par le SEO. Nos sites sont optimisés pour vous offrir une visibilité maximale et une performance inégalée.</p>
    </div>

    <div className="creative-item creative-item-right">
      <h3>Création de contenus interactifs</h3>
      <p>Textes, images, animations, nous maîtrisons tous les aspects de la création de contenus interactifs pour maximiser l&apos;engagement des visiteurs.</p>
    </div>
  </div>
</section>

<section id="modern-web-visual" class="modern-web-visual-section">
  <div class="modern-web-overlay"></div>

  <div class="container">
    <div class="text-content">
      {/* Texte principal */}
      <h2 class="main-title">Votre Site, Votre Identité</h2>
      <p class="main-subtitle">
        En 2024, un site web sur mesure est bien plus qu&apos;une présence en ligne. C&apos;est une extension de votre marque. Nous vous accompagnons pour créer des sites performants, modernes et 100% adaptés à vos besoins.
      </p>
      <a href="#contact" class="cta-button">Contactez-nous ➔</a>
    </div>

    {/* Images qui se chevauchent */}
    <div className="visual-wrapper">
    <Image 
        src="/icons/website_illustration.svg" 
        alt="Image 1" 
        className="floating-image img-1" 
        width={500} // ou la largeur appropriée
        height={500} // ou la hauteur appropriée
    />
</div>
  </div>
</section>


      {/* Offres Section */}
      <section id="offers" className="offers-section section zoom-in">
        <h2 className="section-title">Nos Offres & Abonnements de Maintenance</h2>
        <div className="offers-grid">
          <div className="offer-card standard">
            <h3 className="offer-title">Offre Standard</h3>
            <p><b>Votre site vitrine complet pour votre activité.</b></p>
            <ul>
              <li>Design personnalisé</li>
              <li>Optimisation SEO de base</li>
              <li>Support technique 1 mois</li>
            </ul>
            <p className="offer-price">Sur devis</p>
            <a href="#contact" className="cta-button">Contactez-nous ➔</a>
          </div>
          <div className="offer-card pro">
            <h3 className="offer-title">Offre Premium</h3>
            <p><b>Votre site web complet avec fonctionnalités avancées.</b></p>
            <ul>
              <li>Fonctionnalités plus complexes</li>
              <li>SEO avancé & optimisations</li>
              <li>Support technique 3 mois</li>
            </ul>
            <p className="offer-price">Sur devis</p>
            <a href="#contact" className="cta-button">Contactez-nous ➔</a>
          </div>
          <div className="offer-card premium">
            <h3 className="offer-title">Maintenance Pro</h3>
            <p><b>Un suivi continu pour votre le bon fonctionnement de votre site.</b></p>
            <ul>
              <li>Mises à jour régulières</li>
              <li>Monitoring & optimisations</li>
              <li>Support prioritaire et continu</li>
            </ul>
            <p className="offer-price">150€/mois</p>
            <a href="#contact" className="cta-button">Contactez-nous ➔</a>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="contact-section">
  <h2 className="section-title">Contactez-nous</h2>
  <p className="contact-description">
    Vous avez un projet en tête ou des questions ? Remplissez le formulaire ci-dessous et nous reviendrons vers vous rapidement.
  </p>
  <form className="contact-form" onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="name">Nom (ou Entreprise)</label>
      <input
        type="text"
        id="name"
        placeholder="Votre nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        placeholder="Votre message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows="5"
        required
      ></textarea>
    </div>
    
    {/* Ajout du champ de consentement RGPD */}
    <div className="form-group rgpd-consent">
  <input
    type="checkbox"
    id="consent"
    value={consent}
    onChange={(e) => setConsent(e.target.checked)}
    required
  />
  <label htmlFor="consent">
    J&apos;accepte que mes informations soient utilisées dans le cadre de ma demande. Consultez notre <a href="/privacy-policy" target="_blank">Politique de Confidentialité</a>.
  </label>
</div>

    <button type="submit" className="cta-button">Envoyer</button>
    {status && <p>{status}</p>}
  </form>
</section>

    </>
  );
}

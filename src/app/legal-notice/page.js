import Head from 'next/head';

export default function LegalNotice() {
  return (
    <>
      <Head>
        <title>Mentions Légales | Flow</title>
        <meta name="description" content="Mentions légales du site Flow." />
      </Head>

      <div className="legal-notice-container">
        <h1 className="section-title">Mentions Légales</h1> {/* Utilise une classe globale pour les titres */}
        <p className="section-description">
          Conformément à l&apos;article 6 de la loi n°2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique, il est précisé
          aux utilisateurs du site www.flow-agency.digital l&apos;identité des différents intervenants dans le cadre de sa réalisation et de
          son suivi :
        </p>
        
        <h2>Éditeur du site</h2>
        <p>
          Nom de la société : Flow<br />
          Siège social : 173 route de Castellar, 06500 Menton<br />
          SIRET : 85177613800022<br />
          Contact : <a href="mailto:contact@flow-agency.digital">contact@flow-agency.digital</a>
        </p>
      </div>
    </>
  );
}

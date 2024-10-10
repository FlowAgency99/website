import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Politique de Confidentialité | Flow</title>
        <meta name="description" content="Notre politique de confidentialité pour la protection des données personnelles." />
      </Head>

      <div className="privacy-policy-container">
        <h1 className="section-title">Politique de Confidentialité</h1>
        <p className="section-description">
          Chez Flow, nous nous engageons à protéger la confidentialité et la sécurité de vos données personnelles. Cette
          politique explique quelles informations nous collectons et comment nous les utilisons.
        </p>

        <div className="privacy-section">
          <h2>Données collectées</h2>
          <p>
            Nous collectons des informations telles que votre nom, votre adresse e-mail et votre message via notre formulaire de contact
            pour pouvoir vous répondre.
          </p>
        </div>

        <div className="privacy-section">
          <h2>Utilisation des données</h2>
          <p>
            Les données collectées sont utilisées uniquement pour traiter vos demandes et améliorer votre expérience sur notre site.
          </p>
        </div>

        <div className="privacy-section">
          <h2>Vos droits</h2>
          <p>
            Vous avez le droit de demander l'accès, la modification ou la suppression de vos données personnelles en nous contactant
            via l'adresse e-mail fournie sur la page Contact.
          </p>
        </div>
      </div>
    </>
  );
}

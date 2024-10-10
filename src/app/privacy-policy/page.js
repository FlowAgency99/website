import Head from 'next/head';

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Conditions d&apos;Utilisation | Flow</title>
        <meta name="description" content="Conditions d'utilisation du site Flow." />
      </Head>

      <div className="terms-container">
        <h1 className="section-title">Conditions d&apos;Utilisation</h1>
        <p className="section-description">
          Les présentes conditions d&apos;utilisation régissent l&apos;accès et l&apos;utilisation du site Flow. En accédant au site, vous acceptez
          de vous conformer aux présentes conditions.
        </p>

        <div className="terms-section">
          <h2>Utilisation du site</h2>
          <p>
            Vous vous engagez à utiliser ce site dans le respect des lois en vigueur et à ne pas porter atteinte aux droits de tiers ou à
            l&apos;intégrité du site.
          </p>
        </div>

        <div className="terms-section">
          <h2>Responsabilité</h2>
          <p>
            Flow ne saurait être tenu responsable des dommages directs ou indirects pouvant résulter de l&apos;accès ou de l&apos;utilisation du
            site.
          </p>
        </div>
      </div>
    </>
  );
}

import Head from 'next/head';

export default function HeadComponent() {
  return (
    <>
      <Head>
        <title>Flow | Solutions Digitales</title>
        <meta name="description" content="Description de ton site ici." />
        <link rel="icon" href="/favicon.ico" /> {/* Lien vers ton favicon */}
      </Head>
    </>
  );
}

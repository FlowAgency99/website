import Head from 'next/head';

export default function HeadComponent() {
  return (
    <>
      <title>Flow | Solutions Digitales</title> {/* Titre global */}
      <meta name="description" content="Flow, l'agence digitale pour des solutions web performantes et innovantes." />
      <link rel="icon" href="/favicon.ico" /> {/* Favicon */}
    </>
  );
}

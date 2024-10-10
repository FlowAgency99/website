import nodemailer from 'nodemailer';

// Fonction pour gérer la requête POST
export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Configuration du transporteur SMTP
    const transporter = nodemailer.createTransport({
      host: 'mail.privateemail.com', // Serveur SMTP de Namecheap
      port: 465, // Port SMTP de Namecheap pour SSL
      secure: true, // Utilisation de SSL
      auth: {
        user: process.env.EMAIL_USER, // Ton adresse email Namecheap (ex: contact@flow-agency.digital)
        pass: process.env.EMAIL_PASS, // Ton mot de passe ou un app password
      },
    });

    // Options de l'email
    const mailOptions = {
      from: 'contact@flow-agency.digital', // Ton adresse email
      to: 'contact@flow-agency.digital', // Où tu veux recevoir les emails
      replyTo: email, // L'email de l'utilisateur, utilisé pour répondre directement à lui
      subject: `Nouveau message de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    // Répondre avec un statut 200 et un message de succès
    return new Response(JSON.stringify({ message: 'Message envoyé avec succès !' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    // Répondre avec un statut 500 en cas d'erreur
    return new Response(JSON.stringify({ message: 'Erreur lors de l\'envoi du message' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

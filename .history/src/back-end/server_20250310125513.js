const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware pour traiter le corps des requêtes POST
app.use(express.json());

// Créer un transporteur Nodemailer avec les informations de connexion
const transporter = nodemailer.createTransport({
  service: 'gmail', // Utiliser le service Gmail
  auth: {
    user: process.env.EMAIL_USER, // Ton adresse email
    pass: process.env.EMAIL_PASS, // Ton mot de passe ou token d'application
  },
});

// Route pour envoyer l'email
app.post('/send-email', (req, res) => {
  const { firstname, lastname, subject } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER, // Ton adresse email où tu veux recevoir le message
    subject: `Nouveau message de ${firstname} ${lastname}`, // Sujet de l'email
    text: `Sujet : ${subject}`, // Corps du message
  };

  // Envoi de l'email avec Nodemailer
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Erreur lors de l\'envoi du message');
    } else {
      console.log('E-mail envoyé: ' + info.response);
      res.send('Message envoyé avec succès');
    }
  });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur le port ${PORT}`);
});

import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Charger les variables d'environnement depuis un fichier .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware pour parser les requêtes en JSON
app.use(express.json());

// Configurer nodemailer pour envoyer des emails
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Route pour envoyer un email
app.post('/send-email', (req, res) => {
    const { firstname, lastname, subject } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_RECEIVER,
        subject: `Nouveau message de ${firstname} ${lastname}`,
        text: subject,
    };

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

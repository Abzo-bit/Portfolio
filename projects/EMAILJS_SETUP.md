# Configuration EmailJS pour le formulaire de contact

## Étapes pour activer l'envoi d'emails :

1. **Créez un compte gratuit sur [EmailJS](https://www.emailjs.com/)**

2. **Configurez votre service email :**
   - Allez dans Email Services
   - Ajoutez Gmail (ou votre fournisseur email)
   - Suivez les instructions pour connecter votre email

3. **Créez un template d'email :**
   - Allez dans Email Templates
   - Créez un nouveau template avec ces variables :
     ```
     Nom: {{from_name}}
     Email: {{from_email}}
     Sujet: {{subject}}
     Message: {{message}}
     Destinataire: {{to_name}}
     ```

4. **Récupérez vos clés :**
   - Service ID (commence par "service_")
   - Template ID (commence par "template_")
   - Public Key (clé publique)

5. **Modifiez le fichier `src/components/Contact.js` :**
   ```javascript
   const serviceId = 'votre_service_id'; // Remplacez ici
   const templateId = 'votre_template_id'; // Remplacez ici
   const publicKey = 'votre_public_key'; // Remplacez ici
   ```

## Template EmailJS recommandé :

**Subject :** `Nouveau message de {{from_name}} - {{subject}}`

**Body :**
```
Bonjour Aboubakry,

Vous avez reçu un nouveau message depuis votre portfolio :

Nom : {{from_name}}
Email : {{from_email}}
Sujet : {{subject}}

Message :
{{message}}

Cordialement,
Votre portfolio
```

## Test :
Une fois configuré, testez le formulaire pour vous assurer que les emails arrivent bien dans votre boîte mail.
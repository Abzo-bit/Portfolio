# Portfolio - Aboubakry Dieng

Portfolio personnel créé avec React et Tailwind CSS.

## 🚀 Déploiement

Ce projet est configuré pour être déployé automatiquement sur GitHub Pages.

### Configuration requise

1. **Activer GitHub Pages** :
   - Allez dans les paramètres de votre dépôt GitHub
   - Section "Pages"
   - Source: "Deploy from a branch"
   - Branch: "gh-pages" (sera créé automatiquement)

2. **Mettre à jour l'URL dans package.json** :
   - Remplacez `YOUR_USERNAME` par votre nom d'utilisateur GitHub
   - Exemple: `"homepage": "https://aboubakrydieng.github.io/portfolio"`

### Déploiement automatique

Le projet se déploie automatiquement à chaque push sur la branche `main` grâce à GitHub Actions.

### Déploiement manuel

Si vous préférez déployer manuellement :

```bash
# Build du projet
npm run build

# Déploiement sur GitHub Pages
npx gh-pages -d build
```

## 🛠️ Développement

### Prérequis

- Node.js (version 18 ou supérieure)
- npm

### Installation

```bash
npm install
```

### Scripts disponibles

- `npm start` - Démarre le serveur de développement
- `npm run build` - Crée la version de production
- `npm test` - Lance les tests
- `npm run eject` - Eject de Create React App

### Technologies utilisées

- React 19
- Tailwind CSS
- Framer Motion (animations)
- React Icons
- Create React App

## 📁 Structure du projet

```
src/
├── components/          # Composants React
│   ├── Header.js
│   ├── Hero.js
│   ├── About.js
│   ├── Skills.js
│   ├── Projects.js
│   ├── Testimonials.js
│   ├── Contact.js
│   └── Footer.js
├── App.js              # Composant principal
├── index.js            # Point d'entrée
└── ...
```

## 📄 Licence

Ce projet est sous licence MIT.

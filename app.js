// app.js pour cPanel
const { execSync } = require('child_process');

// Installer les dépendances si nécessaire
try {
  execSync('npm install --production', { stdio: 'inherit' });
} catch (error) {
  console.error('Erreur lors de l\'installation des dépendances:', error.message);
}

// Démarrer l'application
require('./dist/main.js');
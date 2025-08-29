# Guide de Déploiement cPanel 🚀

## Prérequis

- Accès cPanel avec support Node.js
- Base de données MySQL créée
- Nom de domaine ou sous-domaine configuré

## Étapes de Déploiement

### 1. Préparation des Fichiers

```bash
# Construire le projet localement
npm run build

# Créer l'archive de déploiement (exclure node_modules)
zip -r backend-deployment.zip . -x "node_modules/*" ".git/*" "*.log"
```

### 2. Configuration de la Base de Données

1. **Créer une base MySQL dans cPanel**
2. **Noter les informations de connexion:**
   - Nom de la base
   - Utilisateur
   - Mot de passe
   - Host (généralement `localhost`)

### 3. Configuration des Variables d'Environnement

Créer le fichier `.env` sur le serveur:

```env
# Database
DATABASE_URL="mysql://username:password@localhost:3306/database_name"

# JWT Configuration
JWT_SECRET="your-super-secret-jwt-key-min-32-chars"
JWT_EXPIRES_IN="24h"

# Server Configuration
NODE_ENV="production"
PORT=3000

# CORS Configuration
CORS_ORIGIN="https://yourdomain.com"

# File Upload
UPLOAD_DIR="./uploads"
MAX_FILE_SIZE=5000000
```

### 4. Upload et Installation

1. **Uploader les fichiers** dans le dossier de votre application
2. **Se connecter en SSH** ou utiliser le terminal cPanel
3. **Exécuter le script de déploiement:**

```bash
# Rendre le script exécutable
chmod +x deploy.sh

# Exécuter le déploiement
./deploy.sh
```

### 5. Configuration Node.js dans cPanel

1. **Aller dans "Node.js App" dans cPanel**
2. **Créer une nouvelle application:**
   - **Node.js Version:** 18.x ou plus récent
   - **Application Mode:** Production
   - **Application Root:** Chemin vers votre dossier backend
   - **Application URL:** Votre domaine/sous-domaine
   - **Application Startup File:** `app.js`

3. **Variables d'environnement:** Ajouter si nécessaire

### 6. Démarrage de l'Application

Dans le terminal cPanel:

```bash
# Méthode 1: Via cPanel Node.js (recommandé)
# Utiliser l'interface cPanel pour démarrer

# Méthode 2: Via PM2 (si disponible)
pm2 start ecosystem.config.js
pm2 save
pm2 startup

# Méthode 3: Direct
npm run start:prod
```

### 7. Vérification

1. **Accéder à votre API:** `https://yourdomain.com/api`
2. **Documentation Swagger:** `https://yourdomain.com/api/docs`
3. **Test de santé:** `https://yourdomain.com/api/health` (si configuré)

## Structure de Déploiement

```
/home/username/public_html/api/
├── dist/                 # Code compilé
├── prisma/              # Schémas et migrations
├── uploads/             # Fichiers uploadés
├── logs/                # Logs d'application
├── node_modules/        # Dépendances
├── .env                 # Variables d'environnement
├── app.js              # Point d'entrée cPanel
├── ecosystem.config.js  # Configuration PM2
└── package.json        # Configuration Node.js
```

## Scripts Utiles

```bash
# Redémarrer l'application
pm2 restart mon-site-web-api

# Voir les logs
pm2 logs mon-site-web-api

# Voir le statut
pm2 status

# Migration manuelle de la DB
npm run db:migrate:deploy

# Seed manuel de la DB
npm run db:seed:prod
```

## Dépannage

### Problèmes Courants

1. **Erreur de connexion DB:**
   - Vérifier les credentials dans `.env`
   - S'assurer que la DB existe
   - Vérifier les permissions utilisateur

2. **Port déjà utilisé:**
   - Modifier le PORT dans `.env`
   - Redémarrer l'application

3. **Erreurs de permissions:**
   ```bash
   chmod 755 -R dist/
   chmod 777 -R uploads/
   chmod 777 -R logs/
   ```

4. **Module non trouvé:**
   ```bash
   npm install --production
   npm run db:generate
   ```

### Logs

```bash
# Logs de l'application
tail -f logs/combined.log

# Logs d'erreur
tail -f logs/err.log

# Logs système (si accessible)
tail -f /var/log/messages
```

## Mise à Jour

```bash
# 1. Backup de la DB
mysqldump -u username -p database_name > backup.sql

# 2. Upload des nouveaux fichiers
# 3. Redéployer
./deploy.sh

# 4. Redémarrer
pm2 restart mon-site-web-api
```

## Sécurité

- ✅ Variables d'environnement sécurisées
- ✅ JWT tokens avec clés fortes
- ✅ Validation des données entrantes
- ✅ CORS configuré
- ✅ Rate limiting (si configuré)
- ✅ Logs de sécurité

## Support

Pour toute assistance, vérifier:
1. Les logs d'application
2. Les logs du serveur
3. La configuration cPanel
4. Les permissions de fichiers
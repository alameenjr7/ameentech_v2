#!/bin/bash

# Script de déploiement pour cPanel
echo "🚀 Début du déploiement..."

# 1. Installer les dépendances
echo "📦 Installation des dépendances..."
npm install --production

# 2. Générer Prisma
echo "🗃️ Génération du client Prisma..."
npm run db:generate

# 3. Build du projet
echo "🔨 Build du projet..."
npm run build

# 4. Migration de la base de données
echo "🗄️ Migration de la base de données..."
npm run db:migrate:deploy

# 5. Seed de la base de données (optionnel)
echo "🌱 Seed de la base de données..."
npm run db:seed:prod || echo "⚠️ Seed ignoré (peut être normal si déjà fait)"

echo "✅ Déploiement terminé!"
echo "📊 Pour démarrer l'application: npm run start:prod"
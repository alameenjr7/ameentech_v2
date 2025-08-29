# Système d'Authentification - Backend NestJS

Ce document explique comment utiliser le système d'authentification JWT implémenté dans votre backend NestJS.

## 🚀 Installation et Configuration

### 1. Variables d'Environnement

Créez un fichier `.env` à la racine de votre projet avec les variables suivantes :

```env
# JWT Configuration
JWT_SECRET="votre-clé-secrète-jwt-super-sécurisée"
JWT_EXPIRES_IN="24h"

# Base de données
DATABASE_URL="mysql://username:password@localhost:3306/database_name"
```

### 2. Mise à jour de la Base de Données

Après avoir ajouté le modèle User au schéma Prisma, exécutez :

```bash
# Générer le client Prisma
npm run db:generate

# Pousser les changements vers la base de données
npm run db:push

# Ou créer une migration
npm run db:migrate

# Exécuter le seed pour créer l'utilisateur admin
npm run db:seed
```

## 🔐 Endpoints d'Authentification

### Inscription
```http
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe"
}
```

### Connexion
```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### Profil Utilisateur
```http
GET /auth/profile
Authorization: Bearer <votre-token-jwt>
```

### Changer le Mot de Passe
```http
POST /auth/change-password
Authorization: Bearer <votre-token-jwt>
Content-Type: application/json

{
  "currentPassword": "ancien-mot-de-passe",
  "newPassword": "nouveau-mot-de-passe"
}
```

## 👥 Gestion des Utilisateurs (Admin uniquement)

### Créer un Utilisateur
```http
POST /users
Authorization: Bearer <token-admin>
Content-Type: application/json

{
  "email": "newuser@example.com",
  "password": "password123",
  "firstName": "Jane",
  "lastName": "Smith",
  "role": "USER"
}
```

### Lister tous les Utilisateurs
```http
GET /users
Authorization: Bearer <token-admin>
```

### Mettre à jour un Utilisateur
```http
PATCH /users/:id
Authorization: Bearer <token-admin>
Content-Type: application/json

{
  "firstName": "Jane",
  "role": "MODERATOR"
}
```

### Supprimer un Utilisateur
```http
DELETE /users/:id
Authorization: Bearer <token-admin>
```

### Activer/Désactiver un Utilisateur
```http
PATCH /users/:id/toggle-active
Authorization: Bearer <token-admin>
```

## 🛡️ Sécurité et Autorisation

### Rôles Disponibles
- `USER` : Utilisateur standard
- `MODERATOR` : Modérateur avec permissions étendues
- `ADMIN` : Administrateur avec toutes les permissions

### Protection des Routes

#### Route Publique (pas d'authentification requise)
```typescript
@Public()
@Get('public-route')
publicRoute() {
  return 'Cette route est accessible à tous';
}
```

#### Route Protégée (authentification requise)
```typescript
@UseGuards(JwtAuthGuard)
@Get('protected-route')
protectedRoute() {
  return 'Cette route nécessite une authentification';
}
```

#### Route avec Rôle Spécifique
```typescript
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
@Get('admin-route')
adminRoute() {
  return 'Cette route nécessite le rôle ADMIN';
}
```

### Utilisation des Guards

```typescript
// Protection par authentification
@UseGuards(JwtAuthGuard)

// Protection par rôles (doit être utilisé avec JwtAuthGuard)
@UseGuards(JwtAuthGuard, RolesGuard)

// Définition des rôles requis
@Roles('ADMIN', 'MODERATOR')
```

## 🔑 Utilisation du Token JWT

### 1. Récupérer le Token
Après une connexion réussie, vous recevrez un token JWT :

```json
{
  "user": {
    "id": 1,
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "role": "USER",
    "isActive": true
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 2. Utiliser le Token
Incluez le token dans l'en-tête `Authorization` de vos requêtes :

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 📝 Exemples d'Utilisation

### Frontend (JavaScript/TypeScript)

```typescript
// Connexion
const login = async (email: string, password: string) => {
  const response = await fetch('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  
  const data = await response.json();
  
  // Stocker le token
  localStorage.setItem('token', data.token);
  
  return data;
};

// Requête authentifiée
const getProfile = async () => {
  const token = localStorage.getItem('token');
  
  const response = await fetch('/auth/profile', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  
  return response.json();
};
```

### cURL

```bash
# Connexion
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"admin123"}'

# Utiliser le token reçu
curl -X GET http://localhost:3000/auth/profile \
  -H "Authorization: Bearer <votre-token>"
```

## 🚨 Gestion des Erreurs

### Erreurs Courantes

- `401 Unauthorized` : Token manquant, invalide ou expiré
- `403 Forbidden` : Permissions insuffisantes
- `409 Conflict` : Email déjà utilisé
- `404 Not Found` : Ressource non trouvée

### Messages d'Erreur

```json
{
  "statusCode": 401,
  "message": "Token invalide ou utilisateur non trouvé",
  "error": "Unauthorized"
}
```

## 🔧 Configuration Avancée

### Personnalisation des Durées d'Expiration

```typescript
// Dans src/config/jwt.config.ts
export const jwtConfig = {
  secret: process.env.JWT_SECRET || 'default-secret',
  expiresIn: process.env.JWT_EXPIRES_IN || '24h',
  refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
};
```

### Ajout de Nouvelles Stratégies

```typescript
// Exemple : Stratégie locale pour login avec username
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  // Implémentation...
}
```

## 📚 Ressources Supplémentaires

- [Documentation NestJS](https://docs.nestjs.com/)
- [Documentation Passport.js](http://www.passportjs.org/)
- [Documentation JWT](https://jwt.io/)
- [Documentation Prisma](https://www.prisma.io/docs/)

## 🆘 Support

Pour toute question ou problème avec l'authentification, consultez :
1. Les logs de l'application
2. La documentation des endpoints dans Swagger UI
3. Les tests unitaires dans le dossier `test/`

---

**Note de Sécurité** : N'oubliez pas de changer la clé JWT_SECRET en production et de la garder secrète !

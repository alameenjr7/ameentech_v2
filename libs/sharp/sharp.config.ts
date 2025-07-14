import { join } from 'path';

// __dirname pointe vers /dist/libs/sharp, donc nous remontons de 3 niveaux
const projectRoot = join(__dirname, '..', '..', '..');
const uploadsDir = join(projectRoot, 'uploads');

export const sharpConfig = {
  uploadDir: uploadsDir,

  resize: {
    width: 300,
    height: 300,
    format: 'jpeg' as 'jpeg' | 'png' | 'webp' | 'avif',
    quality: 80,
  },

  // Simplifié : retourne juste le chemin complet pour un nom de fichier donné
  getOutputPath: (filename: string) => join(uploadsDir, filename),
};

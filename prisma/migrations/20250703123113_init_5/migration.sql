/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `projects` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `services` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `abouts` ADD COLUMN `version` INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `contacts` ADD COLUMN `status` VARCHAR(191) NULL DEFAULT 'new';

-- AlterTable
ALTER TABLE `projects` ADD COLUMN `category` VARCHAR(191) NULL,
    ADD COLUMN `slug` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `services` ADD COLUMN `slug` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `settings` ADD COLUMN `timezone` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `projects_slug_key` ON `projects`(`slug`);

-- CreateIndex
CREATE UNIQUE INDEX `services_slug_key` ON `services`(`slug`);

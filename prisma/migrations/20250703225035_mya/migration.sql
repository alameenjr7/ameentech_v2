/*
  Warnings:

  - You are about to drop the column `service` on the `contacts` table. All the data in the column will be lost.
  - You are about to drop the column `icon` on the `projects` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `contacts` DROP COLUMN `service`,
    ADD COLUMN `budget` VARCHAR(191) NULL,
    ADD COLUMN `country` VARCHAR(191) NULL,
    ADD COLUMN `interest` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `projects` DROP COLUMN `icon`,
    ADD COLUMN `image` VARCHAR(191) NULL,
    ADD COLUMN `tags` VARCHAR(191) NULL,
    ADD COLUMN `url` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `blogs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `excerpt` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `faqs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `question` VARCHAR(191) NOT NULL,
    `answer` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `faqs_question_key`(`question`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `educations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `period` VARCHAR(191) NOT NULL,
    `institution` VARCHAR(191) NOT NULL,
    `degree` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `workExperiences` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `period` VARCHAR(191) NOT NULL,
    `company` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pricingPlans` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `price` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    `features` VARCHAR(191) NOT NULL,
    `icon` VARCHAR(191) NOT NULL,
    `popular` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tools` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `percent` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    `icon` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `testimonials` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `rating` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    `text` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `marquees` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `items` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

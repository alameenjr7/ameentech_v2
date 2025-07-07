-- AlterTable
ALTER TABLE `abouts` MODIFY `description` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `faqs` MODIFY `answer` TEXT NULL;

-- AlterTable
ALTER TABLE `marquees` MODIFY `items` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `testimonials` MODIFY `text` TEXT NOT NULL;

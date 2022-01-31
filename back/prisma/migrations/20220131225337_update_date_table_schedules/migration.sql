-- DropIndex
DROP INDEX `schedules_id_barber_fkey` ON `schedules`;

-- DropIndex
DROP INDEX `schedules_id_user_fkey` ON `schedules`;

-- AlterTable
ALTER TABLE `schedules` MODIFY `date` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `schedules` ADD CONSTRAINT `schedules_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `schedules` ADD CONSTRAINT `schedules_id_barber_fkey` FOREIGN KEY (`id_barber`) REFERENCES `barbers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

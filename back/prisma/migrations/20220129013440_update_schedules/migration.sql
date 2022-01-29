-- AddForeignKey
ALTER TABLE `schedules` ADD CONSTRAINT `schedules_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `schedules` ADD CONSTRAINT `schedules_id_barber_fkey` FOREIGN KEY (`id_barber`) REFERENCES `barbers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

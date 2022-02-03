-- CreateTable
CREATE TABLE `Catalog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Content` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `startPage` INTEGER NOT NULL,
    `endPage` INTEGER NOT NULL,
    `catalogId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Page` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ip` VARCHAR(191) NOT NULL,
    `filePath` VARCHAR(191) NOT NULL,
    `catalogId` INTEGER NOT NULL,
    `tag` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Content` ADD CONSTRAINT `Content_catalogId_fkey` FOREIGN KEY (`catalogId`) REFERENCES `Catalog`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Page` ADD CONSTRAINT `Page_catalogId_fkey` FOREIGN KEY (`catalogId`) REFERENCES `Catalog`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

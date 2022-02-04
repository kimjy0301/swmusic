/*
  Warnings:

  - Added the required column `endPage` to the `Catalog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startPage` to the `Catalog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Catalog` ADD COLUMN `endPage` INTEGER NOT NULL,
    ADD COLUMN `startPage` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "BorrowRecords" ALTER COLUMN "borrowDate" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "returnDate" DROP NOT NULL;

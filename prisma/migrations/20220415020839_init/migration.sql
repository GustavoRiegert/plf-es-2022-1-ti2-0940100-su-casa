-- CreateEnum
CREATE TYPE "Payment" AS ENUM ('DEBIT', 'CREDIT', 'PIX', 'TICKET', 'IN_CASH');

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "staffId" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "numGuests" INTEGER NOT NULL,
    "dateTime" TEXT NOT NULL,
    "payment" "Payment" NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "Staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

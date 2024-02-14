-- CreateTable
CREATE TABLE "User" (
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "avatar" VARCHAR(255),
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "role" TEXT NOT NULL DEFAULT 'commonUser',

    CONSTRAINT "User_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "Pelton" (
    "name" VARCHAR(255) NOT NULL,
    "order" VARCHAR(255) NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "customer" VARCHAR(255) NOT NULL,
    "Da" INTEGER NOT NULL DEFAULT 0,
    "Ba" INTEGER NOT NULL DEFAULT 0,
    "Z" INTEGER NOT NULL DEFAULT 0,
    "Ra" INTEGER NOT NULL DEFAULT 0,
    "hourRate" INTEGER NOT NULL DEFAULT 0,
    "timeEstimate" INTEGER NOT NULL DEFAULT 0,
    "hoursRealy" INTEGER NOT NULL DEFAULT 0,
    "matIncluded" BOOLEAN NOT NULL DEFAULT false,
    "matSpec" VARCHAR(255) NOT NULL,
    "matWeight" INTEGER NOT NULL DEFAULT 0,
    "millingPrice" INTEGER NOT NULL DEFAULT 0,
    "matPricePerKg" INTEGER NOT NULL DEFAULT 0,
    "materialPrice" INTEGER NOT NULL DEFAULT 0,
    "machiningHours" INTEGER NOT NULL DEFAULT 0,
    "lathePrice" INTEGER NOT NULL DEFAULT 0,
    "edmPrice" INTEGER NOT NULL DEFAULT 0,
    "grindingPrice" INTEGER NOT NULL DEFAULT 0,
    "balancingPrice" INTEGER NOT NULL DEFAULT 0,
    "testsPrice" INTEGER NOT NULL DEFAULT 0,
    "priceTotal" INTEGER NOT NULL DEFAULT 0,
    "comment" VARCHAR(255),
    "attachment" VARCHAR(255),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "id" TEXT NOT NULL,

    CONSTRAINT "Pelton_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Francis" (
    "name" VARCHAR(255) NOT NULL,
    "order" VARCHAR(255) NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "customer" VARCHAR(255) NOT NULL,
    "Da" INTEGER NOT NULL DEFAULT 0,
    "Ba" INTEGER NOT NULL DEFAULT 0,
    "Z" INTEGER NOT NULL DEFAULT 0,
    "Ra" INTEGER NOT NULL DEFAULT 0,
    "hourRate" INTEGER NOT NULL DEFAULT 0,
    "timeEstimate" INTEGER NOT NULL DEFAULT 0,
    "hoursRealy" INTEGER NOT NULL DEFAULT 0,
    "matIncluded" BOOLEAN NOT NULL DEFAULT false,
    "matSpec" VARCHAR(255) NOT NULL,
    "matWeight" INTEGER NOT NULL DEFAULT 0,
    "millingPrice" INTEGER NOT NULL DEFAULT 0,
    "matPricePerKg" INTEGER NOT NULL DEFAULT 0,
    "materialPrice" INTEGER NOT NULL DEFAULT 0,
    "machiningHours" INTEGER NOT NULL DEFAULT 0,
    "lathePrice" INTEGER NOT NULL DEFAULT 0,
    "edmPrice" INTEGER NOT NULL DEFAULT 0,
    "grindingPrice" INTEGER NOT NULL DEFAULT 0,
    "balancingPrice" INTEGER NOT NULL DEFAULT 0,
    "testsPrice" INTEGER NOT NULL DEFAULT 0,
    "priceTotal" INTEGER NOT NULL DEFAULT 0,
    "comment" VARCHAR(255),
    "attachment" VARCHAR(255),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "id" TEXT NOT NULL,

    CONSTRAINT "Francis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Turgo" (
    "name" VARCHAR(255) NOT NULL,
    "order" VARCHAR(255) NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "customer" VARCHAR(255) NOT NULL,
    "Da" INTEGER NOT NULL DEFAULT 0,
    "Ba" INTEGER NOT NULL DEFAULT 0,
    "Z" INTEGER NOT NULL DEFAULT 0,
    "Ra" INTEGER NOT NULL DEFAULT 0,
    "hourRate" INTEGER NOT NULL DEFAULT 0,
    "timeEstimate" INTEGER NOT NULL DEFAULT 0,
    "hoursRealy" INTEGER NOT NULL DEFAULT 0,
    "matIncluded" BOOLEAN NOT NULL DEFAULT false,
    "matSpec" VARCHAR(255) NOT NULL,
    "matWeight" INTEGER NOT NULL DEFAULT 0,
    "millingPrice" INTEGER NOT NULL DEFAULT 0,
    "matPricePerKg" INTEGER NOT NULL DEFAULT 0,
    "materialPrice" INTEGER NOT NULL DEFAULT 0,
    "machiningHours" INTEGER NOT NULL DEFAULT 0,
    "lathePrice" INTEGER NOT NULL DEFAULT 0,
    "edmPrice" INTEGER NOT NULL DEFAULT 0,
    "grindingPrice" INTEGER NOT NULL DEFAULT 0,
    "balancingPrice" INTEGER NOT NULL DEFAULT 0,
    "testsPrice" INTEGER NOT NULL DEFAULT 0,
    "priceTotal" INTEGER NOT NULL DEFAULT 0,
    "comment" VARCHAR(255),
    "attachment" VARCHAR(255),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "id" TEXT NOT NULL,

    CONSTRAINT "Turgo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Impeller" (
    "name" VARCHAR(255) NOT NULL,
    "order" VARCHAR(255) NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "customer" VARCHAR(255) NOT NULL,
    "Da" INTEGER NOT NULL DEFAULT 0,
    "Ba" INTEGER NOT NULL DEFAULT 0,
    "Z" INTEGER NOT NULL DEFAULT 0,
    "Ra" INTEGER NOT NULL DEFAULT 0,
    "hourRate" INTEGER NOT NULL DEFAULT 0,
    "timeEstimate" INTEGER NOT NULL DEFAULT 0,
    "hoursRealy" INTEGER NOT NULL DEFAULT 0,
    "matIncluded" BOOLEAN NOT NULL DEFAULT false,
    "matSpec" VARCHAR(255) NOT NULL,
    "matWeight" INTEGER NOT NULL DEFAULT 0,
    "millingPrice" INTEGER NOT NULL DEFAULT 0,
    "matPricePerKg" INTEGER NOT NULL DEFAULT 0,
    "materialPrice" INTEGER NOT NULL DEFAULT 0,
    "machiningHours" INTEGER NOT NULL DEFAULT 0,
    "lathePrice" INTEGER NOT NULL DEFAULT 0,
    "edmPrice" INTEGER NOT NULL DEFAULT 0,
    "grindingPrice" INTEGER NOT NULL DEFAULT 0,
    "balancingPrice" INTEGER NOT NULL DEFAULT 0,
    "testsPrice" INTEGER NOT NULL DEFAULT 0,
    "priceTotal" INTEGER NOT NULL DEFAULT 0,
    "comment" VARCHAR(255),
    "attachment" VARCHAR(255),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "id" TEXT NOT NULL,

    CONSTRAINT "Impeller_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "name" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

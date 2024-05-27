"use server";

const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

export async function getServerSideProps() {
  const res = await prisma.user.update({
    where: { id: 1 },
    data: {
      name: "Alice",
    },
  });

  return Response.json(res);
}

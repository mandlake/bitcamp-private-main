"use server";

import { PrismaClient } from "@prisma/client";
import exp from "constants";

const prisma = new PrismaClient();

export async function createUser(data: any) {
  const { name, email, username, password } = data;
  const res = await prisma.user.create({
    data: {
      name: name,
      email: email,
      username: username,
      password: password,
    },
  });
  console.log(res);
}

export async function login(data: any) {
  const { username, password } = data;
  const user = await prisma.user.update({
    where: {
      username: username,
      password: password,
    },
    data: {
      tokens: "token1",
    },
  });
  console.log(user);
  return user;
}

export async function forgotPassword(data: any) {
  const { username, password } = data;
  const user = await prisma.user.update({
    where: {
      username: username,
    },
    data: {
      password: password,
    },
  });
  console.log(user);
  return user;
}

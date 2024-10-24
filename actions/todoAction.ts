"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function getTodosAction({ userId }: { userId: string | null }) {
  return await prisma.todo.findMany({
    where: {
      userId: userId as string,
    },
    orderBy: {
      createAt: "desc",
    },
  });
}
export async function createTodosAction({
  title,
  body,
  completed,
  userId,
}: {
  title: string;
  body?: string | undefined;
  completed: boolean;
  userId: string | null;
}) {
  await prisma.todo.create({
    data: {
      title,
      body,
      completed,
      userId: userId as string,
    },
  });
  revalidatePath("/");
}
export async function deleteTodosAction(id: string) {
  await prisma.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
}
export async function updateTodosAction({
  id,
  title,
  body,
  completed,
}: {
  id: string;
  title: string;
  body: string;
  completed: boolean;
}) {
  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      title,
      body,
      completed,
    },
  });
  revalidatePath("/");
}

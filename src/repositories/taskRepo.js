import prisma from '../config/db.js';

export async function findAll(completed) {
  if (typeof completed == "boolean") {
    return prisma.task.findMany({ where: { completed } });
  }
  else {
    return prisma.task.findMany();
  }
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}

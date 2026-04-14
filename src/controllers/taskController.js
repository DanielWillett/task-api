import * as taskService from '../services/taskService.js';

/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 */

/**
 * @param {Request} req 
 * @param {Response} res 
 */
export async function getTasks(req, res, next) {
  const isCompleted = req.query.completed?.toLowerCase();
  let completed;
  if (isCompleted === "true" || isCompleted === "1") {
    completed = true;
  } else if (isCompleted === "false" || isCompleted === "0") {
    completed = false;
  }
  else {
    completed = undefined;
  }

  const tasks = await taskService.getAllTasks(completed);
  res.json(tasks);
}

/**
 * @param {Request} req 
 * @param {Response} res 
 */
export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}

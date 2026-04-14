import express from 'express';
import * as taskController from '../controllers/taskController.js';
import { validateGetTasks, validateTask } from '../middleware/validateTask.js';

const router = express.Router();

router.get('/', validateGetTasks, taskController.getTasks);
router.post('/', validateTask, taskController.createTask);

export default router;

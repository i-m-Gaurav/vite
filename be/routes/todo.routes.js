import express from 'express'

import {getTodos, deleteTodo, createTodo} from '../controllers/todo.controller.js'


const router = express.Router();

router.get('/',getTodos);
router.post('/',createTodo);
// router.put('/:id',updateTodo);
router.delete('/:id',deleteTodo);

export default router;
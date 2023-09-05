import express from 'express';
import { completeTodo, deleteTodo, getTodos, newTodo, updateTodo } from '../controller/todo.ctrl';

const router=express.Router();

router.get('/',getTodos);
router.post('/new',newTodo);
router.delete('/delete/:id',deleteTodo);
router.get('/complete/:id',completeTodo);
router.put('/update/:id',updateTodo);

export default router
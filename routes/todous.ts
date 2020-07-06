import { Router } from 'express';

const router = Router();

import { Todo } from '../models/todous';

let todous: Todo[] = [];

router.get('/', (req, res, next) => {
    res.status(200).json({ todous: todous })
})

router.post('/todo', (req, res, next) => {
    const newTodo: Todo = {
        id: 'qweqwe',
        text: req.body.text
    };

    todous.push(newTodo);
    return res.status(200).json({ message: "success" });
});

router.put('/todo/:todoId', (req, res, next) => {
    const tid = req.params.todoId;
    const todoIndex = todous.findIndex(todoItem => todoItem.id === tid);

    if (todoIndex >= 0) {
        todous[todoIndex] = { id: todous[todoIndex].id, text: req.body.text };
        return res.status(200).json({ message: "successed" });
    }

    res.status(404).json({ error: "no todoIndex" });
});

router.delete('/delete/:todoId', (req, res, next) => {
    const tid = req.params.todoId;
    const todoIndex = todous.findIndex(todoItem => todoItem.id === tid);

    if (todoIndex >= 0) {
        todous = todous.filter(todoItem => todoItem.id !== tid);
        return res.status(200).json({message:'deleted'});
    }
    res.status(404).json({ error: "no todoIndex" });
})
export default router;
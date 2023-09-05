import Todo from '../models/todo';

export const getTodos = async (req, res) => {
    const todos = await Todo.find();

    res.json(todos);
};

export const newTodo = async (req, res) => {
    const todo = new Todo({
        text: req.body.text,
    })

    todo.save();
    res.json(todo);
};


export const deleteTodo = async (req, res) => {
    try {
        const result = await Todo.findByIdAndDelete(req.params.id);
        res.json(result);
    }catch(err){
        throw new Error(err);
    }
};


export const completeTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id)


        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        todo.complete = !todo.complete; // Toggle the 'complete' field
        await todo.save();

        res.json(todo);
    } catch (error) {
        res.status(500).json({ error: 'Error completing the todo.' });
    }
};



export const updateTodo = async (req, res) => {
    const todo = await Todo.findByIdAndUpdate(req.params.id);

    todo.text = req.body.text;
    todo.save();
    res.json(todo);
}

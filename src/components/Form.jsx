function Form({todos, setTodos}) {
    const handleSubmit = (event) => {
        event.preventDefault();

        const value = event.target.todo.value;
        const newTodo = {
            title: value,
            id: self.crypto.randomUUID();
            is_completed: false,
        };

        //update todo state
        setTodos((prevTodos) => [...prevTodos, newTodo]);

        // store updated todo list in local storage
        const updatedTodoList = JSON.stringify([...todos, newTodo]);
        localStorage.setItem("todos", updatedTodoList);

        event.target.reset();
    };

    return (
        

    )
}

export default Form;
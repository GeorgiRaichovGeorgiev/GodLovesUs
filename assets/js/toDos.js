import React, {useState} from 'react';

// Add real todos data instead of `toDosData`
// (add a model in the database)

// To search in Google what is the standard way to pass
// data from back-end(Django) to the front-end(ReactJS)

const toDosData = [
    {
        id: 1,
        name: 'ReactJS',
        complete: false,
    },
    {
        id: 2,
        name: 'SASS',
        complete: false,
    },
    {
        id: 3,
        name: 'Testing',
        complete: false,
    },
];

export const ToDos = () => {
    const [todos, setTodos] = useState(toDosData);

    const handleAddToDo = e => {
        if (e.key === 'Enter') {
            const toDo = e.target;
            const toDoValue = toDo.value.trim();

            if (toDoValue) {
                const nextId = todos.length + 1;
                const newTodos = [...todos, {
                    id: nextId,
                    name: toDoValue,
                    complete: false,
                }];

                setTodos(newTodos);
                toDo.value = '';
            }
        }
    };

    const handleToggleCompleteToDo = index => {
        const newTodos = [...todos];
        const toDo = newTodos[index];

        toDo.complete = !toDo.complete;
        setTodos(newTodos);
    };

    const handleDeleteToDo = index => {
        const newTodos = [...todos];

        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="todos">
            {todos.map((toDo, index) => (
                <div className="to-do" key={toDo.id}>
                    <p className={'to-do-name' + (toDo.complete ? ' completed' : '')}>
                        {toDo.name}
                    </p>
                    <div className="to-do-controllers">
                        <button className="to-do-complete"
                                onClick={() => handleToggleCompleteToDo(index)}>
                            Complete
                        </button>
                        <button className="to-do-delete"
                                onClick={() => handleDeleteToDo(index)}>
                            X
                        </button>
                    </div>
                </div>
            ))}
            <input
                type="text"
                className="to-do-add"
                placeholder="Type name"
                onKeyPress={handleAddToDo}
                autoFocus
            />
        </div>
    );
};

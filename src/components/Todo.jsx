import { useState } from "react";

const Todo = () => {


    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const deleteTodo = (deleteValue) => {
        const restTodoList = [
            ...todoList.filter((val) => {
                return val.todoName !== deleteValue;
            })
        ]
        setTodoList(restTodoList);
    };


    const handleForm = (e) => {
        e.preventDefault();
        setTodoList([...todoList, {todoName: todo}])
        setTodo("");
    }
    return (
        <div className="bg-gray-200 w-full h-screen flex items-center">
            <div className="
            w-[500] 
            mx-auto 
            bg-white 
            p-5 
            text-center">
                <h1 className="
                text-5xl 
                font-bold
                 mb-8">HALLO TO DO LIST</h1>
                <form onSubmit={handleForm}>
                    <input
                        type="text"
                        name="text"
                        id="text"
                        className="
                    border-black 
                    border-2 
                    rounded-full 
                    w-full 
                    placeholder:text-grey-500 p-5 mb-5 text-black" placeholder="add to do"
                        value={todo} onChange={(e) => setTodo(e.target.value)} />
                    <button type="submit"
                        className="bg-blue-500 text-white py-3 px-8 rounded-lg mb-8">Add Todo</button>
                </form>
                <div className="todo-show-area">
                    <ul>
                        {todoList.map((singleTodo, index) => {
                            return (
                                <li key={index} className="bg-black flex mb-5 justify-between text-white py-5 rounded-lg text-3xl px-5">
                                    {singleTodo.todoName}{" "}
                                    <span onClick={() => deleteTodo(singleTodo.todoName)} className="text-blue-500 cursor-pointer">
                                        x
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Todo;


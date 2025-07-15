import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'; //
export default function TodoList() {
    let [todo, setTodo] = useState([{task:"sample task", id: uuidv4(),isDone:false}]); // Initialize with a sample task
    let [newTodo, setNewTodo] = useState("");

    let addTask = () => {
        console.log("Adding task:");
        setTodo((prevTodos)=>{
            return [...prevTodos, {task: newTodo, id: uuidv4()}];

        });
        setNewTodo(""); // Clear the input field after adding the task
    }

    let updateNewTodo = (event) => {
        console.log("Updating new todo:", event.target.value);
        setNewTodo(event.target.value);
    }
    let deleteTask = (id) => {
        console.log("Deleting task with id:", id);
        setTodo((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id);
        });
    }
    // let upperCaseAll=()=>{
    //     setTodo((prevTodos) => {
    //         return prevTodos.map((todo) => {
    //             return {...todo, task: todo.task.toUpperCase()};
    //         });
    //     });
    // }
    // let upperCaseOne=(id) => {
    //     setTodo((prevTodos) => {
    //         return prevTodos.map((todo) => {
    //             if (todo.id === id) {
    //                 return {...todo, task: todo.task.toUpperCase()};
    //             }
    //             return todo;
    //         });
    //     });
    // }

    let isDoneOne = (id) => {
        setTodo((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {...todo, isDone: !todo.isDone}; // Toggle the isDone property
                }
                return todo;
            });
        });
    }

    let isDoneAll = () => {
        setTodo((prevTodos) => {
            return prevTodos.map((todo) => {
                return {...todo, isDone: true}; // Set all tasks to done
            });
        }   );
    }


    return (
        <div>
            <input type="text" placeholder="Add a new task" onChange={updateNewTodo} value={newTodo} />
            <button onClick={addTask} >Add</button>

            <h4>Todo List</h4>
            <ul>
                {
                    todo.map((todos)=>(

                         <li key={todos.id}>
                            <span style={{ textDecoration: todos.isDone ? 'line-through' : 'none' }}> {todos.task}</span>
                            &nbsp;
                            <button onClick={() => deleteTask(todos.id)}>Delete</button>
                            &nbsp;
                            <button onClick={() => isDoneOne(todos.id)}>Mark As Done</button>

                         </li>

                    ))
                   
                }
                
            </ul>
            <br>
            </br>
            <button onClick={isDoneAll}>Mark As Done All</button>
            <br></br>
            

        </div>

    )
}
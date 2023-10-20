import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";


const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
  
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos) );
    }, [todos])
    

    const handleNewTodo = ( todo )=>{
        console.log(todo);
        const action={
            type:'Add Todo',
            payload:todo
        }
        dispatch(action);
    }
    const handleDeleteTodo = ( id )=>{
        console.log(id);
        const action={
            type:'Remove Todo',
            payload:id
        }
        dispatch(action);
    }
    const handleToggleTodo = ( id )=>{
        console.log(id);
        const action={
            type:'Toggle Todo',
            payload:id
        }
        dispatch(action);
    }

    return{
        todos,
        todosCount : todos.length,
        pendingTodosCount: todos.filter(todo=> !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }

}

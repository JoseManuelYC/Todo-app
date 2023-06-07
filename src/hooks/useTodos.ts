import { todoReducer } from "@/helpers/todoReducer";
import { useReducer } from "react";

interface Todo{
  id:number
  todo:string
  done:boolean
}

const initialState:[]= [];

export const useTodo = () => {
  //1 function
  //2 State inicial
  //3 o una funcion que inicializa el Reducer, tambien para cuando la funcion o el proceso que se esta ejecutando es muy pesado (opcional)

  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = (todo:Todo) => {
    const action = {
      type: "Add todo",
      payload: todo,
    };
    dispatch(action);
  };
  const handleDeleteTodo = (id:number) => {
    dispatch({
      type: "Remove todo",
      payload: id,
    });
  };
  const handleCheckTodo = (id:number) => {
    dispatch({
      type: "Check todo",
      payload: id,
    });
  };
  return {
    todos,
    handleDeleteTodo,
    handleCheckTodo,
    handleNewTodo,
    todosCount: todos.length,
    pendingTodos: todos.filter((todo:Todo) => !todo.done).length,
  };
};
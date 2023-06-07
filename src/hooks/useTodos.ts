import { todoReducer } from "@/helpers/todoReducer";
import { Todo } from "@/types/models/todo";
import { useReducer } from "react";

export type UseTodoActions = (todo: Todo) => void;

const initialState: Todo[] = [];

export const useTodo = () => {
  //1 function
  //2 State inicial
  //3 o una funcion que inicializa el Reducer, tambien para cuando la funcion o el proceso que se esta ejecutando es muy pesado (opcional)

  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = (todo: Todo) => {
    const action = { type: "Add todo", payload: todo };
    dispatch(action);
  };

  const handleDeleteTodo = (todo: Todo) => {
    dispatch({ type: "Remove todo", payload: todo });
  };

  const handleCheckTodo = (todo: Todo) => {
    dispatch({ type: "Check todo", payload: todo });
  };

  return {
    todos,
    handleNewTodo,
    handleCheckTodo,
    handleDeleteTodo,
    todosCount: todos.length,
    pendingTodos: todos.filter((todo: Todo) => !todo.done).length,
  };
};

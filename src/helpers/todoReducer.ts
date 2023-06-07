import { Todo } from "@/types/models/todo"

type ActionDataType = {
  type: string,
  payload: Todo
}

export const todoReducer = (initialvalue: Todo[], action: ActionDataType) => {
  
  switch (action.type) {
    case "Add todo":
      return [...initialvalue, action.payload];

    case "Remove todo":
      return initialvalue.filter((todo:Todo) => todo.id !== action.payload.id);

    case "Check todo":
      return initialvalue.map((todo:Todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });

    default:
      return initialvalue;
  }
};
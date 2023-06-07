interface Todo{
  id:number
  todo:string
  done:boolean
}

export const todoReducer = (initialvalue = [], action) => {
  switch (action.type) {
    case "Add todo":
      return [...initialvalue, action.payload];

    case "Remove todo":
      return initialvalue.filter((todo:Todo) => todo.id !== action.payload);

    case "Check todo":
      return initialvalue.map((todo:any) => {
        if (todo.id === action.payload) {
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
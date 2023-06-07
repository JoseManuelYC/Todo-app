import { UseTodoActions } from "@/hooks/useTodos";
import { Todo } from "@/types/models/todo";
import ItemTodo from "./ItemTodo";

type ListTodoProps = {
  todos: Todo[];
  onDeleteTodo: UseTodoActions;
  onHandleCheck: UseTodoActions;
};

export default function ListTodo({
  todos,
  onDeleteTodo,
  onHandleCheck,
}: ListTodoProps) {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <ItemTodo
          todo={todo}
          key={todo.id}
          onDeleteTodo={onDeleteTodo}
          onHandleCheck={onHandleCheck}
        />
      ))}
    </ul>
  );
}

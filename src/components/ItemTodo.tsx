import { UseTodoActions } from "@/hooks/useTodos";
import { Todo } from "@/types/models/todo";

type ItemTodoProps = {
  todo: Todo;
  onDeleteTodo: UseTodoActions;
  onHandleCheck: UseTodoActions;
};

export default function ItemTodo({
  todo,
  onDeleteTodo,
  onHandleCheck,
}: ItemTodoProps) {
  return (
    <>
      <li className="d-flex align-items-center list-group-item mt-2 justify-content-between">
        <input
          type="checkbox"
          id={`${todo.id}`}
          className="form-check-input me-1"
          onClick={() => onHandleCheck(todo)}
        />
        <label className="form-check-label" htmlFor={`${todo.id}`}>
          {todo.todo}{" "}
        </label>
        <button className="btn btn-danger" onClick={() => onDeleteTodo(todo)}>
          Delete
        </button>
      </li>
    </>
  );
}

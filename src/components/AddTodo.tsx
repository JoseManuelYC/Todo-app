import { useForm } from "@/hooks/useForm";
import { Todo } from "@/types/models/todo";
import { FC } from "react";

type AddTodoProps = {
  onNewTodo: (todo: Todo) => void;
};

const initialValue = {
  todo: "",
  done: false,
  id: Math.floor(Math.random() * 10),
};

export default function AddTodo({ onNewTodo }: AddTodoProps) {
  const { formState, onNewValue, onResetForm } = useForm(initialValue);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formState.todo.length <= 1) return;

    const newTodo = {
      id: Math.floor(Math.random() * 100),
      todo: formState.todo,
      done: false,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <input
          name="todo"
          onChange={onNewValue}
          placeholder="Add todo"
          value={formState.todo}
          className="form-control"
        />
        <button type="submit" className="btn btn-primary mt-3">
          ADD To-Do
        </button>
      </form>
    </>
  );
}

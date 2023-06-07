import { Todo } from "@/types/models/todo";
import { ChangeEvent, useState } from "react";

export const useForm = (initialValue: Todo) => {
  const [formState, setformState] = useState(initialValue);

  const onNewValue = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setformState({ ...formState, [name]: value });
  };

  const onResetForm = () => {
    setformState(initialValue);
  };

  return {
    formState,
    onNewValue,
    onResetForm,
  };
};

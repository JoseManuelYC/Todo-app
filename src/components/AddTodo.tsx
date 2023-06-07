import { useForm } from "@/hooks/useForm"

interface Todo {
  id: number
  todo:string
  done:boolean
}
export default function AddTodo({onNewTodo}:any){
  const {todo , onNewValue, onResetForm } = useForm({
    todo:"",
  })
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(todo.length<=1) return;
    const newTodo:Todo = {
      id: new Date().getTime()*2,
      todo,
      done:false
    }
    onNewTodo(newTodo);
    onResetForm();
  }

  return(
    <>
      <form onSubmit={submitForm}>
        <input
          type="text"
          className="form-control"
          placeholder="Add todo"
          name="todo"
          value={todo}
          onChange={onNewValue}
          />
        <button type="submit" className="btn btn-primary mt-3">ADD To-Do</button>
      </form>
    </>
  )
}
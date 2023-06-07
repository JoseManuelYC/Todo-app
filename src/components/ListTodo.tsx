import ItemTodo from "./ItemTodo";

interface Todo{
  id:number
  todo:string
  done:boolean
}


export default function ListTodo({todos, onDeleteTodo, onHandleCheck}){

  return(
    <ul className="list-group">
        {
          todos.map((todo:Todo)=>(
            <ItemTodo key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onHandleCheck={onHandleCheck} />
          ))
        }
    </ul>
  )
}

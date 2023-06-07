import ItemTodo from "./ItemTodo";


export default function ListTodo({todos, onDeleteTodo}){

  return(
    <ul className="list-group">
        {
          todos.map((todo)=>(
            <ItemTodo key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
          ))
        }
    </ul>
  )
}

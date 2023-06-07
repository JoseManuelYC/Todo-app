export default function ItemTodo({todo, onDeleteTodo}){
  return(
    <>
      <li className="d-flex align-items-center list-group-item mt-2 justify-content-between">
        <span>{todo.todo}{" "}</span>
        <button className="btn btn-danger" onClick={()=>onDeleteTodo(todo.id)}>Delete</button>  
      </li>
    </>
  )
}
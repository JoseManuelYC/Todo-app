export default function ItemTodo({todo, onDeleteTodo, onHandleCheck}){
  return(
    <>
      <li className="d-flex align-items-center list-group-item mt-2 justify-content-between">
        <input 
          className="form-check-input me-1"
          type="checkbox"
          id="firstCheckbox"
          onClick={()=>onHandleCheck(todo.id)}
          />
          <label className="form-check-label" htmlFor="firstCheckbox">{todo.todo}{" "}</label>
        <button className="btn btn-danger" onClick={()=>onDeleteTodo(todo.id)}>Delete</button>  
      </li>
    </>
  )
}
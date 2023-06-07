"use client";
import AddTodo from "@/components/AddTodo";
import ListTodo from "@/components/ListTodo";
import { useTodo } from "@/hooks/useTodos";

export default function Home() {
  
  const { todos, todosCount, pendingTodos, handleNewTodo, handleDeleteTodo, handleCheckTodo
} = useTodo([])

  return (
    <div className="container mt-3">
      <h1>Todo list</h1>
      <hr />
      <div className="row">
        <div className="col-7 card">
            <h2 className="mt-2">Total Tasks: {todosCount}</h2>
            <h2>Pending Tasks: {pendingTodos}</h2>
            {
              (todosCount==0)
                ? <div className="card mt-3 d-flex align-items-center"><h4 className="card-body">No hay tareas por hacer</h4></div>
                : <div className="card-body">
                <ListTodo 
                todos={todos}
                onDeleteTodo={handleDeleteTodo}
                onHandleCheck={handleCheckTodo}
                />
                </div>
            }
        </div>
        <div className="col-5 card">
          <div className="card-body">
            <h2 className="card-title">Add Todo</h2>
            <hr />
              <AddTodo onNewTodo={(todo:any) => handleNewTodo(todo)} />
          </div>
        </div>
      </div>
    </div>
  )
}

"use client";
import AddTodo from "@/components/AddTodo";
import ListTodo from "@/components/ListTodo";
import { useTodo } from "@/hooks/useTodos";

export default function Home() {
  
  const { todos, todosCount, handleNewTodo, handleDeleteTodo
} = useTodo([])

  return (
    <div className="container">
      <h1>Todo list</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <h2>Earrings:{todosCount}</h2>
          <hr />
          <ListTodo 
          todos={todos}
          onDeleteTodo={handleDeleteTodo}
          />
        </div>
        <div className="col-5">
          <h2>Add Todo</h2>
          <hr />
          <AddTodo onNewTodo={(todo:any) => handleNewTodo(todo)} />
        </div>
      </div>
    </div>
  )
}

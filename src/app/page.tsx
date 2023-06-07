"use client";
import AddTodo from "@/components/AddTodo";
import ListTodo from "@/components/ListTodo";
import { useTodo } from "@/hooks/useTodos";
import { Todo } from "@/types/models/todo";

export default function Home() {
  const {
    todos,
    todosCount,
    pendingTodos,
    handleNewTodo,
    handleCheckTodo,
    handleDeleteTodo,
  } = useTodo();

  return (
    <div className="container mt-3">
      <div className="subcontainer d-flex justify-content-center">
        <h1 className="text-center">To-Do List</h1>
      </div>
      <hr />
      <div className="row gap-5">
        <div className="col-6 card">
          <h2 className="mt-3">Total Tasks: {todosCount}</h2>
          <h2>Pending Tasks: {pendingTodos}</h2>
          {todosCount == 0 ? (
            <div className="card mt-2 mb-4 d-flex align-items-center">
              <h4 className="card-body">There are no tasks to do</h4>
            </div>
          ) : (
            <div className="card-body">
              <ListTodo
                todos={todos}
                onDeleteTodo={handleDeleteTodo}
                onHandleCheck={handleCheckTodo}
              />
            </div>
          )}
        </div>
        <div className="col-5 card">
          <div className="card-body">
            <h2 className="card-title">Add Todo</h2>
            <hr />
            <AddTodo onNewTodo={handleNewTodo} />
          </div>
        </div>
      </div>
    </div>
  );
}

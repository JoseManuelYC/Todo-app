"use client";
import AddTodo from "@/components/AddTodo";
import Footer from "@/components/Footer";
import ListTodo from "@/components/ListTodo";
import { useTodo } from "@/hooks/useTodos";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Todo } from "@/types/models/todo";

export default function Home() {
  const { loading, screenWidth } = useWindowSize();
  const {
    todos,
    todosCount,
    pendingTodos,
    handleNewTodo,
    handleCheckTodo,
    handleDeleteTodo,
  } = useTodo();

  if (loading) return <></>;

  const items = {
    list: (
      <div key={0} className="col-md-6 card">
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
    ),
    form: (
      <div key={1} className="col-md-5 mb-3 mb-md-0 card">
        <div className="card-body">
          <h2 className="card-title">Add Todo</h2>
          <hr />
          <AddTodo onNewTodo={handleNewTodo} />
        </div>
      </div>
    ),
  };

  return (
    <div className="container mt-3">
      <div className="subcontainer d-flex justify-content-center">
        <h1 className="text-center">To-Do List</h1>
      </div>
      <hr />
      <div className="row px-3 px-md-0 gap-md-5">
        {screenWidth > 767 && items.list}
        {items.form}
        {screenWidth <= 767 && items.list}
      </div>
      <Footer />
    </div>
  );
}

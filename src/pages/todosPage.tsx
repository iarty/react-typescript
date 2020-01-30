import React, { useEffect, useState } from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { ITodo } from "../interfaces";

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false
    };
    setTodos(prev => [newTodo, ...prev]);
  };

  const toggle = (id: number) => {
    setTodos(prev =>
      prev.map(el => {
        if (el.id === id) {
          el.completed = !el.completed;
        }
        return el;
      })
    );
  };

  const removeHandler = (id: number) => {
    const shoudRemove = window.confirm("Are you sure?");
    if (shoudRemove) {
      setTodos(prev => prev.filter(el => el.id !== id));
    }
  };
  return (
    <>
      <TodoForm onAdd={addHandler} />
      <TodoList todos={todos} onToggle={toggle} onRemove={removeHandler} />
    </>
  );
};

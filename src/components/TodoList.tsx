import React from "react";
import { ITodo } from "../interfaces";

type TodoListProps = {
  todos: ITodo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onRemove,
  onToggle
}) => {
  if (!todos.length) {
    return <p className="center">No todos!</p>;
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemove(id);
  };

  return (
    <ul>
      {todos.map(todo => {
        const cls = todo.completed ? ["todo", "completed"] : ["todo"];
        return (
          <li className={cls.join(" ")} key={todo.id}>
            <label>
              <input
                type="checkbox"
                onChange={() => onToggle(todo.id)}
                checked={todo.completed}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={event => removeHandler(event, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

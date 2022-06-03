import React, { useState } from "react";
import "./reset.css";
import "./styles.css";

export const App = () => {
  const [todoText, setTodotext] = useState("");
  const [todos, setTodos] = useState([]);
  const filterOptions = [
    { value: "all", label: "すべて" },
    { value: "notStarted", label: "未着手" },
    { value: "inProgress", label: "作業中" },
    { value: "done", label: "完了" },
  ];

  const onChangeTodoText = (event) => setTodotext(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...todos, todoText];
    setTodos(newTodos);
    setTodotext("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="header-title">TODOリスト</div>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="todo-area">
        <ul>
          {todos.map((todo, index) => {
            return (
              <li>
                <div key={todo} className="list-row">
                  <p>
                    id:{index + 1} {todo}
                  </p>
                  <select>
                    {filterOptions.map(({ value, label }) => (
                      <option value={value}>{label}</option>
                    ))}
                  </select>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

import React from 'react';

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;


  // CSS-in-JS
  const style = {
    backgroundColor: '#c6ffe2',
    minHeight: '200px',
    padding: '8px',
    margin: '8px',
    borderRadius: '8px',
  };

  return (
    <div style={style}>
      <p class="title">未完了のTodo</p>
      <ul id="incomplete-list">
        {todos.map((todo, index) => {
          return (
            <div key={todo} class="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
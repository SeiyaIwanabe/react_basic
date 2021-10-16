import React from 'react';

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;

  // CSS-in-JS
  const style = {
    backgroundColor: '#ffffe0',
    minHeight: '200px',
    padding: '8px',
    margin: '8px',
    borderRadius: '8px',
  };

  return (
    <div style={style}>
      <p class="title">完了したTodo</p>
      <ul id="complete-list">
      {todos.map((todo, index) => {
          return (
            <div key={todo} class="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
import React from 'react';

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled }= props;

  // CSS-in-JS
  const style = {
    backgroundColor: '#c1ffff',
    height: '30px',
    padding: '8px',
    margin: '8px',
    borderRadius: '8px',
  }

  return (
    <div style={style}>
      <input
        type="text"
        placeholder="Todoを入力"
        id="add-text"
        value={todoText}
        onChange={onChange}
        disabled={disabled}
        />
      <button
        id="add-button"
        onClick={onClick}
        disabled={disabled}
      >
        追加
      </button>
    </div>
  );
};
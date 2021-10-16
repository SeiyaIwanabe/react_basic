import './App.css';
import React, { useState } from 'react';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';



export const App = () => {
  // 入力した値のstate
  const [todoText, setTodoText] = useState('');

  // 未完了のTodoのstate
  const [incompleteTodos, setIncompleteTodos] = useState([
    'aaaa',
    'bbbbb',
  ]);

  // 完了したTodoのstate
  const [completeTodos, setCompleteTodos] = useState([
    'ccc',
  ]);

  // inputのvalueを検知する関数
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // Todoを追加する関数
  const onClickAddTodo = () => {
    if (todoText === '') return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  };

  // Todoを削除する関数
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  // Todoを完了する関数
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  
  // 完了したTodoを未完了にする関数
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <div className="container">
        <InputTodo
          todoText={todoText}
          onChange={onChangeTodoText}
          onClick={onClickAddTodo}
          disabled={incompleteTodos.length >= 5}
        />
        {incompleteTodos.length >= 5 && (
          <p>
            登録できるTodoは5個までです。
          </p>
        )}
        <IncompleteTodos
          todos={incompleteTodos}
          onClickComplete={onClickComplete}
          onClickDelete={onClickDelete}
        />
        <CompleteTodos
          todos={completeTodos}
          onClickBack={onClickBack}
        />
      </div>
    </>
  )
};
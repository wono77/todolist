import React from 'react';
import TodoItem from './TodoItem';
import '../styles/TodoList.scss';
import { useTodosState } from '../contexts/TodosContext';

function TodoList(){
    const todos = useTodosState();
    return(
        <div className = "todoList">
            {
                todos.length === 0 ? <span>오늘 할 일을 등록하세요!</span>
                : todos.map(todo => (
                    <TodoItem todo = {todo} key = {todo.id} />
                ))
            }
        </div>
    )
}

export default TodoList;
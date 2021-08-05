import React, { useState } from 'react';
import '../styles/TodoForm.scss';
import { useTodosDispatch } from '../contexts/TodosContext';

function TodoForm(){
    const [value, setValue] = useState('');
    const dispatch = useTodosDispatch();

    const onSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        dispatch({
            type: 'CREATE',
            text: value
        });
        setValue('');
    }

    return(
        <form onSubmit = {onSubmit} className = "todoForm">
            <input
                value = {value}
                placeholder = "무엇을 하실 건가요??"
                onChange = {e => setValue(e.target.value)}
            />
            <button>등록</button>
        </form>
    );
};

export default TodoForm;
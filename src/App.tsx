import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import styled, { createGlobalStyle } from 'styled-components';
import { TodosContextProvider } from './contexts/TodosContext';
import logo from './logo.svg';
import './App.css';

const Rootdiv = styled.div`
  display : flex;
  height : 100vh;
  width : 100%;
  justify-content : center;
  align-items : center;
  flex-direction : column;
`;

const GlobalStyle = createGlobalStyle`
  body{
    padding : 0;
    margin : 0;
  }
`;

function App() {
  return(
    <>
      <TodosContextProvider>
        <GlobalStyle />
        <Rootdiv>
          <TodoForm />
          <TodoList />
        </Rootdiv>
      </TodosContextProvider>
    </>
  )
}

export default App;

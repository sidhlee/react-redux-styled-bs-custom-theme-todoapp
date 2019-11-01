import React from "react";
import Todo from "./Todo";
import styled from "styled-components";

const StyledTodos = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Todos = ({ filteredTodos, onClick }) => (
  <StyledTodos>
    {filteredTodos.map(todo => (
      <Todo
        key={todo.id}
        onClick={() => onClick(todo.id)}
        completed={todo.completed}
      >
        {todo.text}
      </Todo>
    ))}
  </StyledTodos>
);

export default Todos;

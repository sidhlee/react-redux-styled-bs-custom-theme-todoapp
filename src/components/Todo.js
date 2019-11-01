import React from "react";
import styled from "styled-components";

const StyledTodo = styled.li`
  ${props =>
    props.completed
      ? `
    text-decoration: line-through;
    color: var(--secondary);
    `
      : null}
`;

const Todo = ({ children, onClick, completed }) => (
  <StyledTodo onClick={onClick} completed={completed}>
    {children}
  </StyledTodo>
);

export default Todo;

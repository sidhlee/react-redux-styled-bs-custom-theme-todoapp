import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { addTodo } from "../actions";
import { connect } from "react-redux";

const FormWrapper = styled.div`
  margin-top: 1em;
`;
const AddTodo = ({ dispatch }) => {
  let inputElement = "";
  return (
    <FormWrapper>
      <Form
        onSubmit={e => {
          e.preventDefault();
          if (!inputElement.value.trim()) return;
          dispatch(addTodo(inputElement.value));
          inputElement.value = "";
        }}
      >
        <Form.Group controlId="formTodo">
          <Form.Label>Add Todos</Form.Label>
          <Form.Control
            ref={node => (inputElement = node)}
            type="text"
            placeholder="Enter Todo"
          />
        </Form.Group>
        <Button type="submit" block variant="outline-primary">
          Add
        </Button>
      </Form>
    </FormWrapper>
  );
};

export default connect()(AddTodo); // eslint-disable-line

# Todo App

While creating this app, I have learned about:

- React-redux build flow
- Using better naming convntion for:
  - Presentational components
  - Container components
  - Actions and creators
  - Reducers and store state
- Modifying bootstrap scss file to create custom theme (e.g. change primary color)
  - npm install node-sass and bootstrap
  - create `custom.scss` file inside `/src/scss/`
  - Overwriting values before  
    `@import "~bootstrap/scss/bootstrap";`  
    (because of !default)
- Using React-Bootstrap components
  - Navbar, Navbar.Brand
  - Form, Form.Group, Form.Label, Form.Control, Button
  - Nav(`variant="pills"`), Nav.Item, and Nav.Link
- Also, when working with svg's in react you have to import svg as React Component and style it as you need.
  `/src/components/Logo.js`
  ```node
  import { ReactComponent as Notepad } from "../notepad.svg";
import styled from "styled-components";

export default styled(Notepad)`
  height: 40px;
  margin-right: 0.5em;
`;
```
`/src/components/NavBar.js`
```JSX
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./Logo";
const NavBar = () => (
  <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <Logo /> Todo App
      </Navbar.Brand>
    </Navbar>
  </>
);

export default NavBar;
```

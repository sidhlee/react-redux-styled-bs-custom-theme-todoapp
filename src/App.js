import React from 'react';
import './App.css';

import Navbar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import AddTodo from './containers/AddTodo';
import Filters from './components/Filters/Filters';
import FilteredTodos from './containers/FilteredTodos';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <AddTodo />
        <Filters />
        <FilteredTodos />
      </Container>
    </div>
  );
}

export default App;

import React from 'react';
import Nav from 'react-bootstrap/Nav';

const Filter = ({ eventKey, selected, onClick, children }) => {
  return (
    <Nav.Item>
      <Nav.Link
        eventKey={eventKey}
        disabled={selected}
        onClick={onClick}
      >
        {children}
      </Nav.Link>
    </Nav.Item>

  )
};

export default Filter;
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import SelectFilter from '../../containers/SelectFilter';
import { filters } from '../../actions';
import styled from 'styled-components';

const StyledFilters = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em auto;
`;

// this is presentaional component
// because it doesn't need redux
// Let's name these with some noun
const Filters = (props) => (
  <StyledFilters>
    <Nav variant="pills" defaultActiveKey={filters.SHOW_ALL}>
      <SelectFilter eventKey={filters.SHOW_ALL}>All</SelectFilter>
      <SelectFilter eventKey={filters.SHOW_COMPLETED}>Completed</SelectFilter>
      <SelectFilter eventKey={filters.SHOW_ACTIVE}>Active</SelectFilter>
    </Nav>
  </StyledFilters>
);

export default Filters;

import { connect } from 'react-redux';
import { setFilter } from '../actions';
import Filter from '../components/Filters/Filter';


const mapStateToProps = (state, ownProps) => ({
  selected: ownProps.eventKey === state.selectedFilter
});

// we are naming the handler as general as possible
// Presentational components doens't need to know about 
// the implementation of the handler or what it does.
// It just need to push the "Button" when it detects some event

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setFilter(ownProps.eventKey))
});

// This is a container component
// We'll name it as some verb + noun
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);




import FilteredImage from '../components/FilteredImage';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  let combinedFilters = '';

  Object.keys(state.filters).forEach(key => {
    combinedFilters += ` ${state.filters[key]}`;
  });

  return {
    filters: {WebkitFilter: combinedFilters}
  }
};

const FilteredImageContainer = connect(mapStateToProps, null)(FilteredImage);

export default FilteredImageContainer;
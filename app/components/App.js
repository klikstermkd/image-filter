import React from 'react';
import Filters from './Filters';
import FilteredImageContainer from '../containers/FilteredImageContainer';

const styles = {
  margin: '0 auto',
  width: 400
};

const App = () => (
  <div style={styles}>
    <FilteredImageContainer />
    <Filters />
  </div>
);

export default App;
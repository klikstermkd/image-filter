import React from 'react';

const FilteredImage = ({filters}) => (
  <img src="./images/cat.jpg" style={filters} className="hw-accelerate" />
);

export default FilteredImage;
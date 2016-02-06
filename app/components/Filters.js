import React from 'react';
import SliderContainer from '../containers/SliderContainer';
import filters from '../utils/filters';

const Filters = () => (
  <div>
    {filters.map((filter, id) => {
      return <SliderContainer 
                  filter={filter.name} 
                  min={filter.min} 
                  max={filter.max} 
                  step={filter.step}
                  key={id} />
    })}
  </div>
);

export default Filters;
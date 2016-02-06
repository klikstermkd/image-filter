import React from 'react';

const Slider = (props) => {
  const {onChange, name, ...props} = props;

  return (
    <div style={{height: 50}}>
      {name}: <input  
                  type="range" 
                  {...props} 
                  defaultValue={0} 
                  onChange={onChange}
                  style={{float: 'right'}} />
    </div>
  );
};

export default Slider;
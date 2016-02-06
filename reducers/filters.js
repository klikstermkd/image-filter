const filters = (state = {}, action) => {
  switch (action.type) {
    case 'BLUR':
      return Object.assign({}, state, {blur: `blur(${action.value}px)`});
    case 'GRAYSCALE':
      return Object.assign({}, state, {grayscale: `grayscale(${action.value})`});
    case 'SEPIA':
      return Object.assign({}, state, {sepia: `sepia(${action.value})`});
    case 'BRIGHTNESS':
      return Object.assign({}, state, {brightness: `brightness(${action.value})`});
    case 'CONTRAST':
      return Object.assign({}, state, {contrast: `contrast(${action.value})`});
    case 'INVERT':
      return Object.assign({}, state, {invert: `invert(${action.value})`});
    case 'SATURATE':
      return Object.assign({}, state, {saturate: `saturate(${action.value})`});
    default:
      return state;
  }
};

export default filters;
import { connect } from 'react-redux';
import Slider from '../components/Slider';

const mapStateToProps = (state, ownProps) => {
  return {
    min: ownProps.min,
    max: ownProps.max,
    step: ownProps.step,
    name: ownProps.filter
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (e) => {
      dispatch({type: ownProps.filter, value: e.target.value})
    }
  }
};

const SliderContainer = connect(mapStateToProps, mapDispatchToProps)(Slider);

export default SliderContainer;
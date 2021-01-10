import React from 'react'

import { connect } from '../utils/connect';

import {
  subAction
} from '../store/actionCreaters';

function About(props) {
  console.log(props)
  return (
    <div>
      <hr />
        about
      <h2>當前計數: {props.counter}</h2>
      <button onClick={e => props.decrement()}>-1</button>
      <button onClick={e => props.subNumber(5)}>-5</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
};

const mapDispachToProps = dispatch => {
  return {
    decrement: function() {
      dispatch(subAction(1)) 
    },
    subNumber: function(num) {
      dispatch(subAction(num))
    }
  }
}

export default connect(mapStateToProps, mapDispachToProps)(About)
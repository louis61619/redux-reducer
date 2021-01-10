import React from 'react'

import { connect } from '../utils/connect';

import {
  addAction
} from '../store/actionCreaters';


function Home(props) {
  return (
    <div>
      <hr />
        Home
      <h2>當前計數: {props.counter}</h2>
      <button onClick={e => props.increment()}>+1</button>
      <button onClick={e => props.addNumber(5)}>+5</button>
    </div>
  )
}

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispachToProps = dispatch => ({
  increment: function() {
    dispatch(addAction(1))
  },
  addNumber: function(num) {
    dispatch(addAction(num))
  }
})

export default connect(mapStateToProps, mapDispachToProps)(Home)

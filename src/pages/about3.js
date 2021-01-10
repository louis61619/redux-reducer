import React from 'react'

// import { connect } from '../utils/connect';
import { connect } from 'react-redux';

import {
  subAction
} from '../store/counter/acionCreaters';

function About(props) {
  console.log(props)
  return (
    <div>
      <hr />
        about
      <h2>當前計數: {props.counter}</h2>
      <button onClick={e => props.decrement()}>-1</button>
      <button onClick={e => props.subNumber(5)}>-5</button>
      <ul>
          {
            props.banners.map((item, index) => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
        <h2>Recommend</h2>
        <ul>
          {
            props.recommends.map((item, index) => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.counterInfo.counter,
    banners: state.homeInfo.banners,
    recommends: state.homeInfo.recommends
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
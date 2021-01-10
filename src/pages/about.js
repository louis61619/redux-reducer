import React, { PureComponent } from 'react'

import store from '../store/index';

import {
  subAction
} from '../store/actionCreaters';

export default class About extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      counter: store.getState().counter
    }
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }
  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <div>
        <hr/>
        home
        <h2>當前計數: {this.state.counter}</h2>
        <button onClick={e => this.decrement()}>-1</button>
        <button onClick={e => this.subNumber()}>-5</button>
      </div>
    )
  }

  decrement() {
    store.dispatch(subAction(1))
  }

  subNumber() {
    store.dispatch(subAction(5))
  }
  
}

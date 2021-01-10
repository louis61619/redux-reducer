import React, { PureComponent } from 'react'

import store from '../store/index';

import {
  addAction
} from '../store/actionCreaters';

export default class Home extends PureComponent {
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
        <button onClick={e => this.increment()}>+1</button>
        <button onClick={e => this.addNumber()}>+5</button>
      </div>
    )
  }

  increment() {
    store.dispatch(addAction(1))
  }

  addNumber() {
    store.dispatch(addAction(5))
  }
  
}

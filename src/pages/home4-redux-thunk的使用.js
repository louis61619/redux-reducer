// import axios from 'axios';
import React, { PureComponent } from 'react'

// import { connect } from '../utils/connect';
import { connect } from 'react-redux';


import {
  addAction, getHomeMultidataAction
} from '../store/actionCreaters';


// function Home(props) {
//   return (
//     <div>
//       <hr />
//         Home
//       <h2>當前計數: {props.counter}</h2>
//       <button onClick={e => props.increment()}>+1</button>
//       <button onClick={e => props.addNumber(5)}>+5</button>
//     </div>
//   )
// }

class Home extends PureComponent {
  componentDidMount() {
    console.log(this.props)
    this.props.getHomeMultidata()
  }
  
  render() {
    return (
      <div>
        <hr />
        Home
        <h2>當前計數: {this.props.counter}</h2>
        <button onClick={e => this.props.increment()}>+1</button>
        <button onClick={e => this.props.addNumber(5)}>+5</button>
        <h2>Banner</h2>
        <ul>
          {
            this.props.banners.map((item, index) => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
        <h2>Recommend</h2>
        <ul>
          {
            this.props.recommends.map((item, index) => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter,
  banners: state.banners,
  recommends: state.recommends
})

const mapDispachToProps = dispatch => ({
  increment() {
    dispatch(addAction(1))
  },
  addNumber(num) {
    dispatch(addAction(num))
  },
  // changeBanners(banners) {
  //   dispatch(changeBannersAction(banners))
  // },
  // changeRecommends(recommends) {
  //   dispatch(changeRecommendAction(recommends))
  // }
  getHomeMultidata() {
    dispatch(getHomeMultidataAction)
  }
})

export default connect(mapStateToProps, mapDispachToProps)(Home)

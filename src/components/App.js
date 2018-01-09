import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class App extends Component {

componentDidMount = () => {
  const { receivePosts } = this.props
  receivePosts()
}

  render() {
    const { feed } = this.props
    console.log(feed)
    return (
      <div className="App">
      </div>
    );
  }
}

function mapStateToProps({ feed }){
  return {
    feed: feed
  }
}

function mapDispatchToProps(dispatch) {
  return {
    receivePosts: ()=> dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

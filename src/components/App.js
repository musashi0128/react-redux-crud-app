import React, { Component } from 'react';


const App = () =>  (<Counter></Counter>)

class Counter extends Component {
  // constructorは初期化処理で実行
  constructor(props) {
    super(props)
    this.state = {count:0}
  }

  handlePlusButton = () => {
    const currentCount = this.state.count
    this.setState({ count: currentCount + 1})
  }

  handleMinButton = () => {
    const currentCount = this.state.count
    this.setState({ count: currentCount - 1})
  }

  render() {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;

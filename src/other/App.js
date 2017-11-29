import React, { Component } from 'react';
import Header from '../components/Header'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  addItem() {
    let {items, stack} = this.state;
    items.push(stack.shift());
    this.setState({items, stack});
  }

  restart() {
    let {items, stack} = this.state;
    stack = items.concat(stack);
    items = [stack.shift()];
    this.setState({items, stack});
  }

  render() {
    const {stack, items} = this.state;
    return (
      <Header />
    );
  }
}

export default App;

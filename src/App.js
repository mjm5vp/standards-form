import React, { Component } from 'react';
import Wrapper from './Wrapper';
import Header from './Header'

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

      // <Wrapper>
      //   <p>
      //     <button disabled={stack.length === 0}
      //       onClick={this.addItem.bind(this)}>
      //       Add an item
      //     </button>
      //     <button onClick={this.restart.bind(this)}>
      //       Start over
      //     </button>
      //   </p>
      //   <ul className="usa-accordion usa-accordion-bordered" aria-multiselectable="true">
      //     {items.map((item, i) => {
      //       const id = item.id || `item${i}`;
      //       return (
      //         <li key={i}>
      //           <button className="usa-accordion-button"
      //             aria-expanded="false" aria-controls={id}>
      //             {item.title}
      //           </button>
      //           <div id={id} className="usa-accordion-content">
      //             <p>{item.text}</p>
      //           </div>
      //         </li>
      //       );
      //     })}
      //   </ul>
      // </Wrapper>
    );
  }
}

export default App;

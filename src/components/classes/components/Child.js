import {Component} from "react";

export class Child extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: 'Biba',
      count: 0
    }
  }

  componentDidMount() {
    console.log('Child did mount')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Child did update')
  }

  componentWillUnmount() {
    console.log('Child will unmount')
  }

  render() {
    return(
      <>
        <h2>Child component</h2>
        <p>Count: {this.state.count}</p>
        <button>Click</button>
      </>
    )
  }
}
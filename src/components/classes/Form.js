import React, {Component} from "react";
import {Child} from "./components/Child";

export class Form extends Component {
  state = {
    name: 'Oleg',
    count: 0,
    show: true
  }

  handleChange = (event) => {
    this.setState({name: event.target.value})
  }

  handleClick = () => {
    this.setState((prevState) => ({count: prevState.count + 1}))
  }

  handleShow = () => {
    this.setState({show: !this.state.show})
  }

  componentDidMount() {
    console.log('Form did mount')
  }

  render() {
    return (
      <>
        <h1>Classes Component</h1>
        {/*<h2>Name: {this.state.name}</h2>*/}
        {/*<input type="text" onChange={this.handleChange}/>*/}
        {/*<p>Count: {this.state.count}</p>*/}
        <button onClick={this.handleShow}>Show</button>
        {this.state.show && <Child/>}
      </>
    )
  }
}
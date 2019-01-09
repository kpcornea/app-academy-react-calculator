import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        num1: "",
        num2: "",
        result: 0
    };

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.clear = this.clear.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
  }

  setNum1(event) {
    this.setState({ num1: event.target.value });
  }

  setNum2(event) {
    this.setState({ num2: event.target.value });
  }

  clear(event) {
    this.setState({ num1: "", num2: "", result: 0 });
    event.preventDefault();
  }

  add(event) {
    this.setState({ result: Number(this.state.num1) + Number(this.state.num2) });
    event.preventDefault();
  }

  subtract(event) {
    this.setState({ result: Number(this.state.num1) - Number(this.state.num2) });
    event.preventDefault();
  }

  multiply(event) {
    this.setState({ result: Number(this.state.num1) * Number(this.state.num2) });
    event.preventDefault();
  }

// when to prevent default?

  divide(event) {
    this.setState({ result: Number(this.state.num1) / Number(this.state.num2) });
    event.preventDefault();
  }

  render() {
    const { num1, num2, result } = this.state;

    return (
      <div>
        <h1>{result}</h1>
        <br />
        <form>
          <input type="text" value={num1} onChange={this.setNum1} />
          <input type="text" value={num2} onChange={this.setNum2} />
          <button onClick={this.clear}>Clear</button>
          <br />
          <button onClick={this.add}>+</button>
          <button onClick={this.subtract}>-</button>
          <button onClick={this.multiply}>*</button>
          <button onClick={this.divide}>/</button>
        </form>
      </div>
    );
  }
}

export default Calculator;

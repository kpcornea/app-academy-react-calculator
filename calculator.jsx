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
  }

  setNum1(event) {
    // e.preventDefault();
    this.setState({ num1: event.target.value })
  }

  setNum2(event) {
    // e.preventDefault();
    this.setState({ num2: event.target.value })
  }

  setResult(event) { // this is just adding right now
    this.setState({ result: Number(this.state.num1) + Number(this.state.num2) })
  }

  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>
        <br />
        <form>
          <label>
          Num1:
          <input type="text" value={this.state.num1} onChange={this.setNum1}
          </label>
        </form>
      </div>
    );
  }
}

export default Calculator;

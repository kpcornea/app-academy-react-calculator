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
    this.setResult = this.setResult.bind(this);
  }

  setNum1(event) {
    this.setState({ num1: event.target.value });
  }

  setNum2(event) {
    this.setState({ num2: event.target.value });
  }

  setResult(event) { // this is just adding right now
    this.setState({ result: Number(this.state.num1) + Number(this.state.num2) });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>
        <br />
        <form onSubmit={this.setResult}>
          <label>
            Num1:
            <input type="text" value={this.state.num1} onChange={this.setNum1} />
          </label>
          <label>
            Num2:
            <input type="text" value={this.state.num2} onChange={this.setNum2} />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default Calculator;

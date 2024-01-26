import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input1: '',
      input2: '',
      result: ''
    };
  }

  handleInputChange = (inputName, value) => {
    this.setState({ [inputName]: value });
  };

  handleOperation = (operation) => {
    const { input1, input2 } = this.state;
    let result;

    switch (operation) {
      case '+':
        result = Number(input1) + Number(input2);
        break;
      case '-':
        result = Number(input1) - Number(input2);
        break;
      case '*':
        result = Number(input1) * Number(input2);
        break;
      case '/':
        result = Number(input1) / Number(input2);
        break;
      case '^':
        result = Math.pow(Number(input1), Number(input2));
        break;
      case 'sqrt':
        result = Math.sqrt(Number(input1));
        break;
      default:
        result = '';
    }

    this.setState({ result });
  };

  render() {
    const { input1, input2, result } = this.state;

    return (
      <div>
        <input
          type="text"
          value={input1}
          onChange={(e) => this.handleInputChange('input1', e.target.value)}
        />
        <input
          type="text"
          value={input2}
          onChange={(e) => this.handleInputChange('input2', e.target.value)}
        />
        <button onClick={() => this.handleOperation('+')}>+</button>
        <button onClick={() => this.handleOperation('-')}>-</button>
        <button onClick={() => this.handleOperation('*')}>*</button>
        <button onClick={() => this.handleOperation('/')}>/</button>
        <button onClick={() => this.handleOperation('^')}>^</button>
        <button onClick={() => this.handleOperation('sqrt')}>sqrt</button>
        <div>Result: {result}</div>
      </div>
    );
  }
}

export default Calculator;
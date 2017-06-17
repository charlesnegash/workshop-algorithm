import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class Step extends Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: [
        'Get penut butter and two slices of bread and jam and a knife',
        'Get two slices of bread and on one spread penut butter with the knife carefully and on the other slices of bread spread jam ',
        'Put two slices together',
        'put materials away',
        'Go wash your hands',
        'Then enjoy',
      ],
      index: 0,
      button: 'next'
   };
  }

  render() {
      return (
        <div>
          <div className="step-text">{this.state.steps[this.state.index]}</div>
          <Button
            bsStyle="success"
            bsSize="large"
            onClick={event => this.setState({ index: this.state.index + 1 })}>
            { this.state.button }
          </Button>
        </div>
      );
  }
}

export default Step;

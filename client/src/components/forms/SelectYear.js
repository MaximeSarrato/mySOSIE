import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

// @TODO Fill the file with database entries
const DATA = require('../../data/years');

class SelectYear extends Component {
  onChange(event) {
    if (this.props.input.onChange && event != null) {
      // To be aligned with how redux-form publishes its CHANGE action payload.
      // The event received is an object with 2 keys: "value" and "label"
      this.props.input.onChange(event.value);
    } else {
      // Clear the input field
      this.props.input.onChange(null);
    }
  }

  render() {
    return (
      <Select
        options={DATA.YEARS}
        value={this.props.input.value || ''}
        onBlur={() => this.props.input.onBlur(this.props.input.value)}
        onChange={this.onChange.bind(this)}
      />
    );
  }
}

export default SelectYear;

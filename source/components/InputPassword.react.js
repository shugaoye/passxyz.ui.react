import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReactPassword extends React.Component {

  state = {
    value: this.props.value || ''
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
    this.props.onChange(event);
    console.log("handleChange: " + event.target.value)
  }

  render() {
    var val = this.state.value
    const { revealed } = this.props

    return (
      <input type={ revealed ? 'text' : 'password' } disabled={true} value={ val } 
        onChange={ this.handleChange } className='react-password'/>
    )
  }
}

ReactPassword.propTypes = {
  onChange: PropTypes.func,
  revealed: PropTypes.bool,
  value: PropTypes.string
};

ReactPassword.defaultProps = {
  onChange: Function(),
  revealed: false,
  value: ''
}

export default ReactPassword;
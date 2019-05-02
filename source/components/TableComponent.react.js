import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PasswordInput from 'react-input-password';
// var ReactPassword = require('./InputPassword.react')

class TableRow extends React.Component {

  State = {
    checked: false,
    rowData: {}
  }
  
  handleCheckChange(event) {
    this.setState({checked: !this.state.checked})
  }

  handlePasswordChange(event) {
    console.log(this.refs.password.state.value)
  }

  render()
  {
    var row = this.props.rowData;

    if(row.IsProtected)
    {
      return (
        <tr>
          <th scope="row">{row.Key}</th>
          <td>

          <div className="input-group input-group-sm mb-3">
            <PasswordInput
                    onChange={this.handlePasswordChange}/>
            <div className="input-group-prepend">
                <div className="input-group-text">
                  <input type="checkbox" aria-label="Checkbox for following text input"  onChange= { this.handleCheckChange } checked={ this.state.checked ? 'checked' : null } />
                </div>
            </div>
        </div>
            
          </td>
        </tr>);  
    }
    else 
    {
      return (
        <tr>
          <th scope="row">{row.Key}</th>
          <td>{row.Value}</td>
        </tr>);  
    }
  }
}

TableRow.propTypes = {
  rowData: function(properties, propertyName, componentName) {
    var rowData = properties[propertyName];

    if (! rowData) {
      return new Error('Row data must be set.');
    }

  }
};

class TableComponent extends Component {
  State = {
    data: {}
  }
  
  getListOfDataIds() {
    return Object.keys(this.props.data.Items);
  }

  getTableRowElement(dataId) {
    var rowData = this.props.data.Items[dataId];

    return (<TableRow rowData={rowData} key={rowData.Key} />);
  }


  render() {
      // Data
      var rowElements = this.getListOfDataIds().map(this.getTableRowElement);
      console.log(rowElements);
   
      return (<table className="table table-sm table-striped table-bordered table-hover">
      <tbody>{rowElements}</tbody>
      </table>)
    }
}

TableComponent.propTypes = {
  data: function(properties, propertyName, componentName) {
    var data = properties[propertyName];

    if (! data) {
      return new Error('Table data must be set.');
    }

  }
};

export default TableComponent;
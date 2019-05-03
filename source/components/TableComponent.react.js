import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPassword from './InputPassword.react';
// var ReactPassword = require('./InputPassword.react')

class TableRow extends React.Component {

  state = {
    checked: false,
    rowData: this.props.rowData
  }
  
  handleCheckChange = (event) => {
    const { checked } = this.state;
    this.setState({checked: !checked})
    // console.log("handleCheckChange: " + event.target.value)
  }

  handlePasswordChange = (event) => {
    console.log("handlePasswordChange: " + event.target.value)
    // console.log(this.refs.password.state.value)
  }

  render()
  {
    const { checked, rowData} = this.state;

    var row = rowData;

    if(row.IsProtected)
    {
      return (
        <tr>
          <th scope="row">{row.Key}</th>
          <td>
          <div className="input-group input-group-sm mb-3">
            <ReactPassword ref='password' value={row.Value} revealed={ checked } 
              onChange={ this.handlePasswordChange } id='secret-password'/>
            <div className="input-group-prepend">
                <div className="input-group-text">
                  <input type="checkbox" aria-label="Checkbox for following text input"  
                    onChange= { this.handleCheckChange } />
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
  
  state = {
    Items: this.props.data.Items
  }

  getListOfDataIds() {
    const {
      Items
      } = this.state;

    return Object.keys(Items);
  }

  getTableRowElement(dataId) {
    const {
      Items
      } = this.state;

      var rowData = Items[dataId];

    return (<TableRow rowData={rowData} key={rowData.Key} />);
  }

  render() {
      // Data
      var rowElements = this.getListOfDataIds().map(this.getTableRowElement, this);
   
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
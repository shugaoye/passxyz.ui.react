var React = require('react');
var ReactPassword = require('./InputPassword.react')

var TableRow = React.createClass({
  propTypes: {
    rowData: function(properties, propertyName, componentName) {
      var rowData = properties[propertyName];

      if (! rowData) {
        return new Error('Table data must be set.');
      }

    },
  },

  getInitialState: function () {
    return {
      checked: false,
      rowData: {}
    };
  },
  
  handleCheckChange: function (event) {
    this.setState({checked: !this.state.checked})
  },

  handlePasswordChange: function (event) {
    console.log(this.refs.password.state.value)
  },

  render: function() 
  {
    var row = this.props.rowData;

    if(row.IsProtected)
    {
      return (
        <tr>
          <th scope="row">{row.Key}</th>
          <td>

          <div className="input-group input-group-sm mb-3">
            <ReactPassword ref='password' value={row.Value} revealed={ this.state.checked } onChange={ this.handlePasswordChange } id='secret-password'/>
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

});

var TableComponent = React.createClass({
  propTypes: {
    data: function(properties, propertyName, componentName) {
      var tableData = properties[propertyName];

      if (! tableData) {
        return new Error('Table data must be set.');
      }

    },
  },

  getInitialState: function () {
    return {
      data: {}
    };
  },
  
  getListOfDataIds: function () {
    return Object.keys(this.props.data.Items);
  },

  getTableRowElement: function (dataId) {
    var rowData = this.props.data.Items[dataId];

    return (<TableRow rowData={rowData} key={rowData.Key} />);
  },


    render: function() {
      // Data
      var rowElements = this.getListOfDataIds().map(this.getTableRowElement);
      console.log(rowElements);
   
      return (<table className="table table-sm table-striped table-bordered table-hover">
      <tbody>{rowElements}</tbody>
      </table>)
    }
});

module.exports = TableComponent;
var React = require('react');

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
      rowData: {}
    };
  },
  
  render: function() 
  {
    var row = this.props.rowData;
    console.log(row);
    return (
      <tr>
        <th scope="row">{row.Key}</th>
        <td>{row.Value}</td>
      </tr>);
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
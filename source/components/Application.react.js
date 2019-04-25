var React = require('react');

var Application = React.createClass({
  
  getInitialState: function () {
    return {
      isHeaderHidden: false
    };
  },
  
  handleClick: function () {    
    this.setState({
      isHeaderHidden: ! this.state.isHeaderHidden
    });
  },

  render: function () {
    var headerElement = React.createElement('h1', { className: 'header', key: 'header' }, 'You can hide me.');
    var buttonElement = React.createElement('button', { className: 'btn btn-outline-primary', onClick: this.handleClick, key: 'button' }, 'Toggle header');
    const testElement = 
    (
      <div className="container-fluid">

        <div className="row">
          <div className="col-md-4 text-center">
          {headerElement}
              <p>Hello World!</p>
              {buttonElement}
          </div>
          <div className="col-md-8">
          </div>
        </div>
      </div>  
    );

    const withOutHeaderElement = 
    (
      <div className="container-fluid">

        <div className="row">
          <div className="col-md-4 text-center">
          <p>Hello World!</p>
              {buttonElement}
          </div>
          <div className="col-md-8">
          </div>
        </div>
      </div>  
    );
    
    if (this.state.isHeaderHidden) {
      console.log("Hide Header.");
      return (withOutHeaderElement);
    }

    return (
      testElement
    );
  }
});

module.exports = Application;
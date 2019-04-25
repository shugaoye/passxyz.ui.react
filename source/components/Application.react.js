var React = require('react');
var Markdown = require('markdown-it')();

var Application = React.createClass({
  
  getInitialState: function () {
    return {
      isHeaderHidden: true
    };
  },
  
  handleClick: function () {    
    this.setState({
      isHeaderHidden: ! this.state.isHeaderHidden
    });
  },

  render: function () {
    var resultText = Markdown.render(textMarkdown);

    var headerElement = React.createElement('h1', { className: 'header', key: 'header' }, 'You can hide me.');
    var buttonElement = React.createElement('button', { className: 'btn btn-outline-primary', onClick: this.handleClick, key: 'button' }, 'Toggle header');
    const markdownElement = React.createElement(
      'div',
      { className: 'md-text2' },
      resultText
    );

    const testElement = 
    (
      <div className="container-fluid">
      <section class="main-content">
          <div dangerouslySetInnerHTML={{__html: resultText}}></div>
      </section>

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
        <section class="main-content">
          <div dangerouslySetInnerHTML={{__html: resultText}}></div>
        </section>
      </div>  
    );
    
    console.log(resultText);

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
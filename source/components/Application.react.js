import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Table from './TableComponent.react';

class Application extends Component {
  
  state = {
      isHeaderHidden: true
  }
  
  handleClick() {
    this.setState({
      isHeaderHidden: ! this.state.isHeaderHidden
    });
  }

  render() {
    // var resultText = Markdown.render(textMarkdown);

    var headerElement = React.createElement('h1', { className: 'header', key: 'header' }, 'You can hide me.');
    var buttonElement = React.createElement('button', { className: 'btn btn-outline-primary', onClick: this.handleClick, key: 'button' }, 'Toggle header');
    const markdownElement = React.createElement(
      'div',
      { className: 'md-text2' }
    );

    const testElement = 
    (
      <div className="container-fluid">

        <div className="row">
          <div className="col-md-4 text-center">
          </div>
          <div className="col-md-8">
              {headerElement}
              <p>Hello World!</p>
              {buttonElement}
          </div>
          <section className="main-content">
            <h1>{entryModel.Title}</h1>
            <Table data = {entryModel} />
            <ReactMarkdown source={textMarkdown} />
          </section>
        </div>
      </div>  
    );

    const withOutHeaderElement = 
    (
      <div className="container-fluid">
        <section className="main-content">
          <h1>{entryModel.Title}</h1>
          <Table data = {entryModel} />
          <ReactMarkdown source={textMarkdown} />
        </section>
      </div>  
    );
    
    // console.log(resultText);

    if (this.state.isHeaderHidden) {
      console.log("Hide Header.");
      return (withOutHeaderElement);
    }

    return (
      testElement
    );
  }
}

export default Application;
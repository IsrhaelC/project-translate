import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';

export default class CodeViewer extends Component {

  render() {
    return (
        <div onContextMenu={this.props.handleClick}>
            <SyntaxHighlighter language='javascript' style={docco}>{'(num) => num + 1\n(num) => num + 1'}</SyntaxHighlighter>
        </div>
    )
  }
};

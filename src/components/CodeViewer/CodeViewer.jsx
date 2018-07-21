import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';

export default class CodeViewer extends Component {

  render() {
    return (
        <div onContextMenu={this.props.handleClick}>
            <SyntaxHighlighter language='javascript' style={docco}>{`'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

export default class AppContent extends Component {
  render () {
    return (
      <div className='app container'>
        <div className='row'>
          <Search handleSearch={this.props.handleSearch} isDisabled={this.props.isFetching} />
          {this.props.isFetching && <div>Carregando...</div>}
        </div>
        <div className='row'>
          {!!this.props.userInfo && <UserInfo userInfo={this.props.userInfo} />}
          <div className='col'>
            {!!this.props.userInfo && <Actions getRepos={this.props.getRepos} getStarred={this.props.getStarred} />}

            {!!this.props.repos.length &&
            <Repos
              className='repos list-group offset-2 col-lg-10'
              title='Repositórios'
              repos={this.props.repos}
            />
            }

            {!!this.props.starred.length &&
            <Repos
              className='starred list-group offset-2 col-lg-10'
              title='Favoritos'
              repos={this.props.starred}
            />
            }
          </div>
        </div>
      </div>
    )
  }
}

AppContent.propTypes = {
  userInfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired,
  starred: PropTypes.array.isRequired
}`}</SyntaxHighlighter>
        </div>
    )
  }
};

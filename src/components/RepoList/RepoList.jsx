import React, { Component } from 'react'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Archive from '@material-ui/icons/Archive';

export default class RepoList extends Component {

    branchClick(branchName){
        alert(branchName)
    }

  render() {
    return (
        <div>
            <List component="nav">
                {this.props.repos.map((repo, index) => (
                    <ListItem key={index} button onClick={()=> this.branchClick(repo.nome)}>
                        <ListItemIcon>
                            <Archive />
                        </ListItemIcon>
                        <ListItemText primary={repo.nome} />
                    </ListItem>
                ))}
            </List>
        </div>
    )
  }
}

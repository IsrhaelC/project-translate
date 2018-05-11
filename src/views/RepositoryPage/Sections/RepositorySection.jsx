import React from "react";
// material-ui components
import withStyles from "material-ui/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Popover from "material-ui/Popover";
import Button from "material-ui/Button";

import CodeViewer from '../../../components/CodeViewer/CodeViewer.jsx'
import RepoList from '../../../components/RepoList/RepoList.jsx'

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class RepositorySection extends React.Component {
  anchorElLeft = null;
  anchorElTop = null;
  anchorElBottom = null;
  anchorElRight = null;
  constructor(props) {
    super(props);
    this.state = {
      classicModal: false,
      openLeft: false,
      openTop: false,
      openBottom: false,
      openRight: false,
      repos: [{
        nome: "repositorio 1"
      }, {
        nome: "repositorio 2"
      }]
    };
  }

  handleClickButton(state) {
    this.setState({
      [state]: true
    });
  }

  handleClosePopover(state) {
    this.setState({
      [state]: false
    });
  }

  createJson (selection) {
    
  }

  componentDidMount () {
    document.oncontextmenu = (e) => e.preventDefault()
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Let's talk product</h2>
            <h5 className={classes.description}>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. 
              Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat. 
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <RepoList repos={this.state.repos}/>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <CodeViewer handleClick={(e) => {
                if (e.type === 'click') {
                  console.log('Use o botão direito');
                } else if (e.type === 'contextmenu') {
                  this.handleClickButton("openTop")
                  this.anchorElTop = document.getSelection().anchorNode.parentElement;
                }
              }}/>
              <Popover
                classes={{
                  paper: classes.popover
                }}
                open={this.state.openTop}
                anchorEl={this.anchorElTop}
                anchorReference={"anchorEl"}
                onClose={() => this.handleClosePopover("openTop")}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
              >
                <h3 className={classes.popoverHeader}>Add for translation</h3>
                <div className={classes.popoverBody}>
                <Button color="primary" onClick={() => this.createJson(document.getSelection().toString())}>
                  Add
                </Button>
                </div>
              </Popover>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(RepositorySection);

import React from "react";
// material-ui components
import withStyles from "material-ui/styles/withStyles";

// @material-ui/icons
import Language from "@material-ui/icons/Language";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Settings from "@material-ui/icons/Settings";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
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
              <ul>
                <li>Teste</li>
              </ul>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);

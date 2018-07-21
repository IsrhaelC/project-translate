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
            Translate Project can translate your project through its Git project, using a neural network for a more efficient translation, after configuration, a new branch is generated in your project with the language chosen for translation
            </h5>
          </GridItem>
        </GridContainer>
        <div> 
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="You in the world"
                description="Do your project reaches people around the planet."
                icon={Language}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Safe Translation"
                description="Your message correctly translated into numerous languages"
                icon={VerifiedUser}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Simplified configuration"
                description="Easily set in minutes"
                icon={Settings}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);

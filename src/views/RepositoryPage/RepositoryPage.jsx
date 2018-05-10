import React from "react";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import classNames from "classnames";

// Sections for this page
import RepositorySection from "./Sections/RepositorySection";

import repositoryPageStyle from "assets/jss/material-kit-react/views/repositoryPage.jsx";

class RepositoryPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <RepositorySection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(repositoryPageStyle)(RepositoryPage);

import React from "react";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "material-ui/Button";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import { Link } from "react-router-dom";
import TextField from 'material-ui/TextField';
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import TranslateService from "../../services/TranslateService.js"

import image from "assets/img/bg7.jpg";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      email: '',
      password: '',
      repository: '',
      repos: []
    };
  }

  handleAuth () {
    console.log(this.state)
    //var tService = new TranslateService(this.state.repository)
   // this.setState({
    //  repos: tService.getFilesFromRepo()
    //})
   // console.log(this.state.repos)
  }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
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
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardBody>
                      <TextField
                        label="Email"
                        id="email"
                        type="text"
                        value={this.state.email}
                        onChange={(e) => this.setState({email: e.target.value})}
                      />
                      <TextField
                        id="password"
                        label="Password"
                        type="password"
                        value={this.state.password}
                        onChange={(e) => this.setState({password: e.target.value})}
                      />
                      <TextField
                        label="Repository"
                        id="repository"
                        type="text"
                        value={this.state.repository}
                        onChange={(e) => this.setState({repository: e.target.value})}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Link to="/repository">
                        <Button color="primary" onClick={() => {this.handleAuth()}}>
                          Get started
                        </Button>
                      </Link>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);

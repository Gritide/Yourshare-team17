import React from "react";
import "./WelcomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import icon from "../images/YS_icon.png";
import "../style/SignupPage.css";

//Sam
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


export class SignupPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username:"",
      phonenumber:"",
      zipcode:"",
    }
  };
  
  handleOnSubmit = (event)=>{
    event.preventDefault();
    console.log(this.state.username);
    this.props.history.push({
      pathname: "/WelcomePage",
      state: {username:this.state.username,
              phonenumber: this.state.phonenumber,
              zipcode: this.state.zipcode,}
    });
  
  };
  
  handleOnChange = (event)=>{
    console.log( event.target.name);
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  


  render () {
    
    return (
      <div id="stylex">
        <div id="icon2">
          <h2> YourShare </h2>
          <img  src={icon} />
          </div>
          <div id="tablex">
            <Container>
              <h2>Join your community</h2>
              <br></br>
              <h2>Sign-up</h2>

              <Form onSubmit={this.handleOnSubmit}>
                <Form.Group className="mb-3" controlId="formUsername">
                  <Form.Label>Username: </Form.Label>
                  <Form.Control
                    name="username"
                    type="username"
                    id="user"
                    placeholder=""
                    onChange={this.handleOnChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhonenumber">
                  <Form.Label>Phone number: </Form.Label>
                  <Form.Control
                    name="phonenumber"
                    type="Phone number"
                    id="phone"
                    placeholder=""
                    onChange={this.handleOnChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formZipcode">
                  <Form.Label>Zipcode: </Form.Label>
                  <Form.Control
                    name="zipcode"
                    type="Zip Code"
                    placeholder=""
                    onChange={this.handleOnChange}
                  />
                </Form.Group>

                <Button variant="primary" type="Join">
                  Join
                </Button>
                
                <Button variant="secondary" id="sign" type="Sign in">
                  Sign in
                </Button>
              </Form>
            </Container>
          </div>
        </div>
      
    );
  }
}

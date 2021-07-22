import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/AddItemPage.css";
import ArrowLeftCircle from "../images/ArrowLeftCircle_.png";
import "../App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
//Ayo
// import { pages } from "../App";
import Container from "react-bootstrap/Container";

export class AddItemPage extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.state = {
      itemname: "",
      type: "",
      desc: "",
    };
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.username);

    this.props.history.push({
      pathname: "/WelcomePage",
      state: {
        itemname: this.state.itemname,
        type: this.state.type,
        desc: this.state.desc,
      },
    });
  };

  handleOnChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div id="style">
        <Container>
          <div className="back_button">
            <Link
              to={{
                pathname: "/WelcomePage",
                state: {
                  username: this.props.location.state.username,
                  
                },
              }}
            >
              <img src={ArrowLeftCircle} id="ArrowLeftCircle" alt="" />
            </Link>
            <h1>Add item</h1>
          </div>
          <Form onSubmit={this.handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formitemname">
              <Form.Label>ItemName: </Form.Label>
              <Form.Control
                name="itemname"
                type="itemname"
                id="user"
                placeholder=""
                onChange={this.handleOnChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formtype">
              <Form.Label>type: </Form.Label>
              <Form.Control
                name="type"
                type="type"
                id="phone"
                placeholder=""
                onChange={this.handleOnChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formdesc">
              <Form.Label>description: </Form.Label>
              <Form.Control
                name="desc"
                type="Description"
                placeholder=""
                onChange={this.handleOnChange}
              />
            </Form.Group>

            <Link
              to={{
                pathname: "/WelcomePage",
                state: {
                  username: this.props.location.state.username,
                  itemname: this.state.itemname,
                  type: this.state.type,
                  desc: this.state.desc,
                },
              }}
            >
              <button variant="black" className="button">
                Add item
              </button>

              <div>cancel</div>
            </Link>
          </Form>
        </Container>
      </div>
    );
  }
}

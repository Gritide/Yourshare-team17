import React from "react";
import Container from "react-bootstrap/Container";
import "./SignupPage";
import Table from "react-bootstrap/Table";
import BorrowItemPage from "./BorrowItemPage";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import"../myFirebase"
//import * as ReactBootStrap from "react-bootstrap";
import "../style/welcomePage.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
//Dogu

export class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      borrow_Items: ["Bread", "Laptop", "Car", "PC", "Popcorn"],
      lenders: ["Dogu", "Juan", "Ayo", "Aditi", "Sam"],
      itemType: ["Kitchen", "Tech", "Auto", "Tech", "Kitchen"],
      description: [
        "A pretty great blender, the lid is a little loose.",
        "This is not laptop",
        "this is not a car",
        "this is not a PC",
        "this is not a popcorn",
      ],
    };
  }
  ad = () => {
    let { borrow_Items,  } = this.state;
    borrow_Items.push(this.props.location.state.itemname);
    let { itemType } = this.state;
    itemType.push(this.props.location.state.type);
    let { description } = this.state;
    description.push(this.props.location.state.desc);
    let { lenders } = this.state;
    lenders.push(this.props.location.state.username);
  };
  checker = () => {
    let { borrow_Items } = this.state;
    borrow_Items.push(this.props.location.state.save_item);
    let { itemType } = this.state;
    itemType.push(this.props.location.state.save_type);
    let { description } = this.state;
    description.push(this.props.location.state.save_desc);
    let { lenders } = this.state;
    lenders.push(this.props.location.state.save_lender);
  };
  
  items = () => {
    if (this.props.location.state.itemname != null) {
      this.ad();
    }
    if (this.props.location.state.save_item != null ) {
      this.checker();
    }
    
    return this.state.borrow_Items.map((item, index) => {
      return (
        <tr>
          <td>
            <Link
              to={{
                pathname: "/BorrowItemPage",
                state: {
                  borrow_Items: item,
                  lenders: this.state.lenders[index],
                  itemType: this.state.itemType[index],
                  description: this.state.description[index],
                  username: this.props.location.state.username,
                },
              }}
              style={{ textDecoration: "none", color: "black" }}
            >
              {item}
            </Link>
          </td>

          <td>{this.state.lenders[index]}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div id="welcomestyle">
        <Container>
          <h1>Welcome, {this.props.location.state.username}!</h1>
          <h1>{this.props.location.state.email}</h1>

          <div id="table">
            <div classname="link">
              <Table bordered responsive="md">
                <thead>
                  <tr>
                    <th>Items for borrowing</th>
                    <th>Lender</th>
                  </tr>
                </thead>
                <tbody>{this.items()}</tbody>
              </Table>
            </div>

            <div>
              <Table bordered responsive="md">
                <thead>
                  <tr>
                    <th>Your items</th>
                    <th>Lent to</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <em> Add your first item</em>
                    </td>
                    <td>
                      <em> A friend</em>
                    </td>
                  </tr>
                </tbody>
              </Table>

              <div id="button_style">
                <Link
                  to={{
                    pathname: "/AddItem",
                    state: {
                      borrow_Items: this.state.borrow_Items,
                      lenders: this.state.lenders,
                      itemType: this.state.itemType,
                      description: this.state.description,
                      username: this.props.location.state.username,
                    },
                  }}
                >
                  <button variant="black" className="button">
                    Add item
                  </button>
                </Link>

                <br></br>

                <Link
                  to={{
                    pathname: "/CommunityPage",
                    state: {
                      username: this.props.location.state.username,
                     
                    },
                  }}
                >
                  <button className="button">Manage Community</button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
export default WelcomePage;

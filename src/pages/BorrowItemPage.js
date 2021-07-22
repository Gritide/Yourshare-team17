//Aditi
import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import ArrowLeftCircle from "../images/ArrowLeftCircle_.png";
import "../style/BorrowItemPage.css";
import "../style/BorrowItemPage.css"
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";

import { WelcomePage } from "../pages/WelcomePage";

import { BrowseItems } from "../components/BrowseItems";
import blender from "../images/YS_blender.png"
import "../App.css"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";



export class BorrowItemPage extends React.Component {
  
    constructor(props){
        super(props);
        this.state = {
            
        };
        console.log(this.props.location.state.borrow_Items);
    }
    

  render() {
    return (
      <div id="style">
        <ReactBootStrap.Container>
          <div className="back_button">
            <Link
              to={{
                pathname: "/WelcomePage",
                state: {
                  username: this.props.location.state.username,
                  save_item: this.props.location.state.borrow_Items,
                  save_lender:this.props.location.state.lenders,
                  save_type: this.props.location.state.itemType,
                  save_desc:this.props.location.state.description
                },
              }}
            >
              <img src={ArrowLeftCircle} id="ArrowLeftCircle" alt="" />
            </Link>
            <h1>Borrow item</h1>
          </div>
          <Container>
            <div id="table">
              <ReactBootStrap.Table>
                <tbody>
                  <tr>
                    <td>
                      Item Name: {this.props.location.state.borrow_Items}{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>Type: {this.props.location.state.itemType} </td>
                  </tr>
                  <tr>
                    <td>Lender: {this.props.location.state.lenders} </td>
                  </tr>
                </tbody>
              </ReactBootStrap.Table>
            </div>
            <div id="table">
              <ReactBootStrap.Table bordered>
                <tbody>
                  <tr>
                    <td>{this.props.location.state.description}</td>
                  </tr>
                </tbody>
              </ReactBootStrap.Table>
              <div>
                <img id="icon" src={blender} />
              </div>
            </div>
          </Container>
          <div id="bottomButtons">
            <Link
              id="linkButNot"
              to={{
                pathname: "/WelcomePage",
                state: {
                  username: this.props.location.state.username,
                },
              }}
            >
              {" "}
              cancel
            </Link>

            <Link
              to={{
                pathname: "/WelcomePage",
                state: {
                  username: this.props.location.state.username,
                },
              }}
            >
              <button id="requestBtn">Request to Borrow</button>
            </Link>
          </div>
        </ReactBootStrap.Container>
      </div>
    );
}}
       

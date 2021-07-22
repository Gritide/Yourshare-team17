import React from "react";
import { pages } from "../App";
import  Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Table from "react-bootstrap/Table"
import {Button}from "@fluentui/react"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import ArrowLeftCircle from "../images/ArrowLeftCircle_.png"
import "../App.css"
export class CommunityPage extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      display: false,
      friends:[{name:"stacey",
              borrowed:"stove",
              lent:"None",
              bff:true},],
      preferences: [{active:true,message:"Text me when someone wants to borrow an item"},
                    {active:true,message:"Allow best friends to auto borrow without approval"},
                    {active:false,message:"Block friends of friends from seeing items."}],
    }
  }
  handleInputChang = (event)=>{
    
  }
  friends =() =>{
    return(
      this.state.friends.map((friend,index) =>{
        return (
          <tr>
            <td>{friend.name} </td>
            <td>{friend.borrowed}</td>
            <td>{friend.lent}</td>
            <td>
              <input
              name="Best Friends"
              type="checkbox"
              checked={friend.bffw}
              onChange={this.handleInputChange} />
            </td>
          </tr>
        );
      }
    ));
  }
  preferences = () =>{
    return(
      this.state.preferences.map((prefer,index)=>{
       return ( <label>
          
          <input 
            type = "checkbox"
            checked = {prefer.activew}
            />
             {prefer.message}
          </label>
      )
      })
    )
  }
  handleAddFriend = (event)=>{
    this.setState({
      display:!this.state.display
    })
  }
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
            <h1>Manage Community</h1>
          </div>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Friends</th>
                <th>Item Currently Borrowed</th>
                <th>Item Currently Lent</th>
                <th>Best Friend</th>
              </tr>
            </thead>
            <tbody>{this.props.location.state.friends}</tbody>
          </Table>

          <Button>{this.state.display?"Add Friend":"Cancel"} </Button>
          <div>{this.preferences()}</div>
        </Container>
      </div>
    );
  }
}
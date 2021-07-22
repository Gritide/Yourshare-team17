

import React from "react";
import Container from "react-bootstrap/Container";
import WelcomePage from "../pages/WelcomePage";
import Table from "react-bootstrap/Table";
import BorrowItemPage from "../pages/BorrowItemPage";
import "bootstrap/dist/css/bootstrap.min.css";
//import * as ReactBootStrap from "react-bootstrap";
import "../style/welcomePage.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


export class BrowseItems extends React.Component {

 constructor(props)
 {
   super(props);
   this.state = {
     borrow_Items: ["Bread", "Laptop", "Car", "PC", "Popcorn"],
     lenders: ["Dogu", "Juan", "Ayo", "Aditi", "Sam"],
     data:"hi"
   };
 }

 items = () => {
   return this.state.borrow_Items.map((item, index) => {
     return (
       <div>
         <WelcomePage value={this.state.data} />

         <WelcomePage lend={this.state.lenders[index]} />
       </div>
     );
   });
 };

render() {
    return <WelcomePage value={this.state.data} />
}
}
export default BrowseItems;
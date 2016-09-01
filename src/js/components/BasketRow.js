"use strict";

import React from "react";
import * as ProductActions from "../actions/ProductActions";

export default class Basket extends React.Component {
  
  removeProductFromBasket() {
    const { product } = this.props;
    ProductActions.removeProductFromBasket(product.id);
  } 

  render(){

    const { product , qty } = this.props;

    return(
      <tr><td>{product.title}</td><td>{qty}</td><td><a onClick ={this.removeProductFromBasket.bind(this)} >&#x2716;</a></td></tr>
    );
  }
}

import React from "react";

import BasketStore from "../stores/BasketStore";
import BasketRow from "./BasketRow";


export default class Basket extends React.Component {
  
  constructor(){
    super();
    this.state = {
      basket : { products : {}, totalPrice : 0},
    }
  }

  componentWillMount() {
    BasketStore.on("change", (i) => { this.setState ({ basket : BasketStore.getBasket()})});
  }

  render() {
    const { basket } = this.state;
    var productComponents = [];
    
    Object.keys(basket.products).forEach(function (key) {
      var product = basket.products[key].product;
      var qty     = basket.products[key].quantity;
      productComponents.push((<BasketRow key = {product.id} product = {product} qty= {qty} />));
    });  
    
    return (
      <aside class="basket">
        <h1>Basket</h1>

        <table class="products">
          <thead>
            <tr>
              <th>Product name</th>
              <th>qty</th>
            </tr>
          </thead>
          <tbody>
            {productComponents}
          </tbody>
        </table>

        <div class="total">
          <span class="label">Total: </span>
          <span class="amount">£{basket.totalPrice.toFixed(2)}</span>
        </div>
      </aside>
    );
  }
}
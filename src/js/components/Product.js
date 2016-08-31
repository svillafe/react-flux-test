import React from "react";
import * as ProductActions from "../actions/ProductActions";

export default class Product extends React.Component {
  
  addProductToBasket() {
    const { product } = this.props;
    ProductActions.addProductToBasket(product.id);
  }

  render() {
    const { product } = this.props;

    return (
      
      <article class="product_summary" data-product-id={product.id} data-product-price={product.price}>
        <img class="product_image" src={product.imgURL} alt="cufflinks" />
        <h1 class="product_title">{product.title}</h1>
        <span class="product_price">£{product.price}</span>
        <a class="add_to_basket" onClick ={this.addProductToBasket.bind(this)} >Add to Basket</a>
      </article>
    );
  }
}
	
"use strict";

import React from "react";

import Product from "../components/Product";
import Basket  from "../components/Basket";
import * as ProductActions from "../actions/ProductActions";
import ProductStore from "../stores/ProductStore";

export default class Products extends React.Component {
	
	constructor(){
		super();
		this.state = {
			products : [],
		}

	}

	componentWillMount() {
		ProductStore.on("change", (i) => { this.setState ({ products : ProductStore.getAll()})});
    ProductActions.loadProducts();
	}

	render() {
		const { products } = this.state;
		const ProductComponents = products.map((product , i) => { return <Product key = {i} product = {product}/>}); 
		
		return (
			<section class="main">
        <section class="product_summary_collection">
  				{ProductComponents}
        </section>
        <Basket/>
		  </section>			
		);
	}
}
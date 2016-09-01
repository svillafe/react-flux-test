"use strict";

import React from "react";

export default class Header extends React.Component {
	render() {
		return (
			<article class="test_instructions">
		      <h1>Add to Basket Test</h1>

		      <p>Using the components below, a customer should be able to add a product
		        to their basket.</p>

		      <p>Requirements:</p>

		      <ul>
		        <li>The basket total should be incremented by the price of the product
		          being added</li>
		        <li>The basket should show what products have been added</li>
		        <li>The basket should show the quantity of each product</li>
		        <li>The customer must be able to add a product to their basket multiple
		          times</li>
		        <li>The customer must be able to add a product to their basket in any
		          order</li>
		        <li>The solution should be flexible and well-structured so it can be
		          easily extended</li>
		        <li>Include a readme explaining the development decisions you made</li>
		      </ul>
		    </article>
		);
	}
}
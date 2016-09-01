"use strict";

import AppDispatcher from "../dispatcher/AppDispatcher";

export function addProductToBasket(productId){
  AppDispatcher.dispatch({
		type : "ADD_PRODUCT_BASKET",
		id   : productId
	})
}

export function removeProductFromBasket(productId){
	AppDispatcher.dispatch({
		type : "REMOVE_PRODUCT_BASKET",
    id   : productId 
	})
}

export function loadProducts(){
	
  
  // In order to retrieve products from a server we could do:
  // I notify the app that I start fetching products
  // AppDispatcher.dispatch({type : "FETCH_PRODUCTS"}); 
  //
  //$.get( "ajax/test.html", function( data ) {
  // I notify the app that I received the products
  //  AppDispatcher.dispatch({
  //      type : "RECEIVE_PRODUCTS", 
  //      products : data});
  // });
  
  AppDispatcher.dispatch({
    type : "RECEIVE_PRODUCTS", 
    products : [
		{
      id     : 1,
      price  : 45,
      imgURL : "images/cufflinks.jpg" ,
      title  : "Personalised cufflinks"
		},
		{
      id     : 2,
      price  : 19.95,
      imgURL : "images/tshirt.jpg",
      title  : "Kids T-shirt"
		}
  ]});
}

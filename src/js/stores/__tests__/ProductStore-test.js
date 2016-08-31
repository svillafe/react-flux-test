"use strict";

jest.dontMock('../ProductStore');

describe('ProductStore', function() {

  // mock actions 
	var actionLoadProducts = function(){
		var resp = {};
		resp.type = "RECEIVE_PRODUCTS";
		resp.products = [{
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
		},
		{
      id     : 3,
      price  : 29.20,
      imgURL : "images/chocolateBar.jpg",
      title  : "Star Wars Chocolate Bar"
		}];
		return resp;
	}

	// finish mock actions

	var AppDispatcher,
  		ProductStore,
  		dispatch;

  beforeEach(function() {
    AppDispatcher = require('../../dispatcher/AppDispatcher');
    ProductStore  = require('../ProductStore');
    dispatch      = AppDispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', function() {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  });

  it('should initializes with no products and load the products correctly', function() {  
    
    //Check that the basket's available products is empty
    expect(ProductStore.products.length).toBe(0);
    
    //Load mock products into products
    dispatch(actionLoadProducts());

    expect(ProductStore.products.length).toBe(3);
  });
});

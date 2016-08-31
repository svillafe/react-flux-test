"use strict";

jest.dontMock('../BasketStore');

describe('BasketStore', function() {

  // mock actions 
  var actionAddProductToBasket = function(productId){
    var resp  = {};
    resp.type = "ADD_PRODUCT_BASKET";
    resp.id   = productId;
    return resp;
  }

	var actionRemoveProductFromBasket = function(productId){
		var resp  = {};
		resp.type = "REMOVE_PRODUCT_BASKET";
		resp.id   = productId
		return resp;	
	}

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
  		BasketStore,
  		dispatch;

  beforeEach(function() {
    AppDispatcher = require('../../dispatcher/AppDispatcher');
    BasketStore   = require('../BasketStore');
    dispatch      = AppDispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', function() {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  });

  it('should initializes with no products in the basket', function() {  
    
    //Check that the basket's available products is empty
    expect(BasketStore.availableProducts.length).toBe(0);
    
    //Load mock products into availableProducts
    dispatch(actionLoadProducts());

    expect(BasketStore.availableProducts.length).toBe(3);
    expect(BasketStore.basketProducts).toEqual({});
    expect(BasketStore.totalPrice).toBe(0);
  });

  it('should add products correctly to the basket', function() {  
  	
  	//Load mock products into availableProducts
  	dispatch(actionLoadProducts());
  	
  	//Add one product to the basket
  	dispatch(actionAddProductToBasket(3));
    expect(BasketStore.availableProducts.length).toBe(3);
    expect(BasketStore.basketProducts[3].product.title).toBe("Star Wars Chocolate Bar");
    expect(BasketStore.totalPrice).toBe(29.20);

    //Add two more products of the same type to the basket
    dispatch(actionAddProductToBasket(3));
    dispatch(actionAddProductToBasket(3));
    expect(BasketStore.basketProducts[3].quantity).toBe(3);
    expect(BasketStore.totalPrice).toBe(87.6);

    //Add another type of product to the basket
    dispatch(actionAddProductToBasket(1));
    expect(BasketStore.basketProducts[1].quantity).toBe(1);
    expect(BasketStore.basketProducts[3].quantity).toBe(3);
    expect(BasketStore.totalPrice).toBe(132.6);
  });

  it('should remove products correctly', function() {  
    
  });

  it('should not allow to remove products that are not in the basket', function() {  
    
  });

  it('should not allow to add non available products', function() {  
    
  });

  it('should build the basket product correcly', function(){

  });
});

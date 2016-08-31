"use strict";

var EventEmitter  = require("events").EventEmitter;
var AppDispatcher = require('../dispatcher/AppDispatcher');

class BasketStore extends  EventEmitter{
	constructor() {
		super();
		this.availableProducts = [];
    this.basketProducts    = {};
    this.totalPrice        = 0;
	}

  getBasket() {
    return { products : this.basketProducts, totalPrice : this.totalPrice };
  }

  addProductToBasket(id){
    
    for(var i = 0; i < this.availableProducts.length ; i++){
      if(this.availableProducts[i].id == id){
        if(this.basketProducts[id] == undefined){
          this.basketProducts[id] = {};
          this.basketProducts[id].product = this.availableProducts[i];
          this.basketProducts[id].quantity = 0;
        }
        this.basketProducts[id].quantity++;
        this.totalPrice += this.basketProducts[id].product.price;
        break;
      }
    }
    return;
  }

  removeProductFromBasket(id){
    
    if(!this.basketProducts[id]){
      return;
    }
    var price = this.basketProducts[id].product.price;
    this.basketProducts[id].quantity--;
    if(this.basketProducts[id].quantity == 0){
      delete this.basketProducts[id];
    }
    this.totalPrice -= price;
    
    if(this.totalPrice <= 0){
      this.totalPrice = 0;
    }

    return;
  }

	handleActions(action) {
		switch(action.type){
			case "ADD_PRODUCT_BASKET" :
			 	this.addProductToBasket(action.id);
        this.emit("change");
			 	break;

      case "REMOVE_PRODUCT_BASKET" :
        this.removeProductFromBasket(action.id);
        this.emit("change");
        break;

      case "RECEIVE_PRODUCTS" :
        this.availableProducts = action.products;
        break;
		}

		return;
	}
}


const basketStore = new BasketStore;

AppDispatcher.register(basketStore.handleActions.bind(basketStore));

module.exports = basketStore;
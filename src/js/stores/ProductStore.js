"use strict";

var EventEmitter  = require("events").EventEmitter;
var AppDispatcher = require('../dispatcher/AppDispatcher');

class ProductStore extends  EventEmitter{
	constructor() {
		super();
		this.products = [];
	}

	getAll(){
		return this.products;
	}

	handleActions(action) {
		switch(action.type){
			case "RECEIVE_PRODUCTS" :
			 	this.products =action.products;
        		this.emit("change");
			 	break;
		}
		return;
	}
}


const productStore = new ProductStore;

AppDispatcher.register(productStore.handleActions.bind(productStore));

module.exports = productStore;
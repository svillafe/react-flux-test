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
	
  //AppDispatcher.dispatch({type : "FETCH_PRODUCTS"});
  //
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

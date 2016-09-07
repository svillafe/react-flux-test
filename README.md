Add To The Basket Test App

## Instructions to run the app:

1. Run `npm install`.

2. Run `npm test` to run the tests built using [jest](https://facebook.github.io/jest/).

3. Run `npm start` to run the app. The server will listen by default in the port `8080`.

4. In your browser go to `http://localhost:8080`.

##Stack selected:

This is a one-page app, so it can be implemented in many different ways. For instances using no extra library or framework (i.e. vanilla JS), using Angular JS, using React js, etc.


I chose React js + Flux architecture. I decided to go with this approach because React + Flux gives me the following advantages among others:

* Fast failing: When the developer makes a typo, React's JSX won't compile. As a result, the developer knows immediately when there is something wrong in the code.

* Virtual Dom: It is a simpler programming model and is has better performance than the real DOM.

 * Flexibility for any case: If the app is really simple, for example, one page without behavior, I can just use React. If the app is more complex, e.g. has entities, etc. I can choose to go with Flux, etc.


##App start flow:

1.- When you run `npm start`, `npm` runs the following command: `node server.js`.
2.- Inside `server.js` it is specified (using `expressJS`) that the file that must be returned in case of someone ask for the route: `/` is `index.html`
3.- Inside `./src/index.html` we can see that it is included `client.min.js` and `index.css`.
4.- If we look the file `webpack.config.js` we realise that `client.min.js` is the result of `webpack`.
5.- The input of `webpack` is `/src/client.js`.
6.- Inside `/src/client.js` it can be seen that we define the routes using `react-router` and we include the different react's components. 


##App Flow

This app was developed using flux architecture. Therefore, there are `actions`, `stores`, a `dispatcher` and `views`. In order to find more how these components interact with each other see this [link](https://facebook.github.io/flux/docs/overview.html).

##Extensibility

It is really easy to extend this app. Let's analyze the following cases:

###Add a new page

If you want to add a new page you just simply have to modify `client.js` to add the new route in the routes. Then add that page inside the `pages` folder. 

###Add a new type of product

If you want to add a new `type` of a product, first you have to modify the response from the API (or in the current case modify the products that are inside the `ProductActions.js` file). After that, you have to add a new component for this new type of product and call that component depending on the type. This called is done in the `Products.js` file.

###Retrieve the products from a server

In order to retrieve products from a backend, go to the `src/js/actions/ProductActions.js` file and uncomment the last lines of code. This lines first emit an event that notifies the app that new products are being fetched and then it notifies again when they have arrived.

#Project Structure

##Pages
It contains the different *"high level"* components. They represent the pages inside the app. In this case, there are only two. One is `Layout.js` that tells how to render a basic page (see `client.js` to see how Layout.js is invoke), and `Product.js` that is in charge of the *add-to-the-basket* page. If we see `client.js`, `Product.js` is displayed "inside" `Layout.js`.

##Dispatcher

##Actions
It contains the different actions that the objects pass trough the app.

##Components (Views)
They know how to show the data properly. There are two types, the ones that are inside the Layout folders that know how to draw the header and the footer and the ones that are related to the products and the basket. 

##Stores
`Stores` folder contains the application state and logic.

There are two stores. The simplest is Products and a more complex one is Basket. Inside the Basket Store, I decided to use an object with two properties to represent the current state of a basket. One property is the total price of the products in the basket and the other one is a dictionary (implemented in javascript as an object) that  contains the current products of the basket. An advantage of this approach is that it has the ability to update the amount of items of one product in O(1).
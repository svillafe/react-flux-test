import React 		from "react";
import styles   from "../../styles/main.css"

import Header  from "../components/layout/Header";
import Footer  from "../components/layout/Footer";


export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

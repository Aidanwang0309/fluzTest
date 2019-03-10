import React, { Component } from "react";
import "./App.css";
import SocialCarousel from "./pages/SocialCarousel/SocialCarousel";

class App extends Component {
  render() {
    return (
      <div className="SocialPage">
        <SocialCarousel />
      </div>
    );
  }
}

export default App;

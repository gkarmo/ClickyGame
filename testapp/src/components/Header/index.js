import React from "react";
import "./style.css";

class Header extends React.Component {

    state = {
        score: 0,
        topScore: 0
      };

render() {
  return (
    <div class="container">
      <div class="jumbotron jumbotron-fluid" id="jumbo-head">
        <div class="container">
          <h1 class="display-4 header-text">Animation Domination</h1>
          <p class="lead header-text">
            Click on an image to earn points, but don't click on any more than
            once!
          </p>
          <p class="header-text">Score: {this.state.score}</p>
          <p class="header-text">Top Score: {this.state.topScore}</p>
        </div>
      </div>
    </div>
  );
}

}

export default Header;
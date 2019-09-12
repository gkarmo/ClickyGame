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
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Animation Domination</h1>
          <p class="lead">
            Click on an image to earn points, but don't click on any more than
            once!
          </p>
          <p>Score:{this.state.score}</p>
          <p>Top Score:{this.state.topScore}</p>
        </div>
      </div>
    </div>
  );
}

}

export default Header;
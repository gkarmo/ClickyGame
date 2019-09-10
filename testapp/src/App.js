import React, { Component } from "react";
import Card from "./components/Cards";
import Wrapper from "./components/Wrapper";
import card from "./cards.json"

class App extends Component {

  state = {
    card
  };

  render() {
    return (
      <Wrapper>
        {this.state.card.map(cards => (
          <Card
            id={cards.id}
            key={cards.id}
            image={cards.image}            
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

import React, { Component } from "react";
import Card from "./components/Cards";
import Wrapper from "./components/Wrapper";
import card from "./cards.json"
// import Title from "./components/Title";
// import friends from "./friends.json";

class App extends Component {
  // // Setting this.state.friends to the friends json array
  state = {
    card
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
          <Card
          
          />
      </Wrapper>
    );
  }
}

export default App;

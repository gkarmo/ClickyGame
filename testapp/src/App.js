import React, { Component } from "react";
import Card from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import card from "./cards.json"

class App extends Component {

  state = {
    card,
  };
 
//   function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
// }

  render() {
    return (
     
      <Wrapper>
         <Header/>
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

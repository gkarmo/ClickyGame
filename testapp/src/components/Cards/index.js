import React from "react";
// import "./style.css";
// import image from "images.js"


function Card(props) {
    // Setting the initial state of the Counter component
    //     state = {
    //     images: []
    //   };
      
      
    //   componentDidMount = () => {
    //     const images = imageLoader()
    //     this.setState({images})
    //   };
    // The render method returns the JSX that should be rendered
    // render() {
      return (
        <main class="container">
        <div role="img" aria-label="click item" class="click-item">
          <div className="img-container">
            <img alt={props.id} src={props.image} />
          </div>        
        </div>
      </main>
      );
    // }
  }

export default Card;
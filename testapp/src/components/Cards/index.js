import React from "react";
import "./style.css";
import imageLoader from "../Images/images.js"


class Card extends React.Component {
    // Setting the initial state of the Counter component
    this.state = {
        images: []
      }
      
      
      componentDidMount() {
        const images = imageLoader()
        this.setState({images})
      }
    // The render method returns the JSX that should be rendered
    render() {
      return (
        <main class="container">
        <div role="img" aria-label="click item" class="click-item" style="background-image: url(&quot;/assets/images/gianthead.png&quot;);">
          <div className="img-container">
              {componentDidMount()}
          </div>        
        </div>
      </main>
      );
    }
  }

export default Card;
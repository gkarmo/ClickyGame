import React from "react";
import "./style.css";

function Card(props) {
      return (
        <div role="img" aria-label="click item" class="card img-container">
          <div className="img-container">
            <img alt={props.name} src={process.env.PUBLIC_URL + props.image} />
          </div>        
        </div>
      );
  }

export default Card;
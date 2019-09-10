import React from "react";
import "./style.css";

function Card(props) {
      return (
        <div role="img" aria-label="click item" class="card">
          <div className="img-container">
            <img alt={props.name} src={props.image} />
          </div>        
        </div>
      );
  }

export default Card;
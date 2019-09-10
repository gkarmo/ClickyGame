import React from "react";

function Card(props) {
      return (
        <main class="container">
        <div role="img" aria-label="click item" class="click-item">
          <div className="img-container">
            <img alt={props.id} src={props.image} />
          </div>        
        </div>
      </main>
      );
  }

export default Card;
import React, { useState } from "react";

function Tour({ id, image, info, name, price, removeTour }) {
  const [readMore, setReadMore] = useState(true);
  return (
    <div className="single-tour">
      <img src={image} alt={name} className="img" />
      <div className="tour-price">${price}</div>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{readMore ? `${info.substring(0, 200)}...` : info}</p>
        <button className="info-btn" onClick={() => setReadMore(!readMore)}>
          {readMore ? "read more" : "show less"}
        </button>
      </div>
      <button
        type="button"
        className="delete-btn btn-block btn"
        onClick={() => removeTour(id)}
      >
        not interested
      </button>
    </div>
  );
}

export default Tour;

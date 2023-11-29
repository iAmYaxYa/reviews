import React from "react";

const Review = ({ person, previous, next, random }) => {
  return (
    <div className="review">
      <div className="img-container">
        <img src={person?.image} alt={person?.name} className="person-img" />
        <span className="quote-icon"></span>
      </div>
      <h4 className="author">{person?.name}</h4>
      <h6 className="job">{person?.job}</h6>
      <p className="info">{person?.text}</p>
      <div className="btn-container">
        <button onClick={() => previous()} className="prev-btn">
          previous
        </button>
        <button onClick={() => next()} className="next-btn">
          next
        </button>
      </div>
      <button className="btn btn-hipster" onClick={random}>
        Surprise me
      </button>
    </div>
  );
};

export default Review;

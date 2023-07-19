import "./App.css";
import React, { useState } from "react";

const Rating = ({ stars, clickHandler }) => {
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleRatingHover = (rating) => {
    setHoveredRating(rating);
  };

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
    setIsClicked(true);
    if (clickHandler) {
      clickHandler(rating);
    }
    console.log("Ausgewähltes Rating:", rating); // Rating in der Konsole ausgeben
  };

  const renderStars = () => {
    const starIcons = [];
    const maxRating = stars || 5;

    for (let i = 1; i <= maxRating; i++) {
      const starClass =
        i <= (hoveredRating || selectedRating)
          ? "aktiver-Stern"
          : "leerer-Stern";

      starIcons.push(
        <span
          key={i}
          className={starClass}
          onMouseEnter={() => handleRatingHover(i)}
          onMouseLeave={() => handleRatingHover(0)}
          onClick={() => handleRatingClick(i)}
        >
          &#9733;
        </span>
      );
    }

    return starIcons;
  };

  return <div className="rating">{renderStars()}</div>;
};

export default Rating;

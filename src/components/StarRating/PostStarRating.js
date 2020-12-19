import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//populates the rating selector
export function PostStarRating({ rating }) {
   const stars = [
      { filled: false },
      { filled: false },
      { filled: false },
      { filled: false },
      { filled: false },
   ];

   for (let i = 0; i < rating; i++) {
      stars[i].filled = true;
   }

   return (
      <span className="postStarRating">
         {stars.map((star, index) => (
            <Star key={index} filled={star.filled} />
         ))}
      </span>
   );
}

function Star({ filled }) {
   const library = filled ? "fas" : "far";
   return <FontAwesomeIcon className="blue" icon={[library, "star"]} />;
}

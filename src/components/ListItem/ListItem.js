import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PostStarRating } from "../StarRating/PostStarRating";
import "./ListItem.css";

export default class PostListItem extends Component {
   render() {
      const { post } = this.props;

      return (
         <Link to={`/post/${post.id}`} className="postListItem">
            <div
               className="postListItem__image"
               style={{ backgroundImage: `url(${post.image})` }}
            />

            <div className="postListItem__details">
               <div className="postListItem__text">
                  <h2 className="postListItem__heading">{post.title}</h2>
                  <p className="postListItem__description">
                     {truncate(post.content)}
                  </p>
               </div>

               <div className="postListItem__reviews">
                  <PostStarRating rating={post.average_review_rating} />
                  <span id="postListItem__review-count">
                     {readableReviewCount(post.number_of_reviews)}
                  </span>
               </div>
            </div>
         </Link>
      );
   }
}

function readableReviewCount(number) {
   switch (number) {
      case 0:
         return "no reviews yet";

      case 1:
         return `based on 1 review`;

      default:
         return `based on ${number} reviews`;
   }
}

function truncate(text) {
   const words = text.split(" ");

   if (words.length > 10) {
      return words.slice(0, 10).join(" ") + " ...";
   }

   return text;
}

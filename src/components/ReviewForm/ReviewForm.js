import React, { Component } from "react";
import Context from "../../context/Context";
import ApiService from "../../services/api-service";
import { Button, Textarea } from "../utils/utils";
import "./ReviewForm.css";

export default class ReviewForm extends Component {
   static contextType = Context;

   handleSubmit = (ev) => {
      ev.preventDefault();
      const { post } = this.context;
      const { text, rating } = ev.target;

      ApiService.postReview(post.id, text.value, Number(rating.value))
         .then(this.context.addReview)
         .then(() => {
            text.value = "";
         })
         .catch(this.context.setError);
   };

   render() {
      return (
         <form className="ReviewForm" onSubmit={this.handleSubmit}>
            <div className="text">
               <Textarea
                  required
                  aria-label="Type a review..."
                  name="text"
                  id="text"
                  cols="30"
                  rows="3"
                  placeholder="Type a review.."
               ></Textarea>
            </div>

            <div className="select">
               <label htmlFor="rating">Rate this post!</label>
               <select
                  required
                  aria-label="Rate this post!"
                  name="rating"
                  id="rating"
               >
                  <option value="1">1 Star</option>
                  <option value="2">2 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="5">5 Stars</option>
               </select>
            </div>

            <Button type="submit">Post review</Button>
         </form>
      );
   }
}

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import postContext from "../context/Context";
import postApiService from "../services/api-service";
import { Hyph, Section } from "../components/utils/utils";
import { postStarRating } from "../components/StarRating/PostStarRating";
import ReviewForm from "../components/ReviewForm/ReviewForm";
import "./PostPage.css";

export default class postPage extends Component {
   static defaultProps = {
      match: { params: {} },
   };

   static contextType = postContext;

   componentDidMount() {
      const { postId } = this.props.match.params;
      console.log(this.props);
      console.log(this.props.match);
      console.log(this.props.match.params);
      console.log(postId);
      this.context.clearError();
      postApiService
         .getPosts(postId)
         .then(this.context.setpost)
         .catch(this.context.setError);
      postApiService
         .getPostsReviews(postId)
         .then(this.context.setReviews)
         .catch(this.context.setError);
   }

   componentWillUnmount() {
      this.context.clearpost();
   }

   renderpost() {
      const { post, reviews } = this.context;
      return (
         <>
            <div
               className="postPage__image"
               style={{ backgroundImage: `url(${post.image})` }}
            />
            <h2>{post.title}</h2>
            <postContent post={post} />
            <postReviews reviews={reviews} />
            <ReviewForm />
         </>
      );
   }

   render() {
      const { error, post } = this.context;
      let content;
      if (error) {
         content =
            error.error === `post doesn't exist` ? (
               <p className="red">post not found</p>
            ) : (
               <p className="red">There was an error</p>
            );
      } else if (!post.id) {
         content = <div className="loading" />;
      } else {
         content = this.renderpost();
      }
      return <Section className="postPage">{content}</Section>;
   }
}

function postContent({ post }) {
   return <p className="postPage__content">{post.content}</p>;
}

function postReviews({ reviews = [] }) {
   return (
      <ul className="postPage__review-list">
         {reviews.map((review) => (
            <li key={review.id} className="postPage__review">
               <p className="postPage__review-text">
                  <FontAwesomeIcon
                     size="lg"
                     icon="quote-left"
                     className="postPage__review-icon blue"
                  />
                  {review.text}
               </p>
               <p className="postPage__review-user">
                  <postStarRating rating={review.rating} />
                  <Hyph />
                  {review.user.full_name}
               </p>
            </li>
         ))}
      </ul>
   );
}

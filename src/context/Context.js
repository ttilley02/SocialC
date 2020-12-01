import React, { Component } from "react";

export const nullPost = {
  author: {},
  tags: []
};

const ThingContext = React.createContext({
  post: nullPost,
  reviews: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setPost: () => {},
  clearThing: () => {},
  setReviews: () => {},
  addReview: () => {}
});

export default ThingContext;

export class ThingProvider extends Component {
  state = {
    post: nullPost,
    error: null
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setPost = (post) => {
    this.setState({ post });
  };

  setReviews = (reviews) => {
    this.setState({ reviews });
  };

  clearThing = () => {
    this.setPost(nullPost);
    this.setReviews([]);
  };

  addReview = (review) => {
    this.setReviews([...this.state.reviews, review]);
  };

  render() {
    const value = {
      post: this.state.post,
      reviews: this.state.reviews,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setPost: this.setPost,
      setReviews: this.setReviews,
      clearThing: this.clearThing,
      addReview: this.addReview
    };
    return (
      <ThingContext.Provider value={value}>
        {this.props.children}
      </ThingContext.Provider>
    );
  }
}

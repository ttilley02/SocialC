import React, { Component } from "react";

export const nullPost = {
  author: {},
  tags: []
};

const postContext = React.createContext({
  post: nullPost,
  reviews: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setPost: () => {},
  clearpost: () => {},
  setReviews: () => {},
  addReview: () => {}
});

export default postContext;

export class postProvider extends Component {
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

  clearpost = () => {
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
      clearpost: this.clearpost,
      addReview: this.addReview
    };
    return (
      <postContext.Provider value={value}>
        {this.props.children}
      </postContext.Provider>
    );
  }
}

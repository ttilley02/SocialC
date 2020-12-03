import React, { Component } from "react";
import ListContext from "../context/ListContext";
import ApiService from "../services/api-service";
import { Section } from "../components/utils/utils";
import postListItem from "../components/ListItem/ListItem";

export default class PostListPage extends Component {
  static contextType = ListContext;

  componentDidMount() {
    this.context.clearError();
    ApiService.getposts()
      .then(this.context.setPostList)
      .catch(this.context.setError);
  }

  renderposts() {
    const { postList = [] } = this.context;
    return postList.map((post) => <postListItem key={post.id} post={post} />);
  }

  render() {
    const { error } = this.context;
    return (
      <Section list className="PostListPage">
        {error ? (
          <p className="red">There was an error, try again</p>
        ) : (
          this.renderposts()
        )}
      </Section>
    );
  }
}

import React, { Component } from "react";
import PostListContext from "../../contexts/ListContext";
import ApiService from "../../services/api-service";
import { Section } from "../../components/utils/utils";
import ThingListItem from "../../components/PostListItem/PostListItem";

export default class PostListPage extends Component {
  static contextType = PostListContext;

  componentDidMount() {
    this.context.clearError();
    ApiService.getThings()
      .then(this.context.setPostList)
      .catch(this.context.setError);
  }

  renderThings() {
    const { postList = [] } = this.context;
    return postList.map((post) => <ThingListItem key={post.id} thing={post} />);
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

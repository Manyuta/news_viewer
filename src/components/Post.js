import React, { Component } from "react";
import axios from "axios";
import config from "../config";

const API_KEY = config.API_KEY;
const API_URL = "https://newsapi.org";

class Post extends Component {
  state = {
    post: null
  };
  componentDidMount() {
    const title = this.props.match.params.title;

    axios
      .get(
        `${API_URL}/v2/top-headlines?" +
          "country=us&" +
          "apiKey=${API_KEY}`
      )
      .then(res => {
        this.setState({
          post: res.data.articles.find(x => x.title === title)
        });
      });
  }
  render() {
    const post = this.state.post ? (
      <div className="post">
        <a href={this.state.post.url} rel="noopener noreferrer" target="_blank">
          <h4 className="center">{this.state.post.title}</h4>
        </a>
        <p>{this.state.post.content}</p>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );
    return <div className="container">{post}</div>;
  }
}

export default Post;

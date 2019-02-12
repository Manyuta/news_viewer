import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  state = {
    post: null
  };
  componentDidMount() {
    console.log(this.props);
    const title = this.props.match.params.title;
    // console.log(title);
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?" +
          "country=us&" +
          "apiKey=dd300d72e4224e4bb9e3dc1d5bf1c183"
      )
      .then(res => {
        //console.log(res);
        //  console.log(res.data.articles.find(x => x.title === title));
        this.setState({
          post: res.data.articles.find(x => x.title === title)
        });
      });
  }
  render() {
    const post = this.state.post ? (
      <div className="post">
        <a href={this.state.post.url} target="_blank"><h4 className="center">{this.state.post.title}</h4></a>
        <p>{this.state.post.content}</p>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );
    return <div className="container">{post}</div>;
  }
}

export default Post;

import React, { Component } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";

class Home extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=dd300d72e4224e4bb9e3dc1d5bf1c183"
      )
      .then(res => {
        //  console.log(res);
        this.setState({
          posts: res.data.articles.slice(0, 10)
        });
      });
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.url}>
            <img src={post.urlToImage} alt="news image" />
            <div className="card-content">
              <NavLink to={"/" + post.title}>
                <span className="card-title red-text">{post.title}</span>
              </NavLink>
              <div>{post.description}</div>
              <a href={post.url} target="_blank">
                <span className="right-align">Read more...</span>
              </a>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts yet</div>
    );
    return (
      <div className="container home">
        <h4 className="center">Home Page</h4>
        <div>{postList}</div>
      </div>
    );
  }
}

export default Home;

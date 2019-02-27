import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import config from "../config.js";


const API_KEY = config.API_KEY;
const API_URL = "https://newsapi.org";

class Home extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios
      .get(`${API_URL}/v2/top-headlines?country=us&apiKey=${API_KEY}`)
      .then(res => {
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
            <img src={post.urlToImage} alt="post" />
            <div className="card-content">
              <NavLink to={"/" + post.title}>
                <span className="card-title red-text">{post.title}</span>
              </NavLink>
              <div>{post.description}</div>
              <a href={post.url} rel="noopener noreferrer" target="_blank">
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
        <div>{postList}</div>
      </div>
    );
  }
}

export default Home;

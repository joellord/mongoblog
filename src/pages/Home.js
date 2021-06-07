import React, { Component } from "react";

import { getPosts } from "../utils/realm";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    async componentDidMount() {
        const posts = await getPosts();
        this.setState({posts});
    }

    render() {
        return(
            <div>
                <h1>Home page</h1>
                {this.state.posts.map((post, index) => {
                    return (
                        <div key={index}>
                            <h2>{post.title}</h2>
                            <h3>by: {post.author.name}</h3>
                            <p>{post.content}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Home;
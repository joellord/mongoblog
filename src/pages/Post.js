import React, { Component } from "react";

import { addPost, authenticate } from "../utils/realm";

import * as Realm from "realm-web";
const app = new Realm.App({id: "blog-ovrfr"});
const creds = Realm.Credentials.anonymous();
let mongodb = app.currentUser.mongoClient("mongodb-atlas");
let blog = mongodb.db("blog").collection("blog");

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: ""
        };

        this.titleChanged = this.titleChanged.bind(this);
        this.contentChanged = this.contentChanged.bind(this);
        this.addPost = this.addPost.bind(this);
    }

    async componentDidMount() {
    }

    titleChanged(e) {
        this.setState({title: e.target.value});
    }

    contentChanged(e) {
        this.setState({content: e.target.value});
    }

    async addPost() {
        let result = await addPost(this.state.title, this.state.content);
        console.log(result);

        this.setState({title: "", content: ""});
    }

    async authenticate() {
        authenticate("joelphy@gmail.com", "123123");
    }

    render() {
        return(
            <div>
                <div>
                    (<button type="button" onClick={this.authenticate}>Authenticate</button>)
                </div>
                <h1>New Post</h1>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" onChange={this.titleChanged} />
                <br/>
                <label htmlFor="content">Content</label>
                <textarea name="content" onChange={this.contentChanged}></textarea>
                <br/>
                <button type="button" onClick={this.addPost}>Add new post</button>
            </div>
        )
    }
}

export default Post;
import axios from 'axios';
import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedPost: {}
        }
    }

    componentDidUpdate() {
        let url = `https://jsonplaceholder.typicode.com/posts/${this.props.postClicked}`
        axios.get(url)
            .then(response => this.setState({selectedPost: response.data}))
            .catch(error => console.log(error))
    }

    render () {
        let post = <p>Please select a Post!</p>;
        post = (
            <div className="FullPost">
                <h1>Title</h1>
                <p>Content</p>
                <div className="Edit">
                    <button className="Delete">Delete</button>
                </div>
            </div>

        );
        return post;
    }
}

export default FullPost;
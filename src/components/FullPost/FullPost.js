import axios from 'axios';
import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedPost: null
        }
    }

    componentDidUpdate() {
        let url = `https://jsonplaceholder.typicode.com/posts/${this.props.postClicked}`
        if(this.state.selectedPost === null || this.props.postClicked !== this.state.selectedPost.id) {
            axios.get(url)
            .then(response => {
                this.setState({selectedPost: response.data})
            })
            .catch(error => console.log(error))
        }
    }

    onDeletePostHandler = (id) => {
        // Reuest for delete
        let url = `https://jsonplaceholder.typicode.com/posts/${id}`
        axios.delete(url)
            .then(response => console.log('Response from the API', response))
            .catch(err => console.log(err))
    }

    render () {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if(this.props.postClicked) {
            post = <p style={{ textAlign: 'center' }}>Loading...</p>;
        }
        if(this.state.selectedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.selectedPost.title}</h1>
                    <p>{this.state.selectedPost.body}</p>
                    <div className="Edit">
                        <button onClick={() => this.onDeletePostHandler(this.props.postClicked)} className="Delete">Delete</button>
                    </div>
                </div>
            );
        }
        
        return post;
    }
}

export default FullPost;
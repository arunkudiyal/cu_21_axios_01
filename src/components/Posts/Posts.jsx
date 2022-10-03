import React, { Component } from "react";

import Post from "../Post/Post";
import axios from 'axios'

class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            selectedPostId: null
        }
    }

    componentDidMount() {
        // HTTP Request
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                let postData = response.data
                postData.splice(8)
                this.setState({ posts: postData })
            })
            .catch(error => console.log(error))
    }

    onClickPostHandler = (id) => {
        this.setState( {selectedPostId: id} )
    }

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {
                    this.state.posts.map(post => {
                        return <Post 
                                key={post.id}
                                clicked={() => this.onClickPostHandler(post.id)}
                                title={post.title} />
                    })
                }
            </div>
        );
    }
}
export default Posts;
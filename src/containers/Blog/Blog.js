import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

import axios from 'axios'

class Blog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
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

    render () {
        return (
            <div>
                <section className="Posts">
                    { 
                        this.state.posts.map(post => 
                            <Post 
                                key={post.id}
                                title={post.title} />) 
                    }
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
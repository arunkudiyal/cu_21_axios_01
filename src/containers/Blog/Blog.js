import React, { Component } from 'react';

import { Link, Routes, Route } from 'react-router-dom'

import Home from '../../components/Home/Home'
import Posts from '../../components/Posts/Posts';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div>
                <div>
                    <nav>
                        <ul style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none' }}>
                            <li>
                                <a style={{ textDecoration: 'none' }} href="/">Home</a>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none' }} to="/posts">Posts</Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none' }} to="/new-post">New Post</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <hr />
                <div>
                    {/* v.5 --> <Route path='/posts' component={Posts} /> */}
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/posts' element={<Posts />} />
                        <Route path='/new-post' element={<NewPost />} />
                    </Routes>

                    {/* <section className="Posts">
                        <Posts />
                    </section>
                    <section> */}
                        {/* <FullPost postClicked={this.state.selectedPostId} /> */}
                    {/* </section>
                    <section>
                        <NewPost />
                    </section> */}
                </div>
            </div>
        );
    }
}

export default Blog;
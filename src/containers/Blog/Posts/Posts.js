import axios from '../../../axios';
import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
import './Posts.css';
import { Route } from 'react-router';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: [],
        selectedPosstId: null,
        error: false,
    }

    postSelectedHandler = (id) => {
        // Navigate programmatically, navigation basically is a stack of pages
        this.props.history.push({ pathname: '/posts/' + id })
        // or: this.props.history.push('/posts/' + id)
    }

    componentDidMount() {
        console.log(this.props);
        axios.get('/posts')
            .then((res) => {
                const posts = res.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                })
                this.setState({ posts: updatedPosts });
            })
            .catch((err) => {
                this.setState({ error: true });
                console.log(err);
            })
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    //<Link key={post.id} to={'/posts/' + post.id}>
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}
                    />
                    //</Link>
                )
            })
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        )
    }
}

export default Posts;

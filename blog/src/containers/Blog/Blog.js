import React, { Component } from 'react';
import './Blog.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost')
});

class Blog extends Component {

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    to='/posts/'
                                    exact
                                    activeClassName='my-active'
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration: 'underline'
                                    }}
                                >Home</NavLink>
                            </li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: 'start=5'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>

                <Switch>
                    <Route path='/new-post' component={AsyncNewPost} />
                    <Route path='/posts' component={Posts} />
                    <Redirect from='/' to='/posts' />
                </Switch>
            </div>
        );
    }
}

export default Blog;
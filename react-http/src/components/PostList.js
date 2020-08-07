import React, { Component } from 'react'
import axios from 'axios';

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             errorMssg: ''
        }
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState({posts: response.data})
        })
        .catch(error => {
            this.setState({errorMssg: 'Error retreving data'})
        })
    }

    render() {
        const { posts, errorMssg } = this.state;
        return (
            <div>
                PostList
                {
                    posts.length ? 
                    posts.map(post => <div id = {post.id}>{post.title}</div>) :
                    null
                }
                { errorMssg ? <div>{errorMssg}</div> : null }
            </div>
        )
    }
}

export default PostList

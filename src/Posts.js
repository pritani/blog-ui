import React from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
class Posts extends React.Component{
    constructor(){
        super()
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        Axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(response=>{
            const posts=response.data
            this.setState({posts})
        })
        .catch(err=>{
            alert(err)
        })
    }
render(){
    return(
        <div>
<h1>TOTAL POST:{this.state.posts.length}</h1>
<ul>
    {this.state.posts.map(post=>{
        return<li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
    })}
</ul>
        </div>
    )
}
}
export default Posts
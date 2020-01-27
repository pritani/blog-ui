import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
class UserShow extends React.Component{
    constructor(){
        super()
        this.state={
            users:{},
            posts:[]
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response=>{
            const users=response.data
            console.log(users)
            this.setState({users})
        })
        
            axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(response=>{
                let posts=response.data
                console.log(posts)
                this.setState({posts})
            })
            .catch(err=>{
                alert(err)
            })
        }
    render(){
        return(
            <div>
                <h2>USER NAME:{this.state.users.name}</h2>
                <h3>POST WRITTEN BY USER</h3>
                <h2>Post List-{this.state.posts.length}</h2>
                <ul>
                    {this.state.posts.map(post=>{
                        return<li key={post.id}><Link to={`/posts/${post.userId}`}>{post.title}</Link></li>
                    })}
                </ul>
            </div>
        )
    }
}
export default UserShow
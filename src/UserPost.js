import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class UserPost extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            title:'',
            body:'',
            comments:[],
            userId:''
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>{
            let title=response.data.title
            this.setState({title})
        })
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response=>{
                let body=response.data.body
            this.setState({body})
            })

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>{
            let userId=response.data.userId 
            console.log(userId)
                this.setState({userId})
        })
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>{
            let userId=response.data.userId
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response=>{
            console.log(this.state.userId)
            let name=response.data.name
            console.log(name)
            this.setState({name})
        })
    })
        
            axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then((response)=>{
                let comments=response.data
                console.log(comments)
                this.setState({comments})
            })
            .catch(err=>{
                alert(err)
            })
        }
    
    render(){
        const id=this.props.match.params.id
        return(
            <div>
                <h2>USER NAME: {this.state.name} </h2>
                <h3>TITLE:{this.state.title}</h3>
                <h3>BODY:{this.state.body}</h3>
                <hr/>
                <h2>COMMENTS</h2>
           <h3>no of comments-{this.state.comments.length}</h3>
           <ul>
               {this.state.comments.map(com=>{
                   return <li key={com.id}>{com.body}</li>
               })}
               </ul>
               <hr/>
               <h4><Link to={`/users/${this.state.userId}`}>More posts of author:{this.state.name}</Link></h4>
           
            </div>
        )
    }
}
export default UserPost
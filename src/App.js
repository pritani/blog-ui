import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'

import Home from './Home' 
import Users from './Users'
import Posts from './Posts'
import UserShow from './UserShow'
import UserPost from './UserPost'
function App(props){
    return(
        <BrowserRouter>
        <div>
           <Link to="/" >Home</Link>
           <Link to="/users">Users</Link>
           <Link to="/posts">Posts</Link>
           <Route path="/home" component={Home}></Route>
           <Route path="/users" component={Users} exact={true}></Route>
           <Route path="/posts" component={Posts} exact={true}></Route>
           <Route path="/users/:id" component={UserShow}></Route>
           <Route path="/posts/:id" component={UserPost}></Route>
        </div>
        </BrowserRouter>
    )
}
export default App
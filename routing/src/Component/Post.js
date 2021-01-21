import React from 'react';
import {Link} from 'react-router-dom'
const Post = (props) => {
    console.log("inside post",props)
    return(
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h2>Post Page</h2>
            </div>
           <div className="panel-body">
               <p>Post is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
               <h2>JavaScript</h2>
               <Link to="/post/JavaScript?page=1">Details</Link>
               <h2>Node</h2>
               <Link to="/post/Node?page=2">Node</Link>
               <h2>React</h2>
               <Link to="/post/React?page=3">React</Link>
           </div>
        </div>
    )
}

export default Post;
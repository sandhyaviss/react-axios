import React,{Component} from 'react';
import './FullPost.css';
import axios from 'axios';

class FullPost extends Component{
   state={
       loadedPost: null
          }

   componentDidUpdate(){
       if(this.props.id)
       { if(!this.state.loadedPost ||(this.state.loadedPost && this.state.loadedPost.id!==this.props.id))
        { 
         let posts = axios.get("/posts/"+this.props.id)
                .then( (response) =>{ this.setState({loadedPost:response.data});}  );
          
        }
    }    }
     
     deleteHandler=()=>{
        axios.delete("/posts/"+this.props.id)
        .then(response => console.log(response));
     }

    render(){
        let post= <p style={{textAlign:'center'}}>please select a  post</p>
            if(this.props.id){
                post= <p style={{textAlign:'center'}}>Loading...</p>
            }
            if(this.state.loadedPost)
            {
            post=(
              <div className="FullPost">
                <h2>{this.state.loadedPost.title}</h2>
                <div>{this.state.loadedPost.body}</div>
                <button onClick={this.deleteHandler}> Delete</button>
                </div>
            );}
              return post;
            }
}

export default FullPost;
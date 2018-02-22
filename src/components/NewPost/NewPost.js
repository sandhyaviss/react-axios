import React,{Component} from 'react';
import axios from 'axios';
import './NewPost.css';


class  NewPost extends Component{
     state={
         postTitle: null,
         postContent: null,
         postAuthor: 'Ravi',
     }

     postDataHandler= () => {
         const data = {
             title: this.state.postTitle,
             body: this.state.postContent,
             author:this.state.postAuthor
         };
         axios.post("/posts/",data)
               .then(response =>{console.log(response);});
     };

     changeHandler=(e) =>{
         this.setState({ postTitle:e.target.value });
         console.log(e.target.value);
     }

     changeContentHandler=(e)=>{
         this.setState({ postContent: e.target.value});
     }
     
     changeAuthorHandler=(e)=>{
         this.setState({ postAuthor: e.target.value });
     }


    render(){
        return(
            <div className="NewPost">
                <h2 >Add a Post</h2>
                <label style={{"fontWeight": "bold"}}>Title</label >
                <div className="divTitle" > 
                <input type="text" onChange={(e)=> this.changeHandler(e)} value={this.state.postTitle}>
                </input></div>
                 <label style={{"fontWeight": "bold"}}>Content</label>
                 <div  className="divContent">
                 <textarea rows='4' value={this.state.postContent} onChange={(e)=>this.changeContentHandler(e)}>

                 </textarea>
                 </div>
                 <label style={{"fontWeight": "bold"}}>Author</label >
                 <select className="divAuthor" value={this.state.postAuthor} onChange={(e)=>this.changeAuthorHandler(e)}>
                   <option value="Ravi">Ravi</option>
                   <option value="Susmi">Susmi</option>
                 </select>
                 <button onClick={this.postDataHandler}> Add Post </button>
             </div>
        );
    }



} 

export  default NewPost; 
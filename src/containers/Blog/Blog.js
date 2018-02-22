import React,{Component} from 'react';
import Post from '../../components/Post/Post';
import NewPost from '../../components/NewPost/NewPost';
import FullPost from '../../components/FullPost/FullPost';
import './Blog.css';
import axios from '../../axios';

class Blog extends Component{
      state={
          posts :[],
          postSelectedId: null,
          error:false
      }

      componentDidMount(){
        axios.get("/posts")
        .then((response)=>{
            const posts= response.data.slice(0,4);
        const updateposts= posts.map((post)=>{
                    return{  ...post,
                       author: 'Ravi'}
        });
         this.setState({posts:updateposts});
        })
        .catch(error =>{//console.log(error); 
          this.setState({error:true});
        });
     }  


      selectHandler=(id)=>{
          console.log("in selector");
          this.setState({postSelectedId:id});
          }


       
    render(){
  
        let  postItem=<p>something went wrong</p>    
    
     if(!this.state.error){
     postItem= this.state.posts.map((post)=>{

          return  <Post key={post.id} Title={post.title}
           Author={post.author} 
           select={()=>this.selectHandler(post.id)} />
        });
    }
        return(
            <div>
                 <section className="BlogPost">
                     {postItem}
                 </section>
                 <section>
                  <FullPost id={this.state.postSelectedId} posts={this.state.posts}/>
                </section>
                <section>
                    {}
                    <NewPost/>
                    </section>
                              
            </div>
        );

    }
}

export default Blog;
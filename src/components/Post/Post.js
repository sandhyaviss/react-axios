import React from 'react';
import './Post.css';

const post =( props) =>{
    return (
        <article className="Post" onClick={props.select}>
          <h3>{props.Title}</h3>
           <p style={{ "color": "gray"}}>{props.Author}</p>
        </article>
    );

}
export default post;
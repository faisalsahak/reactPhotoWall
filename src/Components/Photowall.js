import React from 'react';
import Photo from './Photo';
import {Link} from 'react-router-dom';


function Photowall(props){
    return(
        <div>
          <Link to="/AddPhoto" className="addIcon" > Click Me </Link>
          <div className="photoGrid">
              {props.posts
                .sort(function(x,y){
                  return y.id-x.id;
                })
                .map((post, key)=><Photo key={key} post={post}
               onRemovePhoto={()=>props.onRemovePhoto(key)}
               />)}
          </div>
        </div>
        )
}


export default Photowall;
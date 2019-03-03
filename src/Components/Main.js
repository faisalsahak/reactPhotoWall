import React, {Component} from 'react';
import Title from './Title';
import PhotoWall from './Photowall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom'


class Main extends Component{

  constructor(){
    super();
    this.state={
        num: 3,
        posts:[],
        screen: "main"
    }
  }

  componentDidMount(){
    const data = simulatedatabaserequest();
    this.setState({posts: data});

  }



  removepost = (index)=>{
    const posts = [...this.state.posts];
    posts.splice(index,1);
    this.setState({posts: posts})
    console.log("remove button clicked");
    console.log(index);
  }

  changepage = ()=>{
    let string  = this.state.screen;
   string = ( string === "main"? "pic": "main")
    this.setState({screen:string});
  }

  addphoto=(post)=>{
    let posts = [...this.state.posts];
    posts.push(post);
    this.setState({posts: posts});
    console.log('photo added...');
    console.log(this.state.posts.length);
  }



  render(){
    return(
      <div>
        <Route exact path="/" render={()=>(
          <div>
            <Title title={"PhotoWall"} />
            <PhotoWall posts={this.state.posts} onRemovePhoto={(index)=>this.removepost(index)} changePage={this.changepage} />
          </div>

        )} />
        <Route path="/AddPhoto" render={({history})=>(
          <div>
            <AddPhoto changePage={this.changepage} onAddPhoto={(post)=>{
              this.addphoto(post);
              history.push('/');
            }}/>
          </div>

        )} />

      </div>
      )
        // <Route path="/AddPhoto" component={AddPhoto} />
  }
}

  function simulatedatabaserequest(){
    return ([
          {id: 1, description: "beach", imageLink: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
          {id: 2, description: "birds", imageLink: "https://www.gettyimages.ca/gi-resources/images/500px/983794168.jpg"},
          {id: 3, description: "space", imageLink: "https://i.kinja-img.com/gawker-media/image/upload/s--BzabpMt8--/c_scale,fl_progressive,q_80,w_1600/c5icthjpizqjcftrywsc.jpg"}
          ]);
  }


export default Main;

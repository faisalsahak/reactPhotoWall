import React, {Component} from 'react';



class AddPhoto extends Component{
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    const link = event.target.link.value;
    const description = event.target.description.value;
    const post = {
      id: Number(new Date()),
      description: description,
      imageLink: link
    }
    if(link && description){
      this.props.onAddPhoto(post);
    }
    // console.log(this.state)
  }

  render(){
    return <div className="form">
            <h1> PhotoWall</h1>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="link" name="link"/>
              <input type="text" placeholder="description" name="description" />
              <button> Post </button>
            </form>
          </div>
  }
}

export default AddPhoto;
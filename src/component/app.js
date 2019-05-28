import React, { Component } from 'react'
import SearchBar from './SearchBar';
import youtube from '../component/apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';



export default class app extends Component {


    state = {videos:[ ],selectedVideo:null};

    componentDidMount(){
      this.onTermSubmit('avenger');
    
    }

    onTermSubmit = async term =>{

    const response = await youtube.get('/search',{
           params:{
               q:term,
           }
       })
       this.setState({videos:response.data.items,selectedVideo:response.data.items[0]});
       
     
   
    }

    onVideoSelect=(video)=>{
      this.setState({selectedVideo:video})
    }

  render() {
    return (
      <div className='ui container'>
        <SearchBar TermSubmit={this.onTermSubmit}/>
        <div className='ui grid'>
          <div className='ui row'>
          <div className='eleven wide column'>
          <VideoDetail video={this.state.selectedVideo}/>
          </div>
          <div className='five wide column'>
          <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

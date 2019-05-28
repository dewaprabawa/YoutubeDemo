import React, { Component } from 'react'
import './VideoItem.css';

export default class VideoItem extends Component {
  render() {
      const{video,onVideoSelect}=this.props;
    return(<div onClick={()=>{onVideoSelect(video)}} className='video-item item'>
        <img alt={video.snippet.title} className='ui image' src={video.snippet.thumbnails.medium.url}/>
        <div className='content'>
        <div className='header'>
        {video.snippet.title}
        </div>
        </div>
      
    </div>)
  }
}

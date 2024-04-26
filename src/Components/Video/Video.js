import React from 'react'
import {AiFillEye} from 'react-icons/ai'

export const Video = () => {
  return (
    <div className="video">
      <div className="video_top">
        <img src='' alt=''/>
        <span>05:43</span>
      </div>
      <div className="video_title">Create App in just 5 mins
      </div>
      <div className="video_details">
        <span><AiFillEye /> 5M </span>
        <span>&bull; 6 Days Ago</span>
        </div>
      <div className="video_channel">
        <img src='' alt='' />
        <span>Naruto Uzamaki</span>
      </div>
    </div>
  )
}

export default Video;
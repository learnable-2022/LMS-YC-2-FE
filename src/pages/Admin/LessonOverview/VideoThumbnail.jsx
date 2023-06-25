import React, { useState, useEffect } from 'react';
import VideoThumbnail from 'react-video-thumbnail'
import styles from './lessonOverview.module.css';

const ThumbnailGenerator = ({ videoUrl }) => {
  
  return (
    <div className = {styles.thumbnailImg}>
      <VideoThumbnail
        videoUrl= {videoUrl}
        thumbnailHandler={(thumbnail) => console.log(thumbnail)}
        />
    </div>
  );
};

export default ThumbnailGenerator;

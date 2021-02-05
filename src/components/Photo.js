import React from 'react';

/**create a link to flickr, to show and load the pictures */

const Photo = (props) => (
    <li>
        <img src={`https://farm${props.farmId}.staticflickr.com/${props.serverId}/${props.photoId}_${props.secretId}.jpg`} alt= {`${props.title}`}/>
  </li>    
);

export default Photo;


import React from 'react';
import Photo from './Photo';

/** Maps over the data which was given by props, and create the Photo comp. for each iteration.  */

const PhotoContainer = props =>  {
  const results = props.data;
  let photos;

  if(results.length >0) {
    photos = results.map(photo => 
      <Photo key = {photo.id} farmId = {photo.farm} serverId = {photo.server} secretId = {photo.secret} title={photo.title} photoId= {photo.id} />)
  }


    
        return(

          <div className="photo-container">
            <h2>Results</h2>
              <ul>

                {photos}
                
              </ul>
          </div>                  


        );
    
}


export default PhotoContainer;
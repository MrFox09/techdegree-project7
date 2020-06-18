import React from 'react';

/** appears when the url matches a non-existing route */

const pageNotFound = () => {
    return(

        <div className="photo-container">
        <h2>ERROR</h2>
        <ul>
          <li className="not-found">
            <h3>404</h3>
            <p>We are sorry. Page not found.</p>
          </li>
        </ul>
      </div>
    );

}

export default pageNotFound;
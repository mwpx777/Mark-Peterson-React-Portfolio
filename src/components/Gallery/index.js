// GALLERY

import React from 'react';
import PhotoList from '../PhotoList';

function Gallery(props) {
    const {currentCategory} = props;  // {"name":"Web Dev"}
    console.log(currentCategory.name);
    return( 
        <section>
            <h1> {(currentCategory.name)} </h1>
            <p>{currentCategory.description}</p>
            {currentCategory.name == 'Web Dev' ? (
                <div>Web dev chosen</div>
            ) : (
                <div>graphic design chosen</div>
            )}
            {/* <PhotoList category={currentCategory.name} /> */}
        </section>
    )
}

export default Gallery;
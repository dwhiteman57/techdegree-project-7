import React from 'react';
import Photo from './photo';
import NotFound from './notFound';


const PhotoGallery = props => {
    const results = props.data;

    let photos;
    if (results.length > 0) {
        photos = results.map(photo => 
            <Photo 
                key={photo.id}
                url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                alt={photo.title}
                />
        );
    } else {
        photos = <NotFound />
    }


    return (
        <div className="photo-container">
            <h2>Results for {props.text}</h2>
                <ul>
                    {photos}
                </ul>
        </div>
    );
}

export default PhotoGallery;

import React from 'react';

export const GifGridItem = ({ id ,title, url }) => {

    return (

        <div className='card animate__fadeIn__delay-20s'>
            <img src={url} alt={title} />
            <p> {title}</p>
        </div>
    )
};



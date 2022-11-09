import React from 'react';

const Carouselitem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='img-gradient'>
                <img src={image} className="w-full rounded-lg" alt='' />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
                <h1 className='text-5xl font-bold text-white md:normal-case'>Your Free <br />Weeding Website <br /> and much more.</h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2 w-1/2 mt-2">
                <p className='text-white text-xl font-bold '>Looking for a wedding photographer? We approach weddings in a documentary and artistic way, trying to tell the story of your day honestly and unobtrusively. Our images are warm, romantic, and intimate. We hope to give you images that make you feel, not just see. </p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4">
                <button className="btn btn-warning mr-5">Show More</button>
                <button className="btn btn-warning btn-secondary">Our Service</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default Carouselitem;
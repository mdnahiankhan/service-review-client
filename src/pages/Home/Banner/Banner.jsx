import React from 'react';
import img1 from '../../../assets/banner/img-1.jpg';
import img2 from '../../../assets/banner/img-2.jpg';
import img3 from '../../../assets/banner/img-3.jpg';
import img4 from '../../../assets/banner/img-4.jpg';
const Banner = () => {
    return (
        <div className="carousel w-full rounded-xl">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='gradient-overlay'>
                    <img src={img1} className="w-full" alt='' />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
                    <h1 className='text-5xl font-bold text-white '>Your Free <br />Weding Website <br /> and much more</h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2 w-1/2">
                    <p className='text-white text-xl font-bold '>Create a golden memory in one frame .Bind the time to see future to create some memory enjoyable and joyus. Keeps some great time which gives you happy moment and memorable time. </p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4">
                    <button className="btn btn-warning mr-5">Show More</button>
                    <button className="btn btn-warning btn-secondary">Our Service</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
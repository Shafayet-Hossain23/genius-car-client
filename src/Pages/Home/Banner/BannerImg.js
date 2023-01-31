import React from 'react';
import './BannerImg.css'

const BannerImg = ({ singleCard }) => {
    // console.log(singleCard)
    const { id, imgUrl, prev, next } = singleCard
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={imgUrl} className="w-full banner-img" alt='' />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-6 hover:bg-red-600">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle hover:bg-red-600">❯</a>
            </div>
            <div className="ml-12 absolute  transform -translate-y-1/2 left-5 right-5 top-1/3">
                <p className='text-5xl text-white font-bold'>Affordable <br /> Price For Car <br /> Servicing</p>
            </div>
            <div className="ml-12 mt-10 absolute  transform -translate-y-1/2 left-5 right-5 top-2/4">
                <p className='text-1xl text-white '>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
            </div>
            <div className="ml-12 mt-10 absolute  transform -translate-y-1/2 left-5 right-5 top-2/3">
                <button className="btn btn-outline btn-error">Discover More</button>
                <button className="btn glass ml-8">Latest project</button>
            </div>
        </div>

    );
};

export default BannerImg;
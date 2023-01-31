import React from 'react';
import aboutImg1 from '../../../assets/images/about_us/person.jpg'
import aboutImg2 from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='relative'>
                        <img src={aboutImg1} className="max-w-sm rounded-lg shadow-2xl h-80 w-80" alt='' />
                        <img src={aboutImg2} className="max-w-sm rounded-lg shadow-2xl absolute w-4/5 left-36 top-48 border-4" alt='' />
                    </div>
                    <div className='ml-24'>
                        <p className='text-red-600 font-semibold my-2'>About Us</p>
                        <h1 className="text-4xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                        <p className="pt-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className="pt-3 pb-5">Tthe majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                        <button className="btn btn-primary">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
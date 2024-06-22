import React from 'react';
import Image from '../assest/banner/yaxas.jpg'; // Replace with your own beautiful image

const WelcomeBanner = () => {
    return (
        <div className="container mx-auto px-4 rounded mt-4">
            <div className="h-56 md:h-72 w-full bg-slate-200 relative flex">
                <div className="w-1/2 flex items-center justify-center text-black text-2xl">
                    <p>Welcome to Caraf Perfume Website</p>
                </div>
                <div className="w-1/2">
                    <img src={Image} alt="Beautiful Landscape" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default WelcomeBanner;

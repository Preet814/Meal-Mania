import React from 'react';
import bannerImg from '/images/home/banner.png'

const Banner = () => {
  return (
    <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
        <div className='py-12 flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
            {/* right side image */}
            <div className='md:w-1/2'>
                <img src={bannerImg} alt="" />
                <div className='flex flex-col md:flex-row items-center justify-around -mt-14 gap-4'>
                    <div className='bg-white px-3 py-2 rounded-2xl flex items-center gap-3 shadow-md w-64'>
                        <img src="/images/home/b-food1.png" alt="" className='rounded-2xl'/>
                        <div className='space-y-1'>
                            <h5>Spicy Noodles</h5>
                            <div className="rating rating-sm">
                                <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-yellow-500"
                                    readOnly
                                />
                                <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-yellow-500"
                                    readOnly
                                />
                                <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-yellow-500"
                                    checked
                                    readOnly
                                />
                                <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-yellow-400"
                                />
                                <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-yellow-400"
                                    readOnly
                                />
                            </div>
                            <p className="text-red">$18.00</p>
                        </div>
                    </div>
                    <div className='hidden bg-white px-3 py-2 rounded-2xl sm:flex items-center gap-3 shadow-md w-64'>
                        <img src="/images/home/b-food1.png" alt="" className='rounded-2xl'/>
                        <div className='space-y-1'>
                            <h5>Spicy Noodles</h5>
                            <div className="rating rating-sm">
                                <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-yellow-500"
                                    readOnly
                                />
                                <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-yellow-500"
                                    readOnly
                                />
                                <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-yellow-500"
                                    checked
                                    readOnly
                                />
                                <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-yellow-400"
                                />
                                <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-yellow-400"
                                    readOnly
                                />
                            </div>
                            <p className="text-red">$18.00</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* left side text */}
            <div className='md:w-1/2 space-y-7 px-4'>
                <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>Dive into Delights of Delectable <span className='text-green'>Food</span></h2>
                <p className='text-xl text-[#4A4A4A]'> Where Each Plate Weaves a Story of Culinary Mastery and Passionate
                Craftsmanship</p>
                <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full'>Order Now</button>
            </div>
            
        </div>
    </div>
  )
}

export default Banner
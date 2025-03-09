import React from 'react'
import Image from 'next/image'

const Work = () => {
    return (
        <section className="bg-gray-200 pt-20 pb-10 ">
            <div className="container mx-auto px-3 ">
                <div>
                    <h2 className="text-4xl lg:text-4xl font-bold mb-10  text-center">Work</h2>
                    <div className="grid grid-cols-3 gap-10 ">
                        <div className="bg-[#feb871]  ">
                            
                            <img src="/images/book1.png" alt="Description of image" className="w-full h-auto" />
                        </div>
                        <div className="bg-[#b4d3d8]  ">
                        
                            <img src="/images/book2.png" alt="Description of image" className="w-full h-auto" />
                        </div>
                        <div className="bg-[#fc986e]  ">
                        
                            <img src="/images/poster.png" alt="Description of image" className="w-full h-auto" />
                        </div>
                        <div className="  ">
                            
                            <img src="/images/sakthi.png" alt="Description of image" className="w-full h-auto" />
                        </div>
                        <div className="bg-[#b4d3d8]  ">
                        
                            <img src="/images/fashionwebsite.png" alt="Description of image" className="w-full h-auto" />
                        </div>
                        <div className="bg-[#fc986e]  ">
                        
                            <img src="/images/poster.png" alt="Description of image" className="w-full h-auto" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work

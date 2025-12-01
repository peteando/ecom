import React from 'react'
import Link from "next/link";

const BestSellers = () => {
    return (
        <div>
            <div className="container mx-auto px-3">
                <div>
                    <h2 className="text-4xl lg:text-5xl font-bold mt-20 mb-10">Best Sellers</h2>
                    <div className="grid grid-cols-6 gap-5">
                        <div className="">
                            <Link href="/product/3">
                                <img src="images/product_3.png" alt="Tactile Knit Cardigan" />
                            </Link>
                            <p className="font-bold mt-5">Tactile Knit Cardigan</p>
                            <p>AUD $159.99</p>
                        </div>
                        <div className="">
                            <img src="images/product_4.png" alt="Tactile Knit Cardigan" />
                            <p className="font-bold mt-5">Tactile Knit Cardigan</p>
                            <p>AUD $159.99</p>
                        </div>
                        <div className="">
                            <img src="images/product_5.png" alt="Tactile Knit Cardigan" />
                            <p className="font-bold mt-5">Tactile Knit Cardigan</p>
                            <p>AUD $159.99</p>
                        </div>
                        <div className="">
                            <img src="images/product_6.png" alt="Tactile Knit Cardigan" />
                            <p className="font-bold mt-5">Tactile Knit Cardigan</p>
                            <p>AUD $159.99</p>
                        </div>
                        <div className="">
                            <img src="images/product_7.png" alt="Tactile Knit Cardigan" />
                            <p className="font-bold mt-5">Tactile Knit Cardigan</p>
                            <p>AUD $159.99</p>
                        </div>
                        <div className="">
                            <img src="images/product_8.png" alt="Tactile Knit Cardigan" />
                            <p className="font-bold mt-5">Tactile Knit Cardigan</p>
                            <p>AUD $159.99</p>
                        </div>
                        <div className="">
                            <img src="images/product_9.png" alt="Tactile Knit Cardigan" />
                            <p className="font-bold mt-5">Tactile Knit Cardigan</p>
                            <p>AUD $159.99</p>
                        </div>
                        <div className="">
                            <img src="images/product_10.png" alt="Tactile Knit Cardigan" />
                            <p className="font-bold mt-5">Tactile Knit Cardigan</p>
                            <p>AUD $159.99</p>
                        </div>
                        <div className="">
                            <img src="images/product_11.png" alt="Tactile Knit Cardigan" />
                            <p className="font-bold mt-5">Tactile Knit Cardigan</p>
                            <p>AUD $159.99</p>
                        </div>
                        <div className="">
                            <img src="images/product_12.png" alt="Tactile Knit Cardigan" />
                            <p className="font-bold mt-5">Tactile Knit Cardigan</p>
                            <p>AUD $159.99</p>
                        </div>
                        <div className="">
                            <img src="images/product_13.png" alt="Tactile Knit Cardigan" />
                            <p className="font-bold mt-5">Tactile Knit Cardigan</p>
                            <p>AUD $159.99</p>
                        </div>
                        <div className="">
                            <img src="images/product_14.png" alt="Tactile Knit Cardigan" />
                            <p className="font-bold mt-5">Tactile Knit Cardigan</p>
                            <p>AUD $159.99</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestSellers



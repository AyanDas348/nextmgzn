'use client'

import { useState } from "react";

const data = [
    {
        title: 'Product-Market Fit',
        desc: 'We continuously refine our offerings to ensure they meet market needs and deliver real value.'
    },
    {
        title: 'Scalability Mindset',
        desc: 'We identify and optimize processes that can drive sustainable growth over time.'
    },
    {
        title: 'Churn Reduction',
        desc: 'We analyze churn rates and develop targeted strategies to improve customer retention.'
    },
    {
        title: 'Campaign Management',
        desc: "Comprehensive campaign management to elevate your brand's presence and drive impactful results."
    },
    {
        title: 'Data-Driven Decisions',
        desc: 'We use analytics to guide our strategies and measure our impact.'
    },
    {
        title: 'Rapid Experimentation',
        desc: 'We test ideas quickly, learn from the results, and iterate fast.'
    },
    {
        title: 'Customer Focused',
        desc: 'By understanding our customers, we enhance their experience and drive retention.'
    },
    {
        title: 'Innovative Solutions',
        desc: 'Creativity and outside-the-box thinking drive our pursuit of new growth opportunities.'
    },
]

const WhatWeDo = () => {
    const [showState, setShowState] = useState(8)
    const [mobileShowState, setMobileShowState] = useState(4)

    return (
        <div className="h-full w-full flex flex-col">
            <h1 className="w-full my-20 lg:text-center text-start px-6 lg:px-0 text-4xl font-bold">What We Do</h1>
            <div className="lg:mx-20 mx-6">
                <div className="lg:grid lg:grid-cols-4 gap-x-5 lg:gap-y-20 hidden">
                    {data.slice(0, showState).map((item, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    <div className="w-10 h-10 flex justify-start bg-gray-400 rounded-full">
                                    </div>
                                    <h2 className="mt-8 font-bold text-xl">{item.title}</h2>
                                    <p className="mt-4 lg:mr-20">{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="grid grid-cols-2 gap-y-12 gap-x-5 lg:hidden">
                    {data.slice(0, mobileShowState).map((item, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    <div className="w-10 h-10 flex justify-start bg-gray-400 rounded-full">
                                    </div>
                                    <h2 className="mt-8 font-bold text-xl">{item.title}</h2>
                                    <p className="mt-4 lg:mr-20">{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {mobileShowState === 4 && (
                <div className="w-full mt-20 text-center px-6 lg:px-0 text-2xl font-bold lg:hidden visible">
                    <button type="button" onClick={() => setMobileShowState(mobileShowState + 4)} className="text-white bg-[#4f4138] px-10 py-3 rounded-[24px] cursor-pointer">
                        See More
                    </button>
                </div>
            )}
        </div>
    );
}

export default WhatWeDo;
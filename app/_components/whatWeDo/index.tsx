const WhatWeDo = () => {
    return (
        <div className="h-full w-full flex flex-col">
            <h1 className="w-full my-20 lg:text-center text-start px-6 lg:px-0 text-4xl font-bold">What We Do</h1>
            <div className="lg:mx-20 mx-6">
                <div className="lg:grid lg:grid-cols-4 gap-x-5 lg:gap-y-20 grid grid-cols-2 gap-y-12">
                    {Array.from({ length: 8 }).map((item, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    <div className="w-10 h-10 flex justify-start bg-gray-400 rounded-full">
                                    </div>
                                    <h2 className="mt-8 font-bold text-xl">Data Driven Decisions</h2>
                                    <p className="mt-4 lg:mr-20">We use analytics to guide our strategies and measure our impact</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default WhatWeDo;
const WhatWeDo = () => {
    return (
        <div className="h-full w-full flex flex-col">
            <h1 className="w-full my-20 text-center text-4xl font-bold">What We Do</h1>
            <div className="mx-20">
                <div className="grid grid-cols-4 gap-x-5 gap-y-20">
                    {Array.from({ length: 8 }).map((item, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    <div className="w-10 h-10 flex justify-start bg-gray-400 rounded-full">
                                    </div>
                                    <h2 className="mt-8 font-bold text-xl">Data Driven Decisions</h2>
                                    <p className="mt-4 mr-20">We use analytics to guide our strategies and measure our impact</p>
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
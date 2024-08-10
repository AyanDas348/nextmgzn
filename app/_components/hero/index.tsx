import Image from "next/image";
import image from '@/public/hero.png'

const Hero = () => {
    return (
        <div className="w-full flex bg-[#4f4138] h-screen flex-col">
            <div className="absolute left-10 top-10">
                <p className="font-extrabold text-white">NeXTMGZN</p>
            </div>
            <div className="w-full lg:flex h-screen flex flex-col-reverse lg:flex-row">
                <div className="flex-3 lg:h-full items-center justify-start w-full">
                    <div className="lg:px-20 h-full flex flex-col justify-center px-6 mt-0 lg:mt-0">
                        <p className="text-white lg:text-6xl lg:w-4/5 xl:w-3/5 font-extrabold text-2xl w-full">
                            Sustainable Growth
                            through Smart,
                        </p>
                        <p className="text-white lg:text-6xl lg:w-4/5 xl:w-3/5 font-extrabold text-2xl">
                            Data Driven Strategies
                        </p>
                        <button className="text-white flex justify-start lg:mt-10 mt-6">
                            <p className="lg:w-fit w-full px-6 py-2 bg-[#DD6545] rounded-[14px]">
                                Contact
                            </p>
                        </button>
                    </div>
                </div>
                <div className="flex-1 lg:h-full h-1/2">
                    <Image src={image} alt="hero" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
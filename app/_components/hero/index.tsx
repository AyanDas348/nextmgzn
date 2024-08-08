import Image from "next/image";
import image from '@/public/hero.png'

const Hero = () => {
    return (
        <div className="w-full flex bg-[#4f4138] h-screen flex-col">
            <div className="absolute left-10 top-10">
                <p className="font-extrabold text-white">NeXTMGZN</p>
            </div>
            <div className="w-full flex h-screen">
                <div className="flex-3 h-full items-center justify-start w-full">
                    <div className="px-20 h-full flex flex-col justify-center">
                        <p className="text-white text-6xl w-4/5 xl:w-3/5 font-extrabold">
                            Sustainable Growth
                            through Smart,
                        </p>
                        <p className="text-white text-6xl w-4/5 xl:w-3/5 font-extrabold">
                            Data Driven Strategies
                        </p>
                        <button className="text-white flex justify-start mt-10">
                            <p className="w-fit px-6 py-2 bg-[#DD6545] rounded-[14px]">
                                Contact
                            </p>
                        </button>
                    </div>
                </div>
                <div className="flex-1">
                    <Image src={image} alt="hero" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
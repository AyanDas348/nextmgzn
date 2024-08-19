import Image from "next/image";
import image from '@/public/hero1.jpg';
import logo3 from '@/public/white-trans.svg'

interface HeroProps {
    handleScroll?: () => void;
}

const Hero = ({ handleScroll }: HeroProps) => {
    return (
        <div className="w-full flex bg-[#4f4138] h-screen flex-col">
            <div className="absolute left-5 top-[50px] min-[375px]:top-[65px] min-[425px]:top-[52px] min-[320px]:top-[85px] lg:left-20 z-20">
                {/* <p className="font-extrabold text-white">NeXTMGZN</p> */}
                <Image src={logo3} width={200} height={200} alt={"logo"} className="!p-0 w-52 h-52 lg:w-60 lg:h-60" />
            </div>
            <div className="w-full lg:flex h-screen flex flex-col-reverse lg:flex-row">
                <div className="flex-3 lg:h-full items-center justify-start w-full">
                    <div className="lg:px-20 h-full flex flex-col justify-center px-6 mt-0 lg:mt-0">
                        <p className="text-white lg:text-6xl lg:w-full xl:w-3/5 font-extrabold text-2xl w-full lg:text-center xl:text-start">
                            Sustainable Growth
                            through Smart,
                        </p>
                        <p className="text-white lg:text-6xl lg:w-full xl:w-3/5 font-extrabold text-2xl lg:text-center xl:text-start">
                            Data Driven Strategies
                        </p>
                        <button className="text-white flex justify-start lg:mt-10 mt-6" onClick={handleScroll}>
                            <p className="lg:w-full lg:text-center xl:text-start xl:w-fit px-6 py-2 bg-[#DD6545] rounded-[14px]">
                                Contact
                            </p>
                        </button>
                    </div>
                </div>
                <div className="relative flex-1 lg:h-full h-1/2">
                    <Image src={image} alt="hero" className="w-full h-full object-cover" placeholder="blur" />
                    <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

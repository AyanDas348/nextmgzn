import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Contact = () => {
    return (
        <div className="h-full w-full flex flex-col mb-20 bg-[#f9f9f9]">
            <h1 className="w-full mt-20 text-center text-4xl font-bold text-[#4f4138]">Contact Us</h1>
            <p className="mt-6 text-center text-[#717171]">Any questions or remarks? Just write us a message!</p>
            <div className="lg:!mt-20 lg:mx-10 h-full bg-white p-4 rounded-[8px] flex w-[90%] mx-6 lg:flex-row flex-col my-10 lg:my-0">
                <div className="lg:w-1/3 w-full flex flex-col bg-[#4f4138] text-white rounded-[10px] lg:p-20 p-12">
                    <p className="text-4xl font-bold">Contact Information</p>
                    <p className="text-xl mt-10">Let&apos;s Grow your business together</p>
                    <div className="flex flex-col w-full h-full gap-y-12 mt-12">
                        <p className="flex gap-x-5 justify-start lg:flex-row flex-col w-full lg:text-start text-center">
                            <div className="flex lg:w-fit w-full justify-center lg:justify-start">
                                <Phone fill="white" color="black" className="h-6 w-6 lg:w-8 lg:h-8" />
                            </div>
                            +91 80186 95050
                        </p>
                        <p className="flex gap-x-5 break-all justify-start lg:flex-row flex-col w-full lg:text-start text-center">
                            <div className="flex lg:w-fit w-full justify-center lg:justify-start">
                                <Mail fill="white" color="black" className="h-10 w-10 lg:w-8 lg:h-8" />
                            </div>
                            contact@themagazinestudios.com
                        </p>
                        <p className="flex gap-x-5 justify-start lg:flex-row flex-col w-full lg:text-start text-center">
                            <div className="flex lg:w-fit w-full justify-center lg:justify-start">
                                <MapPin fill="white" color="black" className="h-12 w-10 lg:w-10 lg:h-10" />
                            </div>
                            M84, M block market, Greater Kailash 2, New Delhi
                        </p>
                    </div>
                    <div className="flex w-full gap-x-8 lg:mt-40 mt-24 cursor-pointer justify-center lg:justify-start">
                        <Twitter />
                        <Instagram />
                        <Facebook />
                    </div>
                </div>

                <div className="lg:w-2/3 w-full flex flex-col lg:m-20 mx-2 my-6 text-black lg:gap-y-20 gap-y-12" id="contact-form">
                    <div className="flex lg:w-full justify-start gap-x-40 lg:flex-row flex-col gap-y-12 w-2/3">
                        <div className="flex flex-col gap-y-2">
                            <label>First Name</label>
                            <input className="border-b border-black focus:border-transparent focus:outline-none focus:!border-b-black" />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label>Last Name</label>
                            <input className="border-b border-black focus:border-transparent focus:outline-none focus:!border-b-black" />
                        </div>
                    </div>
                    <div className="flex lg:w-full justify-start gap-x-40 lg:flex-row flex-col gap-y-12 w-2/3">
                        <div className="flex flex-col gap-y-2">
                            <label>Email</label>
                            <input className="border-b border-black focus:border-transparent focus:outline-none focus:!border-b-black" />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label>Phone Number</label>
                            <input className="border-b border-black focus:border-transparent focus:outline-none focus:!border-b-black" />
                        </div>
                    </div>
                    <div className="flex lg:w-1/2 w-3/4">
                        <div className="flex flex-col w-full gap-y-2">
                            <label>Message</label>
                            <input className="border-b border-black focus:border-transparent focus:outline-none focus:!border-b-black" placeholder="Write your message.." />
                        </div>
                    </div>
                    <div>
                        <button className="text-white flex justify-start lg:mt-10 mt-3">
                            <p className="w-fit px-6 py-2 bg-[#DD6545] rounded-[14px]">
                                Send Message
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
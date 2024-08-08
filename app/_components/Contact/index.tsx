import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Contact = () => {
    return (
        <div className="h-full w-full flex flex-col mb-20 bg-[#f9f9f9]">
            <h1 className="w-full mt-20 text-center text-4xl font-bold text-[#4f4138]">Contact Us</h1>
            <p className="mt-6 text-center text-[#717171]">Any questions or remarks? Just write us a message!</p>
            <div className="mt-10 mx-10 h-full bg-white p-4 rounded-[8px] flex w-full">
                <div className="w-1/3 flex flex-col bg-[#4f4138] text-white rounded-[10px] p-20">
                    <p className="text-4xl font-bold">Contact Information</p>
                    <p className="text-xl mt-10">Let&apos; Grow your business together</p>
                    <div className="flex flex-col w-full h-full gap-y-12 mt-12">
                        <p className="flex gap-x-5">
                            <Phone fill="white" color="black" />
                            +1012 3456 789
                        </p>
                        <p className="flex gap-x-5">
                            <Mail fill="white" color="black" />
                            demo@gmail.com
                        </p>
                        <p className="flex gap-x-5">
                            <MapPin fill="white" color="black" />
                            Address
                        </p>
                    </div>
                    <div className="flex w-full gap-x-8 mt-40 cursor-pointer">
                        <Twitter />
                        <Instagram />
                        <Facebook />
                    </div>
                </div>
                <div className="w-2/3 flex flex-col m-20 text-black gap-y-20">
                    <div className="flex w-full justify-start gap-x-40">
                        <div className="flex flex-col">
                            <label>First Name</label>
                            <input className="border-b border-black" />
                        </div>
                        <div className="flex flex-col">
                            <label>Last Name</label>
                            <input className="border-b border-black" />
                        </div>
                    </div>
                    <div className="flex w-full justify-start gap-x-40">
                        <div className="flex flex-col">
                            <label>Email</label>
                            <input className="border-b border-black" />
                        </div>
                        <div className="flex flex-col">
                            <label>Phone Number</label>
                            <input className="border-b border-black" />
                        </div>
                    </div>
                    <div className="flex w-1/2">
                        <div className="flex flex-col w-full">
                            <label>Message</label>
                            <input className="border-b border-black" placeholder="Write your message.." />
                        </div>
                    </div>
                    <div>
                        <button className="text-white flex justify-start mt-10">
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
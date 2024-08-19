import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validateForm = () => {
        const { firstName, lastName, email, phoneNumber, message } = formData;
        if (!firstName || !lastName || !email || !phoneNumber || !message) {
            toast.warning('Please fill in all fields.', { position: 'top-center' });
            return false;
        }
        if (!validateEmail(email)) {
            toast.warning('Please enter a valid email address.', { position: 'top-center' });
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                toast.success('Email sent successfully!', { position: 'top-center' });
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNumber: "",
                    message: "",
                });
            } else {
                toast.error('Failed to send email.', { position: 'top-center' });
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Failed to send email.', { position: 'top-center' });
        }
    };

    return (
        <div className="h-full w-full flex flex-col mb-20 bg-[#f9f9f9]">
            <h1 className="w-full mt-20 text-center text-4xl font-bold text-[#4f4138]">Contact Us</h1>
            <p className="mt-6 text-center text-[#717171]">Any questions or remarks? Just write us a message!</p>
            <div className="lg:!mt-20 lg:mx-10 h-full bg-white p-4 rounded-[8px] flex w-[90%] mx-6 md:mx-auto lg:flex-row flex-col my-10 lg:my-0">
                <div className="lg:w-1/3 w-full flex flex-col bg-[#4f4138] text-white rounded-[10px] lg:p-20 p-12">
                    <p className="text-4xl font-bold">Contact Information</p>
                    <p className="text-xl mt-10">Let&apos;s Grow your business together</p>
                    <div className="flex flex-col w-full h-full gap-y-12 mt-12">
                        <div className="flex gap-x-5 items-center" onClick={() => window.location.href = 'tel:+918018695050'}>
                            <Phone className="h-6 w-6 lg:w-8 lg:h-8" />
                            <p>+91 80186 95050</p>
                        </div>
                        <div className="flex gap-x-5 items-center break-all">
                            <a href="mailto:contact@themagazinestudios.com" target="_blank" rel="noopener noreferrer" className="flex gap-x-5 items-center">
                                <Mail className="h-10 w-10 lg:w-8 lg:h-8" />
                                <p>contact@nextmgzn.com</p>
                            </a>
                        </div>
                        <div className="flex gap-x-5 items-center" onClick={() => window.open("https://maps.app.goo.gl/hwpMkh444ZjS7Eia6?g_st=iw", "_blank")}>
                            <MapPin className="h-12 w-10 lg:w-10 lg:h-10" />
                            <p>M84, M block market, Greater Kailash 2, New Delhi</p>
                        </div>
                    </div>
                    <div className="flex gap-x-8 lg:mt-40 mt-24 justify-center lg:justify-start cursor-pointer">
                        <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
                        <Link href={`https://www.instagram.com/nextmgzn/?igsh=c3hyb3NreGVweDNi&utm_source=qr`} target="_blank">
                            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                        </Link>
                        <FontAwesomeIcon icon={faDiscord} className="w-7 h-7" />
                    </div>
                </div>

                <div className="lg:w-2/3 w-full flex flex-col lg:m-20 mx-2 my-6 text-black gap-y-12" id="contact-form">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-y-8">
                        <div className="flex flex-col lg:flex-row gap-y-12 lg:gap-x-40 w-full">
                            <div className="flex flex-col lg:w-full w-[90%] gap-y-2">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    className="border-b border-black focus:border-transparent focus:outline-none focus:border-b-black"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col lg:w-full w-[90%] gap-y-2">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    className="border-b border-black focus:border-transparent focus:outline-none focus:border-b-black"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-y-12 lg:gap-x-40 w-full">
                            <div className="flex flex-col lg:w-full w-[90%] gap-y-2">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="border-b border-black focus:border-transparent focus:outline-none focus:border-b-black"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col lg:w-full w-[90%] gap-y-2">
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="tel"
                                    className="border-b border-black focus:border-transparent focus:outline-none focus:border-b-black"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col w-full lg:w-1/2 gap-y-2">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="border-b border-black focus:border-transparent focus:outline-none focus:border-b-black"
                                placeholder="Write your message..."
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <button type="submit" onClick={(e) => handleSubmit(e)} className="text-white px-6 py-2 bg-[#DD6545] rounded-[14px]">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;

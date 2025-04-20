import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-16 bg-white dark:bg-gray-900 w-full flex items-center justify-center"
        >
            <div className="w-4/5 lg:w-3/4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-10 mx-4 my-20">
                <div className="flex flex-col lg:flex-row items-start justify-between">
                    {/* Left Side - Contact Info */}
                    <div className="w-full lg:w-1/4 flex flex-col lg:block items-center relative mb-10 lg:mb-0">
                        <div className="lg:border-r lg:border-gray-300 dark:lg:border-gray-600 lg:absolute lg:h-4/5 lg:right-0 lg:top-1/2 lg:-translate-y-1/2"></div>

                        <div className="flex flex-col items-center text-center mb-8">
                            <MapPin className="w-6 h-6 text-purple-700 dark:text-purple-400 mb-2" />
                            <div className="font-medium text-gray-800 dark:text-gray-200 mb-1">
                                Address
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                Lucknow, UP
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                India
                            </div>
                        </div>

                        <div className="flex flex-col items-center text-center mb-8">
                            <Phone className="w-6 h-6 text-purple-700 dark:text-purple-400 mb-2" />
                            <div className="font-medium text-gray-800 dark:text-gray-200 mb-1">
                                Phone
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                +919455346151
                            </div>
                        </div>

                        <div className="flex flex-col items-center text-center mb-8">
                            <Mail className="w-6 h-6 text-purple-700 dark:text-purple-400 mb-2" />
                            <div className="font-medium text-gray-800 dark:text-gray-200 mb-1">
                                Email
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                mohdrafey600@gmail.com
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="w-full lg:w-2/3 lg:pl-10">
                        <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-400 mb-4">
                            Send us a message
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            If you have any work from me or any types of queries
                            related to my work, you can send me a message from
                            here. It's my pleasure to help you.
                        </p>

                        <form>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:outline-none text-gray-800 dark:text-gray-200"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:outline-none text-gray-800 dark:text-gray-200"
                                />
                            </div>
                            <div className="mb-6">
                                <textarea
                                    placeholder="Enter your message"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:outline-none min-h-28 text-gray-800 dark:text-gray-200"
                                    rows="5"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="px-6 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-500 transition duration-300 font-medium"
                                >
                                    Send Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

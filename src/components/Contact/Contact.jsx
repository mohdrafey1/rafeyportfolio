import React, { useState } from "react";
import { MapPin, Phone, Mail, Send, Loader, CheckCircle } from "lucide-react";

export default function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        fetch("https://panel.studentsenior.com/api/contactus", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                subject: `Message from ${formState.name}`,
                email: formState.email,
                description: formState.message,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Something went wrong");
                }
                return response.json();
            })
            .then(() => {
                setIsSubmitted(true);
                setFormState({ name: "", email: "", message: "" });

                setTimeout(() => {
                    setIsSubmitted(false);
                }, 3000);
            })
            .catch((error) => {
                console.error("Submission error:", error);
                alert("Failed to send message. Please try again later.");
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section
            id="contact"
            className="py-20 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800 w-full"
        >
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                        Get In{" "}
                        <span className="text-purple-600 dark:text-purple-400">
                            Touch
                        </span>
                    </h2>
                    <div className="w-16 h-1 bg-purple-600 dark:bg-purple-400 mx-auto mb-6 rounded-full"></div>
                    <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
                        Let's collaborate on something amazing. Reach out
                        through the form or any of the channels below.
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        {/* Left Side - Decorative & Contact Info */}
                        <div className="w-full lg:w-2/5 bg-gradient-to-br from-purple-600 to-indigo-700 dark:from-purple-800 dark:to-indigo-900 p-8 lg:p-12 text-white">
                            <div className="h-full flex flex-col">
                                <div className="mb-12">
                                    <h3 className="text-2xl font-bold mb-6">
                                        Contact Information
                                    </h3>
                                    <p className="text-purple-100 mb-8">
                                        Available for freelance projects and
                                        full-time opportunities
                                    </p>
                                </div>

                                <div className="space-y-8 mb-12">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-purple-100">
                                                Location
                                            </p>
                                            <p className="font-medium">
                                                Lucknow, UP, India
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-purple-100">
                                                Email
                                            </p>
                                            <p className="font-medium">
                                                mohdrafey600@gmail.com
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-purple-100">
                                                Phone
                                            </p>
                                            <p className="font-medium">
                                                +91 9455346151
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-300/20 to-indigo-400/20 absolute bottom-6 left-8 blur-lg"></div>
                                    <div className="w-32 h-32 rounded-full bg-gradient-to-tl from-purple-400/10 to-indigo-300/10 absolute top-12 right-8 blur-lg"></div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Contact Form */}
                        <div className="w-full lg:w-3/5 p-8 lg:p-12">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-8">
                                Send a Message
                            </h3>

                            {isSubmitted ? (
                                <div className="flex flex-col items-center justify-center py-12">
                                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                                    <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-2">
                                        Thank you!
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-center">
                                        Your message has been sent successfully.
                                        I'll get back to you soon.
                                    </p>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="name"
                                                value={formState.name}
                                                onChange={handleChange}
                                                className="w-full bg-gray-50 dark:bg-gray-700/50 border-0 rounded-lg p-4 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 transition-all peer h-14"
                                                placeholder=" "
                                                required
                                            />
                                            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 dark:bg-gray-700/50 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2 peer-focus:text-purple-600 dark:peer-focus:text-purple-400">
                                                Name
                                            </label>
                                        </div>

                                        <div className="relative">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                className="w-full bg-gray-50 dark:bg-gray-700/50 border-0 rounded-lg p-4 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 transition-all peer h-14"
                                                placeholder=" "
                                                required
                                            />
                                            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 dark:bg-gray-700/50 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2 peer-focus:text-purple-600 dark:peer-focus:text-purple-400">
                                                Email
                                            </label>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <textarea
                                            name="message"
                                            value={formState.message}
                                            onChange={handleChange}
                                            rows="5"
                                            className="w-full bg-gray-50 dark:bg-gray-700/50 border-0 rounded-lg p-4 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 transition-all peer"
                                            placeholder=" "
                                            required
                                        ></textarea>
                                        <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 dark:bg-gray-700/50 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2 peer-focus:text-purple-600 dark:peer-focus:text-purple-400">
                                            Your Message
                                        </label>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg transition duration-300 font-medium flex items-center justify-center gap-2 w-full md:w-auto disabled:opacity-70"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader className="w-5 h-5 animate-spin" />
                                                    <span>Sending...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    <span>Send Message</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

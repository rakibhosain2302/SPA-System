import { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // এখানে তোমার backend API call দিতে পারো
        console.log('Form Submitted:', formData);
        alert('Thank you! We will get back to you soon.');
    };

    return (
        <div className="container contact-section">
            <div className="row g-5">
                {/* Left Side - Contact Info */}
                <div className="col-md-6 contact-section-left">
                    <h1 className="font-bold mb-8">Contact Us</h1>
                    <div className="space-y-6 text-lg">
                        <div className="general-email">
                            <p className="text-gray-400">Email:</p>
                            <p className="hover:text-blue-400 transition-colors">
                                apply@offshorestaffingsolution.com
                            </p>
                        </div>

                        <div className="hr-email">
                            <p className="text-gray-400">HR Email:</p>
                            <p className="hover:text-blue-400 transition-colors">
                                hr@offshorestaffingsolution.com
                            </p>
                        </div>

                        <div className="ban-telephone">
                            <p className="text-gray-400">BAN:</p>
                            <p>+880 1727-505842</p>
                        </div>

                        <div className="us-telephone">
                            <p className="text-gray-400">U.S.:</p>
                            <p>+1 (203) 675-6670</p>
                        </div>
                    </div>

                    {/* Bangladesh Address */}
                    <div className="ban-address">
                        <h2 className="text-xl font-semibold mb-3">Bangladesh</h2>
                        <p className="text-gray-400 leading-relaxed">
                            4th Floor, Opposite Peace School,
                            Samair Dhaal Akran Bazar Road, Birulia Savar,
                            Dhaka-1345 Bangladesh
                        </p>
                    </div>

                    {/* US Address */}
                    <div className="us-address">
                        <h2 className="text-xl font-semibold mb-3">U.S.</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Georgia: 6067 New Peachtree RD Doraville, GA 30340
                        </p>
                    </div>

                    {/* Red Dot Decoration */}
                    <div className="w-6 h-6 bg-red-600 rounded-full"></div>
                </div>

                {/* Right Side - Form */}
                <div className="col-md-6 contact-section-right">
                    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8">
                        <h2 className="text-3xl font-bold mb-8">Stay Updated</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-all"
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-all"
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-all"
                                />
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message..."
                                    rows="6"
                                    className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-all resize-y"
                                    required
                                ></textarea>
                            </div>

                            {/* reCAPTCHA Error Message (as shown in your image) */}
                            <div className="bg-white/10 border border-red-500/30 rounded-xl p-4 text-red-400 text-sm flex items-center gap-3">
                                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-xs font-bold">R</div>
                                <div>
                                    <p className="font-medium">ERROR for site owner:</p>
                                    <p>Invalid domain for site key</p>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold py-4 rounded-xl text-lg"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
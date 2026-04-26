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
                    <div>
                        <h2 className="fw-bold mb-4">Stay Updated</h2>

                        <form onSubmit={handleSubmit}>

                            {/* Name */}
                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    className="form-control bg-dark text-white border-secondary"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="mb-3">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className="form-control bg-dark text-white border-secondary"
                                    required
                                />
                            </div>

                            {/* Phone */}
                            <div className="mb-3">
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    className="form-control bg-dark text-white border-secondary"
                                />
                            </div>

                            {/* Message */}
                            <div className="mb-3">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message..."
                                    rows="5"
                                    className="form-control bg-dark text-white border-secondary"
                                    required
                                ></textarea>
                            </div>

                            {/* Error Box */}
                            <div className="alert alert-danger d-flex align-items-center gap-2">
                                <div className="bg-primary text-white px-2 py-1 rounded">R</div>
                                <div>
                                    <strong>ERROR for site owner:</strong><br />
                                    Invalid domain for site key
                                </div>
                            </div>

                            {/* Button */}
                            <div className="text-start">
                                <button
                                    type="submit"
                                    className="btn btn-danger w-25"
                                >
                                    Send
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
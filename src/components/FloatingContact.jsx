import { useState } from "react";

const FloatingContact = () => {
    const [open, setOpen] = useState(false);

    return (
        <div 
            className="floating-contact"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >

            {/* Main Button */}
            <div className="main-btn">
                💬
            </div>

            {/* Options */}
            <div className={`contact-options ${open ? "show" : ""}`}>
                <div className="contact-icon">📞</div>
                <div className="contact-icon">💬</div>
                <div className="contact-icon">✉️</div>
                <div className="contact-icon">📍</div>
            </div>

        </div>
    );
};

export default FloatingContact;
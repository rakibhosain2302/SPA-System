
const Maps = () => {
    return (
        <div className="container map-section">
            <h2 className="text-center mb-4">Our Location</h2>

            <div className="map-container">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default Maps;

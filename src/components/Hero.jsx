
import Button from "./Button";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-img">
                <div className="container text-center d-flex flex-column justify-content-center align-items-center h-100">
                    <div className="hero-content">
                        <h1 className="text-white">Global Workforce Solutions Since 2014</h1>
                        <p className="lead">Empowering businesses through strategic staffing and technology solutions</p>
                        <Button text="Explore Our Services" type="primary" onClick={() => alert("Learn more about our services!")} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
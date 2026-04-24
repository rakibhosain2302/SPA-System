import Button from "./Button";
import TeamCard from "./TeamCard";

const OurTeam = () => {
    const teamData = [
        {
            id: 1,
            name: "Rakib Hosain",
            role: "Laravel Developer",
            img: "https://via.placeholder.com/150"
        },
        {
            id: 2,
            name: "John Doe",
            role: "Frontend Developer",
            img: "https://via.placeholder.com/150"
        },
        {
            id: 3,
            name: "Jane Smith",
            role: "UI Designer",
            img: "https://via.placeholder.com/150"
        }
    ];

    return (
        <div className="container our-team">
            <h1 className="text-center mb-5">Our Team</h1>

            <p>Offshore Staffing Solutions (est. 2014) bridges Bangladeshi talent with global opportunities through IT-enabled services. We empower youth with U.S. work experience, fuel Bangladesh’s economy, and deliver scalable staffing solutions. By merging cultural insight with tech innovation, we connect skilled professionals to international businesses, driving growth on both sides of the ocean.</p>

            <div className="row">
                {teamData.map(member => (
                    <TeamCard
                        key={member.id}
                        name={member.name}
                        role={member.role}
                        img={member.img}
                    />
                ))}
            </div>
            <Button text="Explore Our Team" type="primary" style={{ width: "400px" }} onClick={() => alert("Explore career opportunities with us!")} />
        </div>
    );
};

export default OurTeam;
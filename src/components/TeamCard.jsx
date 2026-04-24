const TeamCard = ({ name, role, img }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="team-card text-center p-3">
                <img src={img} alt={name} className="img mb-3" />

                <h5 className="member-name">{name}</h5>
                <p className="text-center">{role}</p>
            </div>
        </div>
    );
};

export default TeamCard;

const img = [
    {
        id: 1,
        img: "/src/assets/award1.jpg",
        year: "2021",
    },
    {
        id: 2,
        img: "/src/assets/award2.jpg",
        year: "2022",
    },
    {
        id: 3,
        img: "/src/assets/award3.png",
        year: "2023",
    },
    {
        id: 4,
        img: "/src/assets/award4.jpg",
        year: "2024",
    }
]

const Award = () => {
    return (
        <>
            <div className="container award-section">
                <h1 className="text-center mb-5">Awards & Recognitions</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card-custom text-center p-3">
                            <div className="row">
                                {img.map(item => (
                                    <div key={item.id} className="col-6 award-item">

                                        <div className="award-img-wrapper">
                                            <img
                                                src={item.img}
                                                alt={`Award ${item.id}`}
                                                className="award-img"
                                            />

                                            {/* Overlay */}
                                            <div className="overlay">
                                                <button className="view-btn">View</button>
                                            </div>

                                            {/* Ribbon */}
                                            <div className="ribbon">{item.year}</div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card-custom c2 text-center p-3">
                            <h5 className="award-title">Excellence in Youth Empowerment</h5>
                            <p className="text-center">2021</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Award

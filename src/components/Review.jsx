import { useState } from "react";

const reviews = [
    {
        id: 1,
        name: "Talha Jamal",
        time: "1 year ago",
        comment: "Fantastic workplace with talented professionals, collaborative vibe and endless opportunities. Highly recommended for career growth and learning environment.",
        rating: 5
    },
    {
        id: 2,
        name: "Mohammad Atif",
        time: "1 year ago",
        comment: "I've been working at OSS for a long time, and I can confidently say it's an outstanding place to work. The people here are wonderful, and the overall environment is excellent.",
        rating: 5
    },
    {
        id: 3,
        name: "Anamul Mishuk",
        time: "1 year ago",
        comment: "Good",
        rating: 5
    },
    {
        id: 4,
        name: "Hasib ul Hasan Hridoy",
        time: "1 year ago",
        comment: "Environment and people are too good. I really enjoyed working here and learned a lot.",
        rating: 5
    }
];

const ReviewCard = ({ name, time, comment, rating }) => {

    const [showFull, setShowFull] = useState(false);

    const shortText = comment.slice(0, 80);

    return (
        <div className="review-card p-3">

            <div className="review-header">
                <strong>{name}</strong>
                <span>{time}</span>
            </div>

            <div className="stars">
                {"⭐".repeat(rating)}
            </div>

            <p>
                {showFull ? comment : shortText + (comment.length > 80 ? "..." : "")}
            </p>

            {comment.length > 80 && (
                <button
                    className="read-more-btn"
                    onClick={() => setShowFull(!showFull)}
                >
                    {showFull ? "Read Less" : "Read More"}
                </button>
            )}

        </div>
    );
};


const Review = () => {
    return (
        <div className="container review-section">
            <div className="card-custom bg-dark p-5">
                <h1 className="text-center mb-5">Client Reviews</h1>
                <div className="row g-4">
                    {reviews.map(review => (
                        <div key={review.id} className="col-md-3 mb-4">
                            <ReviewCard
                                name={review.name}
                                time={review.time}
                                comment={review.comment}
                                rating={review.rating}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Review;
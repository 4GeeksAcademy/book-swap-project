import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import "../../styles/review.css";

export const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`${process.env.BACKEND_URL}/books/${bookId}/reviews`)
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.log(error));
    }, []);

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <>
            {reviews.map(review => (
                <div key={review.review_id} className="d-flex flex-row bd-highlight mb-3 col-10 align-items-center">
                    <div className="p-2 col-md-2">
                        <img className="rounded-circle mt-2 mx-2" src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp" height="100" />
                    </div>

                    <div className="p-2 col-md-10">
                        <div className="row">
                            <div className="d-flex flex-row bd-highlight mb-3">
                                <div className="px-2 bd-highlight">@{review.user_id} rated this book</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="d-flex flex-row bd-highlight mb-3">
                                <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    edit={false}
                                    size={24}
                                    activeColor="#ffd700"
                                    value={review.rating}
                                />
                                <div className="px-2 bd-highlight">{review.rating}</div>
                            </div>
                        </div>
                        <div className="row">
                            <p>{review.review}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Review;
import React, { useEffect, useState } from 'react';
import reviewsData from './reviewsData.json'; // adjust the path as necessary
import ReviewHighlighter from './ReviewHighlighter';

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        setReviews(reviewsData);
    }, []);

    return (
        <div>
            {reviews.map((review, index) => (
                <ReviewHighlighter key={index} review={review} />
            ))}
        </div>
    );
};

export default ReviewList;

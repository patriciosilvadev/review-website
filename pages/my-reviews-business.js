import React, { Component } from 'react';
import ReviewCard from '../Components/Widgets/MyReviewsBusiness/ReviewCard';

class MyReviewsBusiness extends Component {
    render() {
        return (
            <div className="container">
                <ReviewCard rating={4} />
                <ReviewCard rating={3} />
                <ReviewCard rating={4.5} />
                <ReviewCard rating={3} />
                <ReviewCard rating={5} />
            </div>
        )
    }
}

export default MyReviewsBusiness;
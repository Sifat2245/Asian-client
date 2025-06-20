import React, { use, useEffect, useState } from 'react';
import { authContext } from '../authProvider/AuthProvider';
import { FaRegStar, FaStar, FaUserCircle } from 'react-icons/fa';

const ReviewSection = ({ foodId, onReviewSubmit }) => {

    const { user } = use(authContext)
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [reviewText, setReviewText] = useState('')
    const [reviews, setReviews] = useState([])

    const fetchReview = () => {
        setReviews([
            {
                id: 1,
                user: 'Alice',
                rating: 5,
                comment: 'Absolutely delicious! The best I\'ve had in a long time.',
                date: '2025-06-15'
            },
            {
                id: 2,
                user: 'Bob',
                rating: 4,
                comment: 'Very good, but a little spicier than expected.',
                date: '2025-06-10'
            }
        ])
    }

    useEffect(() => {
        fetchReview()
    }, [foodId])



    const handleSubmitReview = e => {
        e.preventDefault()
        if (!user) {
            alert('please login to submit a review')
            return
        }
        if (rating === 0) {
            alert('please select a star rating')
            return
        }
        if (reviewText.trim() === '') {
            alert('please write a review')
            return
        }


        const newReview = {
            foodId,
            user: user.displayName || user.email,
            comment: reviewText,
            rating: rating,
            date: new Date().toISOString().split('T')[0]
        }



        setReviews([...reviews, newReview])
        setRating(0)
        setReviewText('')
        if (onReviewSubmit) {
            onReviewSubmit(newReview)
        }
    }




    return (
     <div className="py-24 dark:bg-[#2e2e2e] dark:text-[#D8D8D8] transition-all duration-300">
            <div className="max-w-5xl mx-auto"> 
                <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-[#D8D8D8]">Reviews</h2>

                {reviews.length === 0 ? (
                    <p className="text-gray-700 dark:text-[#D8D8D8] mb-4">
                        There are no reviews yet. Be the first to review "
                    </p>
                ) : null}

                <p className="text-gray-600 dark:text-[#a0a0a0] mb-6 text-sm">
                    Your email address will not be published. Required fields are marked <span className="text-red-500">*</span>
                </p>

                <form onSubmit={handleSubmitReview} className="space-y-6 mb-16">
                    <div>
                        <label className="block text-gray-800 dark:text-[#D8D8D8] text-base mb-2">Your rating <span className="text-red-500">*</span></label>
                        <div className="flex">
                            {[...Array(5)].map((star, index) => {
                                const currentRating = index + 1;
                                return (
                                    <label key={index} className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="rating"
                                            value={currentRating}
                                            onClick={() => setRating(currentRating)}
                                            className="hidden"
                                        />
                                        {currentRating <= (hover || rating) ? (
                                            <FaStar
                                                className="transition-colors duration-200"
                                                color="#DB7137"
                                                size={24} // Smaller stars for rating input
                                                onMouseEnter={() => setHover(currentRating)}
                                                onMouseLeave={() => setHover(0)}
                                            />
                                        ) : (
                                            <FaRegStar
                                                className="transition-colors duration-200"
                                                color="#a0a0a0"
                                                size={24} // Smaller stars for rating input
                                                onMouseEnter={() => setHover(currentRating)}
                                                onMouseLeave={() => setHover(0)}
                                            />
                                        )}
                                    </label>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="reviewText" className="block text-gray-800 dark:text-[#D8D8D8] text-base mb-2">Your review <span className="text-red-500">*</span></label>
                        <textarea
                            id="reviewText"
                            className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#DB7137] dark:bg-[#242424] dark:border-[#444444] dark:text-[#D8D8D8] text-base resize-y font-light"
                            rows="4" // Significantly reduced rows for a smaller text box
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            placeholder="Share your thoughts..." // Added a placeholder for better UX
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-[#DB7137] hover:bg-[#272727] transition-all duration-300 text-white font-medium py-2.5 px-6 rounded-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed" // Adjusted button style to be less prominent, more in line with the "Add to Cart" buttons on your FoodDetails
                        disabled={!user}
                    >
                        SUBMIT
                    </button>
                    {!user && <p className="text-red-500 text-sm mt-3">You must be logged in to submit a review.</p>}
                </form>

                {/* Existing Reviews - Vertical List (like comments) */}
                {reviews.length === 0 ? null : (
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-[#D8D8D8]">Previous Reviews</h3> 
                        {reviews.map((review) => (
                            <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-b-0">
                                <div className="flex items-start mb-3">
                                    {user?.photoURL ? ( // Use actual user photo if available
                                        <img src={user.photoURL} alt={review.user} className="w-10 h-10 rounded-full mr-3 object-cover" />
                                    ) : (
                                        <FaUserCircle className="text-gray-400 dark:text-[#7e7e7e] mr-3" size={30} /> 
                                    )}
                                    <div>
                                        <p className="font-semibold text-lg text-gray-900 dark:text-[#D8D8D8]">{review.user}</p>
                                        <div className="flex mt-1">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar
                                                    key={i}
                                                    color={i < review.rating ? "#DB7137" : "#e4e5e9"}
                                                    size={16}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-gray-600 dark:text-[#a0a0a0] text-sm ml-auto">{review.date}</p>
                                </div>
                                <p className="text-gray-800 dark:text-[#D8D8D8] leading-relaxed ml-12">
                                    {review.comment}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReviewSection;
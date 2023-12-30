import React, { useState } from "react";
import { FaUser, FaStar } from "react-icons/fa";
import "./ReviewCard.css";

const AddReviewCard = () => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState(null);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const formatDate = () => {
    const now = new Date();
    const isoString = now.toISOString();
    return isoString.substring(0, isoString.indexOf("T"));
  };

  const handleAddReview = async () => {
    // Convert the image to base64 code before sending
    const base64Image = image ? image.split(",")[1] : null;

    const newReview = {
      id: 0,
      productId: 2, // hardcoded for now, replace with actual logic
      userId: 2, // hardcoded for now, replace with actual logic
      rating,
      comment,
      commentDate: new Date(),
      imageData: base64Image,
    };

    // Perform the action with the new review (e.g., submit to server or update state)
    try {
      const response = await fetch("http://localhost:3000/api/reviews/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });

      if (response.ok) {
        // Handle success
        console.log("Review added successfully");
      } else {
        // Handle error
        console.error("Failed to add review");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }

    // Clear the form after submitting
    setComment("");
    setRating(0);
    setImage(null);
  };

  return (
    <div className="add-review-card">
      <div className="user-info">
        <div
          className="default-profile-container"
          style={{ marginLeft: "10px", marginTop: "15px" }}
        >
          <FaUser size={24} />
        </div>
        <span className="username">You</span>
      </div>
      <div className="add-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            size={24}
            color={star <= rating ? "gold" : "gray"}
            onClick={() => handleRatingChange(star)}
          />
        ))}
      </div>
      <textarea
        placeholder="Write your review..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="text-area"
        style={{ height: "50px", width: "500px", resize: "none" }} // Set the desired height here
      ></textarea>
      <input type="file" onChange={handleImageChange} accept="image/*" />
      {image && <img src={image} alt="Preview" className="image-preview" />}
      <button
        onClick={handleAddReview}
        style={{
          width: "auto",
          backgroundColor: "brown",
          borderRadius: "10px",
          border: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff", // Set the text color to white
          padding: "10px", // Add padding for better appearance
          cursor: "pointer", // Set cursor to pointer for better UX
        }}
      >
        Submit Review
      </button>
    </div>
  );
};

export default AddReviewCard;

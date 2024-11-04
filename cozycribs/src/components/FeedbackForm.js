import React, { useState } from 'react';
import '../styles/FeedbackForm.css';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Feedback:', feedback);
    alert('Feedback Submitted!');
    setFeedback('');
  };

  return (
    <div className="feedback-form-container">
      <h2>Leave Your Feedback</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <label htmlFor="feedback">Feedback:</label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;

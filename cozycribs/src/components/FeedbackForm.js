import React, { useState } from 'react';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Feedback:', feedback);
    alert('Feedback Submitted!');
    setFeedback('');
  };

  return (
    <div className="form-container">
      <h2>Leave Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Feedback:
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;

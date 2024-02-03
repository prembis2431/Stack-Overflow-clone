import React from "react";
import { Link } from "react-router-dom";
import "./HomeMainbar.css";

const Questions = ({ question }) => {
  const {
    votes,
    noofAnswers,
    _id,
    questionTitle,
    questionTags,
    askedOn,
    userPosted,
  } = question;

  return (
    <div className="display-question-container">
      <div className="display-votes-ans">
        <p>{votes}</p>
        <p>votes</p>
      </div>
      <div className="display-votes-ans">
        <p>{noofAnswers}</p>
        <p>Answers</p>
      </div>
      <div className="display-question-details">
        <Link to={`/Questions/${_id}`} className="question-title-link">
          {questionTitle}
        </Link>
        <div className="display-tags-time">
          <div className="display-tags">
            {questionTags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
        
        <p className="display-time">
          {askedOn} {userPosted}
        </p>
      </div>
      </div>
    </div>
  );
};

export default Questions;

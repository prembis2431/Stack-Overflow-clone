import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./HomeMainbar.css";
import QuestionsList from "./QuestionsList";

const HomeMainbar = () => {
  var questionsList = [
    {
      _id: 1,
      upVotes: 3,
      downVotes: 1,
      noofAnswers: 2,
      questionTitle: "What is a higher order function?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongo", "c++"],
      userPosted: "Biswas",
      userId: 1,
      askedOn: "jan 2",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "Premo",
          answeredOn: "jan 3",
          userId: 2,
        },
      ],
    },

    {
      _id: 1,
      upVotes: 4,
      downVotes: 1,
      noofAnswers: 2,
      questionTitle: "What is map(), filter(), reduce()?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongo", "c"],
      userPosted: "Premo",
      userId: 1,
      askedOn: "jan 3",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answeredOn: "jan 2",
          userId: 2,
        },
      ],
    },
    {
      _id: 1,
      upVotes: 2,
      downVotes: 1,
      noofAnswers: 2,
      questionTitle: "What is a promise?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongo", "c"],
      userPosted: "Manoj",
      userId: 1,
      askedOn: "jan 4",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answeredOn: "jan 2",
          userId: 2,
        },
      ],
    },
    {
      _id: 1,
      upVotes: 6,
      downVotes: 2,
      noofAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongo", "c"],
      userPosted: "Manomita",
      userId: 1,
      askedOn: "jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "kumar",
          answeredOn: "jan 2",
          userId: 2,
        },
      ],
    },
  ];

  const location = useLocation();

  const user = 1;
  const navigate = useNavigate();

  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestions");
    }
  };
  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button to="/AskQuestions" onClick={checkAuth} className="ask-btn">
          Ask Questions
        </button>
      </div>

      <div>
        {questionsList === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.length} questions</p>

            <QuestionsList questionsList={questionsList} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;

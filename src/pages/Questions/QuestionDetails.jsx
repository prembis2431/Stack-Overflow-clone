import React from "react";
import { useParams } from "react-router-dom";
import upvote from '../../assets/sort-up.svg'
import downvote from '../../assets/sort-down.svg'
// useParams is a hook provided by React Router that allows you
// to access the parameters (or placeholders) in the URL in a React component.
// for example: in AllRoutes.jsx, we used "/Questions/:id" to access the particular question's detail
// present in the AskQuestions.jsx, so when someone presses the question present in the container,
// the url will take the question's id using useParams().

const QuestionDetails = () => {
  const { id } = useParams();
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

  console.log(id)
  

  return (
    <div className="question-details-page">
       {  questionsList === null ? 
          <h1>Loading...</h1> :
          <>
              {questionsList
              .filter((question) => question._id === id)
              .map((question) => (
                <div key={question._id}>
                  <section className="question-details-container">
                      <h1>{question.questionTitle}</h1>
                      <div className="question-details-container-2">
                        <div className="question-votes">
                            <img src={upvote} alt=""/>
                            <p>{question.upVotes- question.downVotes}</p>
                            <img src={downvote} alt=""/>
                        </div>
                      </div>
                  </section>
                </div>
               ))}
          </>
      }
    </div>
  );
};

export default QuestionDetails;

// {questionsList.filter(question=> question._id===id).map(
// question=> (<div key={question._id}>
// what the above function is doing is, first it is matching the data coming from JSON object(backend)
// with the "id" present in the url coming from AllRoutes.jsx, then it is putting a function by using
// map() that returns a JSX in which we can see the details of the question which is selected.

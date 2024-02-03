import React from 'react'
import Questions from './Questions'

const QuestionsList = ({questionsList}) => {
  return (
    <>
    {
      questionsList.map((question, index) => (
              

              <Questions question={question} key={index}/>
              ))  /* we will change the value of key later */
              /* we are not using js here so we ain't gonna use {...}, we gonna use JSX, so we will use (...) */

      }
    </>
  )
}

export default QuestionsList

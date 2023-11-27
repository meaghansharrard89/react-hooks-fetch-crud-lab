import React, { useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList( { questionData, handleDeletedQuestions } ) {

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionData.map((question) => (
        <li key={question.id}>
          <QuestionItem question={question} handleDelete={handleDeletedQuestions} />
          <h3>{question.prompt}</h3>
          <ul>
            {question.answers.map((answer, index) => (
              <li key={index}>{answer}</li>
            ))}
          </ul>
        </li>
      ))}
      </ul>
    </section>
  );
}

export default QuestionList;

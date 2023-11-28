import React, { useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList( { questionData, handleDeletedQuestions } ) {

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionData.map((question) => (
          <QuestionItem key={question.id} question={question} handleDelete={handleDeletedQuestions} />
      ))}
      </ul>
    </section>
  );
}

export default QuestionList;

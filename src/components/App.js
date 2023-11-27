import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState([]);
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then((res) => res.json())
    .then((item) => setQuestions(item))
  }, [])

  function handleNewQuestion(newQuestion){
    setQuestions([...questions, newQuestion])
  }

  function handleDelete(deletedItem){
    const updatedQuestions = questions.filter((question) => question.id != deletedItem.id);
    setQuestions(updatedQuestions);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm updateNewQuestion={handleNewQuestion} /> : <QuestionList questionData={questions} handleDeletedQuestions={handleDelete} />}
    </main>
  );
}

export default App;

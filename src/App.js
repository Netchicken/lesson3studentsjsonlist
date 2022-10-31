import { React, useState } from "react";
import "./App.css";
import { quizData } from "./Assets/quizz.js";

function App() {
  const allData = quizData;

  const [gameData, setGameData] = useState({ Q: "Start", A: "Start" });
  const [answerData, setAnswerData] = useState();
  let answer;

  const onClickHandlerNewGame = (e) => {
    console.log("onClickHandlerNewGame", "triggered");
  };

  return (
    <div className='App'>
      <button
        className='buttonSubmit btn btn-primary'
        onClick={onClickHandlerNewGame}
      >
        Choose a Random Question
      </button>
    </div>
  );
}

export default App;

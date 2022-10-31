import { React, useState } from "react";
import "./App.css";
import { quizData } from "./Assets/quizz.js";

function App() {
  const allData = quizData;

  const [gameData, setGameData] = useState({ Q: "Start", A: "Start" });
  const [answerData, setAnswerData] = useState();
  let answer;

  const onClickHandlerNewGame = (e) => {
    //  console.log("onClickHandlerNewGame", "triggered");

    let length = allData.length;
    let min = 0;
    let max = length - 1; //remember to take one off the array for the element
    let rand = Math.floor(Math.random() * (max - min + 1)) + min;
    //pass the Q and A to the state
    setGameData({ Q: allData[rand].Q, A: allData[rand].A });
    console.log("rand", rand);
    console.log("gameData", gameData.Q + " " + gameData.A);
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

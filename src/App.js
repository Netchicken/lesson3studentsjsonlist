import { React, useState } from "react";
import "./App.css";
import { quizData, sortedListAnswers } from "./Assets/quizz.js";
import Select from "react-select";
import { Random } from "./Utilities/Random.js";
import {
  selectCustomStyles,
  newplaceholder,
} from "./Utilities/SelectReactSetting.js";

function App() {
  const allData = quizData;
  const [gameData, setGameData] = useState({ Q: "Start", A: "Start" });
  const [answerData, setAnswerData] = useState(sortedListAnswers);
  const [answer, setAnswer] = useState("");
  //let winlose;
  const [winlose, setWinlose] = useState("");

  const onClickHandlerNewGame = () => {
    setAnswer("");
    setWinlose("");
    let rand = Random(allData.length);
    //the actual question and answer
    setGameData({ Q: allData[rand].Q, A: allData[rand].A });

    console.log("rand", rand);
    console.log("gameData Q= ", gameData.Q + " A= " + gameData.A);
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.value);
    let answerLet = e.value; //we need to pass the answer as a let so that its available immediatly and not refreshing the screen
    console.log("answer = ", answerLet + "  gameplay = " + gameData.A);

    setWinlose("- you " + winLoseCalc(answerLet));
   
  };

  const winLoseCalc = (answerLet) => {
    if (answerLet !== "undefined") {
      if (answerLet === gameData.A) {
        return "win";
      } else {
        return "lose";
      }
    }
  };

  return (
    <div className='App'>
      <button
        className='buttonSubmit btn btn-primary'
        onClick={onClickHandlerNewGame}
      >
        Choose a Random Question
      </button>
      <div>
        <h2>{gameData.Q}</h2>
        <h4>{answer ? "You selected " + answer + winlose : ""}</h4>
      </div>
      <div className='col-sm'>
        <Select
          styles={selectCustomStyles}
          options={answerData} //list of data
          className='selectDropDownStyle'
          //value={selectAnswer}
          onChange={handleAnswerChange} //extract the  answer
          placeholder={newplaceholder(answer)} //'Select the place'
          controlShouldRenderValue={true}
        />
      </div>
    </div>
  );
}

export default App;

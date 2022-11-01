import { React, useState } from "react";
import "./App.css";
import { quizData } from "./Assets/quizz.js";
import Select from "react-select";

function App() {
  const allData = quizData;

  const [gameData, setGameData] = useState({ Q: "Start", A: "Start" });
  const [answerData, setAnswerData] = useState();
  let answer;

  const onClickHandlerNewGame = (e) => {
    //  console.log("onClickHandlerNewGame", "triggered");
    answer = "";
    let length = allData.length;
    let min = 0;
    let max = length - 1; //remember to take one off the array for the element
    let rand = Math.floor(Math.random() * (max - min + 1)) + min;
    //pass the Q and A to the state
    setGameData({ Q: allData[rand].Q, A: allData[rand].A });
    //  console.log("rand", rand);
    console.log("gameData", gameData.Q + " " + gameData.A);

    CreateAnswerData();
  };

  const CreateAnswerData = () => {
    //map the data to an array of value and label objects
    const list = allData.map((item) => ({ value: item.A, label: item.A }));
    const listSorted = list.sort((a, b) => (a.value > b.value ? 1 : -1));
    console.log("list", listSorted);
    setAnswerData(listSorted);
  };
  //for the dropdown select https://blog.logrocket.com/getting-started-with-react-select/
  const selectCustomStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px solid green",
      color: state.isSelected ? "yellow" : "black",
      backgroundColor: state.isSelected ? "green" : "white",
      padding: "0px",
    }),
  };
  const handleAnswerChange = (e) => { 
    answer = e.value;

  };


const newplaceholder = () => {
  return answer ? "Select an Answer " + answer : "Select an Answer";
};



  return (
    <div className='App'>
      <button
        className='buttonSubmit btn btn-primary'
        onClick={onClickHandlerNewGame}
      >
        Choose a Random Question
      </button>
      <div className='col-sm'>
        <Select
          styles={selectCustomStyles}
          options={answerData} //list of data
          className='selectDropDownStyle'
          value={answer}
          onChange={handleAnswerChange} //extract the  answer
          placeholder={newplaceholder()} //'Select the place'
          controlShouldRenderValue={true}
        />
      </div>
    </div>
  );
}

export default App;

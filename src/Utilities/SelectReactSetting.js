export const selectCustomStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px solid green",
    color: state.isSelected ? "yellow" : "black",
    backgroundColor: state.isSelected ? "green" : "white",
    padding: "0px",
  }),
};

// export const newplaceholder = (answer) => {
//   console.log("newplaceholder", answer);
//   return answer !== "" ? answer : "Select an Answer";
// };

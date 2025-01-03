import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";
import {useState} from "react";

function App() {
  const [investment, setInvestment] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleInputChange(inputIdentifier, newValue) {
    setInvestment((prevValue) => {
      return {...prevValue, [inputIdentifier]: +newValue}
    });
  }

  return (
      <>
        <Header></Header>
        <UserInput onChangeInput={handleInputChange} investment={investment}></UserInput>
        <Result userInput={investment}></Result>
      </>
  )
}

export default App

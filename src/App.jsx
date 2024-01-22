/**
 * Component Imports
 */

import Header from "./components/Header";
import Calculator from "./components/Calculator";
import Results from "./components/Results";

/**
 * Utils
 */

import { calculateInvestmentResults, formatter } from "./util/investment";
import { useState } from "react";

function App() {
  const [results, setResults] = useState([]);
  function handleCalculate(investmentParams) {
    let results = calculateInvestmentResults(investmentParams);
    for (let r of results) {
      r.valueEndOfYear = formatter.format(r.valueEndOfYear);
      r.annualInvestment = formatter.format(r.annualInvestment);
      r.interest = formatter.format(r.interest);
    }

    console.log("results", results);
    setResults(results);
  }
  return (
    <>
      <Header />
      <Calculator handleCalculate={handleCalculate} />
      <Results results={results} />
    </>
  );
}

export default App;

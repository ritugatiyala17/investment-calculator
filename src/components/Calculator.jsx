import { useState } from "react";

export default function Calculator({ handleCalculate }) {
  const [investmentParams, setInvestmentParams] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });
  function handleParamsChange(params) {
    setInvestmentParams((prevParams) => {
      return { ...prevParams, ...params };
    });
  }
  return (
    <div id="user-input">
      <label className="input-group">
        INITIAL INVESTMENT{" "}
        <input
          type="number"
          value={investmentParams.initialInvestment}
          onChange={(event) =>
            handleParamsChange({
              initialInvestment: Number(event.target.value),
            })
          }
        />
      </label>
      <label className="input-group">
        ANNUAL INVESTMENT{" "}
        <input
          type="number"
          value={investmentParams.annualInvestment}
          onChange={(event) =>
            handleParamsChange({ annualInvestment: Number(event.target.value) })
          }
        />
      </label>
      <label className="input-group">
        EXPECTED RETURN{" "}
        <input
          type="number"
          value={investmentParams.expectedReturn}
          onChange={(event) =>
            handleParamsChange({ expectedReturn: Number(event.target.value) })
          }
        />
      </label>
      <label className="input-group">
        DURATION{" "}
        <input
          type="number"
          value={investmentParams.duration}
          onChange={(event) =>
            handleParamsChange({ duration: Number(event.target.value) })
          }
        />
      </label>
      <button onClick={() => handleCalculate(investmentParams)}>
        Calculate
      </button>
    </div>
  );
}

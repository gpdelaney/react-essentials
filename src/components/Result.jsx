import {calculateInvestmentResults, formatter} from "../util/investment.js";

export default function Result({userInput}){
  const annualData = calculateInvestmentResults(userInput);
  const initialInvestment = annualData[0].valueEndOfYear - annualData[0].interest - annualData[0].annualInvestment;
  return <table id="result">
    <thead>
    <tr>
      <th>
        Year
      </th>
      <th>
        Investment Value
      </th>
      <th>
        Interest (Year)
      </th>
      <th>
        Total Interest
      </th>
      <th>
        Investment Value
      </th>
    </tr>
    </thead>
    <tbody>
      {annualData.map((yearData) =>  {
        const totalYearInvestment = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
        const totalAmountInterest = yearData.valueEndOfYear - totalYearInvestment;
        return (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.valueEndOfYear)}</td>
            <td>{formatter.format(yearData.interest)}</td>
            <td>{formatter.format(totalYearInvestment)}</td>
            <td>{formatter.format(totalAmountInterest)}</td>
          </tr>
      )
      })}
    </tbody>
  </table>
}
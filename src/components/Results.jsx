import { INVESTMENT_RESULTS_TABLE_HEADERS } from "../data";

export default function Results({ results }) {
  return (
    <table id="result" className="center">
      <thead>
        <tr>
          {INVESTMENT_RESULTS_TABLE_HEADERS.map((header) => (
            <th key={header.id}>{header.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {results.map((result) => {
          return (
            <tr key={result.year}>
              {INVESTMENT_RESULTS_TABLE_HEADERS.map((header) => {
                return <td key={header.id}>{result[header.id]}</td>;
              })}
            </tr>
          );
        })}
        <tr></tr>
      </tbody>
    </table>
  );
}

const ResultPanel = ({ exp, day, month, year }) => {
  return (
    <div className="result-panel">
      <span className="subhead">
        Leave expires on: <span>{exp}</span>
      </span>
      <div className="result-date">
        <p className="day-date"> {day} </p>
        <p className="month">{month} </p>
        <p className="year">{year}</p>
      </div>
    </div>
  );
};

export default ResultPanel;

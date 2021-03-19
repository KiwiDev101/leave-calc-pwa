const NumOfDays = ({ onNumEnter }) => {
  return (
    <div className="inp">
      <input
        type="number"
        className="numOfDays"
        placeholder="Enter num of days"
        onChange={() => onNumEnter()}
        required
      />
      <span className="label">Days</span>
    </div>
  );
};

export default NumOfDays;

import { useState } from "react";
import { format } from "date-fns";

const StartDate = () => {
  const [defDate, setDefDate] = useState(format(new Date(), "dd/MM/yyy"));

  return (
    <>
      <label className="inp">
        <span className="label">From</span>
        <input
          type="date"
          className="date-input"
          required
          placeholder={defDate}
          onChange={(e) => setDefDate(e.target)}
        />
      </label>
    </>
  );
};

export default StartDate;

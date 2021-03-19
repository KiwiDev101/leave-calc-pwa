import { useState, useEffect } from "react";
import { format, addDays, subDays, isSaturday, isSunday } from "date-fns";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

import ResultPanel from "./Components/ResultPanel";
import TypeOfLeave from "./Components/TypeOfLeave";
import Form from "./Components/Form";

function App() {
  const [leaveType, setLeaveType] = useState("Type Of Leave");
  var date = addDays(new Date(), 30);
  const [day, setDay] = useState(format(date, "do EEEE,").toString());
  const [month, setMonth] = useState(format(date, "MMMM,").toString());
  const [year, setYear] = useState(format(date, "yyyy").toString());
  const [exp, setExp] = useState(
    format(subDays(date, 1), "do EEE, MMMM, yyyy").toString()
  );

  //============================================================
  // dealing with weekend
  //============================================================
  useEffect(() => {
    // is Saturday
    if (isSaturday(date)) {
      setDay(format(addDays(date, 2), "do EEEE").toString());
    }

    // is Sunday
    if (isSunday(date)) {
      setDay(format(addDays(date, 1), "do EEEE").toString());
    }
  }, [date]);

  //============================================================
  // HANDLE LEAVE TYPE EVENT
  //============================================================

  const handleLeaveType = () => {
    // let startDate = document.querySelector(".date-input");
    let numOfLeave = document.querySelector(".numOfDays");

    // eslint-disable-next-line
    if (numOfLeave.value == 21 || numOfLeave.value == 30) {
      setLeaveType("Vacation Leave");
      // eslint-disable-next-line
    } else if (numOfLeave.value == 112) {
      setLeaveType("Maternity Leave");
    } else if (numOfLeave.value <= 6 && numOfLeave.value >= 3) {
      setLeaveType("Casual Leave");
    } else if (
      (numOfLeave.value <= 20 && numOfLeave.value >= 10) ||
      (numOfLeave.value >= 22 && numOfLeave.value <= 29)
    ) {
      setLeaveType("Part of Vacation Leave");
    } else if (
      (numOfLeave.value >= 31 && numOfLeave.value <= 111) ||
      numOfLeave.value >= 113
    ) {
      setLeaveType("Invalid Leave count");
    } else if (numOfLeave.value === "") {
      setLeaveType("Type of Leave");
    }
  };

  //============================================================
  // ADD DAYS EVENT
  //============================================================

  const handleSum = () => {
    let startDate = document.querySelector(".date-input").value;
    let numOfLeave = document.querySelector(".numOfDays");
    let amount = numOfLeave.value;

    date = addDays(new Date(startDate), amount);

    setDay(format(date, "do EEEE,").toString());
    setMonth(format(date, "MMMM,").toString());
    setYear(format(date, "yyyy").toString());
    setExp(format(subDays(date, 1), "do EEE, MMMM, yyyy").toString());

    // if date ends on a saturday
    if (isSaturday(date)) {
      setDay(format(addDays(date, 2), "do EEEE,").toString());
    }
    // if date ends on a sunday
    if (isSunday(date)) {
      setDay(format(addDays(date, 1), "do EEEE,").toString());
    }
  };

  return (
    <div className="app">
      <Header />
      <TypeOfLeave LeaveType={leaveType} />
      <Form onNumEnter={handleLeaveType} onSum={handleSum} date={date} />
      <ResultPanel exp={exp} day={day} month={month} year={year} />
      <Footer />
    </div>
  );
}

export default App;

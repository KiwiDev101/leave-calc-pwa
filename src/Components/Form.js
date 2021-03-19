import ButtonCheck from "./ButtonCheck";
import NumOfDays from "./NumOfDays";
import StartDate from "./StartDate";

const Form = ({ onNumEnter, onSum, date }) => {
  const handleCheck = () => {
    let btn = document.querySelector(".btn");
    btn.classList.add("checking");

    if (btn.classList.contains("checking")) {
      navigator.vibrate(200);
      setTimeout(() => {
        btn.classList.remove("checking");
      }, 200);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    handleCheck();
    onSum();
    // document.querySelector(".counter-form").reset();
  };

  return (
    <form className="counter-form" onSubmit={onSubmit}>
      <NumOfDays onNumEnter={onNumEnter} />
      <StartDate date={date} />
      <ButtonCheck />
    </form>
  );
};

export default Form;

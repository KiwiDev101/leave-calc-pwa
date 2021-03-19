import logo from "../images/logo.png";

const Header = () => {
  return (
    <div className="head">
      <div className="logo">
        <img src={logo} alt="calender" />
      </div>
      <div className="brand">
        <span>Kiwi Leave Calculator</span>
      </div>
    </div>
  );
};

export default Header;

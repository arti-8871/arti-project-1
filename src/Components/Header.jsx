import React from "react";
let headerMenuItem = [
  {
    key: 1,
    menuName: "Dozee for Hospital",
  },
  {
    key: 2,
    menuName: "Science",
  },
  {
    key: 3,
    menuName: "Resources",
  },
  {
    key: 4,
    menuName: "Careers",
  },
  {
    key: 5,
    menuName: "Contact Us",
  },
  {
    key: 6,
    menuName: "Schedule demo",
  },
];
const Header = (props) => {
  return (
    <React.Fragment>
      <div
        className="header wrapper p-[0.52vw]"
        style={{ background: props.bgColor, color: "white" }}
      >
        <div className="inner-width h-[24.44vw] lg:h-[6.77vw] flex justify-between items-start items-center">
          <div className="headerLogo w-1/5">
            <img
              className="logoImg w-[6.16vw]"
              src={require("../Assests/Images/dozzelogo.png")}
              alt="headerLogo"
            />
          </div>
          <nav className="menu wrapper p-[0.52vw] w-3/5 desktop">
            <ul className="menu list flex list-none justify-between text-[0.866vw] font-bold ">
              {headerMenuItem.map((item, i) => {
                return (
                  <a href="/"  className="menuLink p-[0.67vw]" key={item.key}>
                    <li className="menuItem uppercase">
                      {item.menuName}
                    </li>
                  </a>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;

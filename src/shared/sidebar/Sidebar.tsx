import { useState } from "react";
import "./Sidebar.scss";
export function Sidebar() {
  let [status, setStatus] = useState(true);
  let collapse = () => {
    setStatus((status = !status));
  };
  const list = [
    { id: 0, name: "Dashboard", url: "dashboard" },
    { id: 1, name: "Buy & Sell", url: "buySell" },
    { id: 2, name: "Messages", url: "chat" },
    { id: 3, name: "Crops", url: "crops" },
    { id: 4, name: "Credit Debit", url: "finance" },
    { id: 5, name: "Reports", url: "reports" },
    { id: 6, name: "Settings", url: "settings" },
  ];

  return (
    <>
      <div className="navigation">
        <div
          className={`sidebar ${status ? "slideInLeft" : "slide-left"}`}
          style={status ? { width: "280px" } : { width: "85px" }}
        >
          <div className="arrow" onClick={collapse}></div>
          <br />
          <br />
          <br />
          <br />
          <ul className="navbar">
            <li>
              {list.map((data) => (
                <a href={data.url}>
                  <div className="iconItem"></div>
                  <span
                    className={`sidebar trans ${status ? "navText" : "hide"}`}
                  >
                    {data.name}
                  </span>
                </a>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

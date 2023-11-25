import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { getRenderDate } from "../../utils/date";
import "./Header.css";

const handleNavigateSearch = () => {
  window.location.replace("/search");
};

const Header = () => {
  const [showDate, setShowDate] = useState(false);
  const [timeState, setTimeState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const time = {
    from: getRenderDate(new Date(timeState[0].startDate)),
    to: getRenderDate(new Date(timeState[0].endDate)),
  };

  const handleShowDate = () => {
    setShowDate((x) => !x);
  };

  const handleClickOutside = () => {
    setShowDate(false);
  };

  const room = {
    adult: 1,
    children: 0,
    count: 1,
  };

  return (
    <div className="header">
      {showDate && (
        <div className="header-outside" onClick={handleClickOutside}></div>
      )}
      <div className="header__body">
        <div className="container">
          <h2 className="header__title">
            A lifetime of discounts? It's Genius.
          </h2>
          <div className="header__description">
            Get rewarded for your travels - unlock instant savings of 10% or
            more with a free account
          </div>
          <a href="/" className="header__button">
            Sign in / Register
          </a>
        </div>
      </div>
      <div className="header__footer">
        <div className="container">
          <div className="header-box">
            <div className="header-box__item">
              <FontAwesomeIcon icon="fa-solid fa-bed" />
              <span className="header-box__title">Where are you going?</span>
            </div>
            <div className="header-box__date">
              <div className="header-box__item" onClick={handleShowDate}>
                <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
                {time.from} to {time.to}
              </div>
              {showDate && (
                <DateRange
                  minDate={new Date()}
                  editableDateInputs={true}
                  moveRangeOnFirstSelection={false}
                  className="date-modal"
                  onChange={(item) => setTimeState([item.selection])}
                  ranges={timeState}
                />
              )}
            </div>
            <div className="header-box__item">
              <FontAwesomeIcon icon="fa-solid fa-male" />
              {[
                `${room.adult} adult`,
                `${room.children} children`,
                `${room.count} room`,
              ].join(" \u00a0•\u00a0 ")}
            </div>
            <button
              type="button"
              onClick={handleNavigateSearch}
              className="header__button"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

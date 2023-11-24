import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

/**
 * @param {Date} date
 */
const getRenderDate = (date) => {
  const month = date.toLocaleString("en-US", { month: "2-digit" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

const handleNavigateSearch = () => {
  window.location.replace("/replace");
};

const Header = () => {
  const time = {
    from: getRenderDate(new Date("2022-06-24")),
    to: getRenderDate(new Date("2022-06-24")),
  };

  const room = {
    adult: 1,
    children: 0,
    count: 1,
  };

  return (
    <div className="header">
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
            <div className="header-box__item">
              <FontAwesomeIcon icon="fa-solid fa-calendar" />
              {time.from} to {time.to}
            </div>
            <div className="header-box__item">
              <FontAwesomeIcon icon="fa-solid fa-female" />
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

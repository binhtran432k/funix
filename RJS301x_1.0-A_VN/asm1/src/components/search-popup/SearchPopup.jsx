import { getRenderDate } from "../../utils/date";
import "./SearchPopup.css";

/**
 * @param {SubmitEvent} e
 */
const handleSubmit = (e) => {
  e.preventDefault();
  alert("This feature is not implemented yet!");
};

const SearchPopup = () => {
  const time = {
    from: getRenderDate(new Date("2022-06-24")),
    to: getRenderDate(new Date("2022-06-24")),
  };

  const options = {
    minPerNight: "",
    maxPerNight: "",
    adult: "1",
    children: "0",
    room: "1",
  };

  return (
    <form className="search-popup" onSubmit={handleSubmit}>
      <h3 className="search-popup__title">Search</h3>

      {[
        ["destination", "Destination", ""],
        ["checkInDate", "Check-in Date", `${time.from} to ${time.to}`],
      ].map(([name, label, value]) => (
        <label className="search-popup__label" key={name}>
          {label}
          <input
            type="text"
            name={name}
            className="search-popup__input"
            defaultValue={value}
          />
        </label>
      ))}

      <label className="search-popup__label">
        Options
        {[
          [
            "minPerNight",
            <span>
              Min price <span className="search-popup__sublabel--small">per night</span>
            </span>,
            options.minPerNight,
          ],
          [
            "maxPerNight",
            <span>
              Max price <span className="search-popup__sublabel--small">per night</span>
            </span>,
            options.maxPerNight,
          ],
          ["adult", "Adult", options.adult],
          ["children", "Children", options.children],
          ["room", "Room", options.room],
        ].map(([name, label, value]) => (
          <label className="search-popup__sublabel" key={name}>
            {label}
            <input
              type="text"
              name={name}
              className="search-popup__subinput"
              defaultValue={value}
            />
          </label>
        ))}
      </label>

      <button type="submit" className="search-popup__button">
        Search
      </button>
    </form>
  );
};

export default SearchPopup;

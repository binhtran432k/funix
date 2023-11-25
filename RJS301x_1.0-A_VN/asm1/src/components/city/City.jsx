import cities from "./city.json";
import "./City.css";

const City = () => {
  return (
    <div className="city">
      <div className="city__list container">
        {cities.map((city) => (
          <div
            className="city__item"
            style={{ "--city-img": `url(${city.image})` }}
            key={city.name}
          >
            <div className="city__name">{city.name}</div>
            <div className="city__subtext">{city.subText}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default City;

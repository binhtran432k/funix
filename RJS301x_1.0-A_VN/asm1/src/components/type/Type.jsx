import types from "./type.json";
import "./Type.css";

const Type = () => {
  return (
    <div className="type">
      <div className="container">
        <h2 className="type__title">Browse by property type</h2>
        <div className="type__list">
          {types.map((type) => (
            <div className="type__item" key={type.name}>
              <img src={type.image} alt={type.name} className="type__image" />
              <div className="type__name">{type.name}</div>
              <div className="type__subtext">{type.count} hotels</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Type;

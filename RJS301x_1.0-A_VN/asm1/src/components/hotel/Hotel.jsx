import "./Hotel.css";
import hotels from "./hotel_list.json";

const Hotel = () => {
  return (
    <div className="hotel">
      <div className="container">
        <h2 className="hotel__title">Home guests love</h2>
        <div className="hotel__list">
          {hotels.map((hotel) => (
            <div className="hotel__item" key={hotel.name}>
              <img
                src={hotel.image_url}
                alt={hotel.name}
                className="hotel__image"
              />
              <div className="hotel__name">{hotel.name}</div>
              <div className="hotel__city">{hotel.city}</div>
              <div className="hotel__price">Starting from ${hotel.price}</div>
              <div className="hotel__rate">
                <div className="hotel__rate-number">{hotel.rate}</div>
                <div>{hotel.type}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotel;

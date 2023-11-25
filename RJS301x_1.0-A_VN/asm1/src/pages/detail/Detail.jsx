import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Default } from "../../layouts";
import "./Detail.css";
import detail from "./detail.json";

/**
 * @param {SubmitEvent} e
 */
const handleReserve = (e) => {
  e.preventDefault();
  alert("This feature is not implemented yet!");
};

const Detail = () => {
  return (
    <Default>
      <div className="detail">
        <div className="container">
          <div className="detail__header">
            <div className="detail__header-left">
              <h2 className="detail__name">{detail.name}</h2>
              <div className="detail__address">
                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                {detail.address}
              </div>
              <div className="detail__distance">{detail.distance}</div>
              <div className="detail__price">{detail.price}</div>
            </div>
            <div className="detail__header-right">
              <button
                type="button"
                className="detail__button"
                onClick={handleReserve}
              >
                Reserve or Book now!
              </button>
            </div>
          </div>
          <div className="detail__body">
            <div className="detail__photo-list">
              {detail.photos.map((photo) => (
                <img
                  className="detail__photo"
                  src={photo}
                  alt={detail.name}
                  key={photo}
                />
              ))}
            </div>
          </div>
          <div className="detail__footer">
            <div className="detail__content">
              <div className="detail__title">{detail.title}</div>
              <div className="detail__description">{detail.description}</div>
            </div>
            <div className="detail-nine-night">
              <div className="detail-nine-night__title">
                Perfect for a 9-night stay!
              </div>
              <div className="detail-nine-night__description">
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </div>
              <div className="detail-nine-night__price">
                <b>${detail.nine_night_price}</b> (9 nights)
              </div>
              <button
                type="button"
                className="detail__button"
                onClick={handleReserve}
              >
                Reserve or Book Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </Default>
  );
};

export default Detail;

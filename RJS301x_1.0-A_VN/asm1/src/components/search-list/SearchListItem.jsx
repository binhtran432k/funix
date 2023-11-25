import PropTypes from "prop-types";

/**
 * @typedef SearchItem
 * @property {string} name
 * @property {string} distance
 * @property {string} tag
 * @property {string} type
 * @property {string} description
 * @property {boolean} free_cancel
 * @property {number} price
 * @property {number} rate
 * @property {string} rate_text
 * @property {string} image_url
 */

/**
 * @typedef SearchListItemProp
 * @property {SearchItem} item
 */

/**
 * @type {React.FC<SearchListItemProp>}
 */
const SearchListItem = (props) => {
  const search = props.item;
  return (
    <div className="search-item">
      <img
        src={search.image_url}
        alt={search.name}
        className="search-item__image"
      />
      <div className="search-item__body">
        <div className="search-item__left">
          <div className="search-item__name">{search.name}</div>
          <div className="search-item__distance">
            {search.distance} from center
          </div>
          <div className="search-item__tag">{search.tag}</div>
          <div className="search-item__description">{search.description}</div>
          <div className="search-item__type">{search.type}</div>
          {search.free_cancel && (
            <>
              <div className="search-item__free-cancel">Free cancellation</div>
              <div className="search-item__free-cancel-tip">
                You can cancel later, so lock in this great price today!
              </div>
            </>
          )}
        </div>
        <div className="search-item__right">
          <div className="search-item__rate">
            <div className="search-item__rate-text">{search.rate_text}</div>
            <div className="search-item__rate-number">{search.rate}</div>
          </div>
          <div className="search-item__price">${search.price}</div>
          <div className="search-item__price-tip">Includes taxes and fees</div>
          <a href="/detail" className="search-item__button">
            See availablility
          </a>
        </div>
      </div>
    </div>
  );
};

SearchListItem.propTypes = {
  item: PropTypes.object,
};

export default SearchListItem;

import "./Subcribe.css";

/**
 * @param {SubmitEvent} e
 */
const handleSubmit = (e) => {
  e.preventDefault();
  alert("This feature is not implemented yet!");
};

const Subcribe = () => {
  return (
    <div className="subcribe">
      <div className="subcribe__body container">
        <h2 className="subcribe__title">Save time, save money!</h2>
        <div className="subcribe__description">
          Sign up and we'll send the best deals to you
        </div>
        <form onSubmit={handleSubmit} className="subcribe__form">
          <input
            type="email"
            placeholder="Your Email"
            className="subcribe__input"
          />
          <button type="submit" className="subcribe__button">
            Subcribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subcribe;

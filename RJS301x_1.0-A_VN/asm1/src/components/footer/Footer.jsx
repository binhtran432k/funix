import "./Footer.css";
import FooterColumn from "./FooterColumn";
import footers from "./footer.json";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__list container">
        {footers.map((footer) => (
          <FooterColumn {...footer} key={footer.col_number} />
        ))}
      </div>
    </div>
  );
};

export default Footer;

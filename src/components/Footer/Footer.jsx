import "./Footer.scss";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__wrapper">
          <div className="footer__company">
            <h3 className="footer__title">Company</h3>
            <p className="footer__text">About us</p>
            <p className="footer__text">Blog</p>
            <p className="footer__text">Policy</p>
          </div>
          <div className="footer__account">
            <h3 className="footer__title">Account</h3>
            <p className="footer__text">Payment</p>
            <p className="footer__text">Support</p>
            <p className="footer__text">Contact us</p>
          </div>
        </div>
        <div>
          <h3 className="footer__subtitle">Subscribe for Updates</h3>
          <div className="footer__subscribe">
            <input className="footer__input" placeholder="Enter Email" />
            <button className="footer__button" type="button">
              Subscribe
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

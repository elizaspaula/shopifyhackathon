import "./Footer.scss";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div>
          <div className="footer__company">
            <h3 className="footer__title">Company</h3>
            <p>About us</p>
            <p>Blog</p>
            <p>Policy</p>
          </div>
          <div className="footer__account">
            <h3 className="footer__title">Account</h3>
            <p>Payment</p>
            <p>Support</p>
            <p>Contact us</p>
          </div>
        </div>
        <div>
          <h3 className="footer__title">Subscribe for Updates</h3>
          <textarea placeholder="Enter Email"> </textarea>
        </div>
      </footer>
    </>
  );
}

export default Footer;

import "./SupportSection.scss";
import sage from "../../assets/images/image 89.svg";
import okanaga from "../../assets/images/image 90.svg";

function SupportSection() {
  return (
    <>
      <div className="support-products">
        <h1 className="support-products__title">
          Support other indigenous Business
        </h1>
        <div className="support-products__content">
          <div className="support-products__products">
            <img
              className="support-products__image"
              src={sage}
              alt="bottle of sage oil"
            />
            <h2 className="support-products__subtitle">Sister Sage</h2>
            <p className="support-products__text">
              Sister Sage is a company founded by two sisters from the Metis
              Nation that create handcrafted products such as salves and soaps
              using traditional indigenous ingredients
            </p>
          </div>
          <div className="support-products__products">
            <img
              className="support-products__image--okanagan"
              src={okanaga}
              alt="okanagan  logo"
            />
            <h2 className="support-products__subtitle">North Okanagan</h2>
            <p className="support-products__text">
              North Okanagan is a clothing line brand that was created during
              the pandemic. The owners, Cody and Sara are graphic designers that
              want to showcase their apparel to represent the Okanagan
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SupportSection;

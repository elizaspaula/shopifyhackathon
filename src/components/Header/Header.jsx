import "./Header.scss";
import personIcon from "../../assets/Solid/Communication/User.png";
import shoppngIcon from "../../assets/Solid/General/Shopping-cart.png";
import heartIcon from "../../assets/Solid/Status/Heart.png";
import SearchIcon from "../../assets/icons/search.svg";
import shopifyIcon from "../../assets/icons/shopify-2 1.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__section">
          <div className="header__shopifyIcon-container">
            <img className="header__shopifyIcon" src={shopifyIcon}></img>
            <div className="header__title">
              <p>Indigenous store</p>
            </div>
          </div>
          <div className="header__inputcontainer">
            <input
              className="header__input"
              type="text"
              placeholder="search for anything "
            ></input>
            <img className="header__input--searchIcon" src={SearchIcon}></img>

            <ul className="header__list">
              <li className="header__list--heart">
                <img className="header__list--heart" src={heartIcon} />
              </li>
              <li className="header__list--trolley">
                <img src={shoppngIcon} />
              </li>
              <li className="header__list--person">
                <img src={personIcon} />
              </li>
            </ul>
          </div>
        </div>

        <nav className="nav">
          <ul className="nav__list">
            <li>Home Favourites</li>
            <li>Clothing & Shoes</li>
            <li>Home & living</li>
            <li>Arts & Collectibles</li>
            <li>Jewellery & Accessories</li>
            <li>Craft Supplies</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;

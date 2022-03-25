import "./Hero.scss";
import handbag from "../../assets/images/image 67.png";
import basket from "../../assets/images/image 63.png";
import pendant from "../../assets/images/image 68.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__title-container">
        <h1 className="hero__title">
          Explore One-of-a kind finds from indigenous Makers
        </h1>
      </div>
      <div className="hero__images">
        <div className="hero__image-section">
          <img className="hero__image" src={handbag}></img>
          <p>
            Jelly Fish Pendant Lamp(small)
            <br />
            ★★★★★
            <br />
            $19.99
          </p>
        </div>
        <div>
          <img className="hero__image" src={handbag}></img>
          <p>
            Corn Tate Bag
            <br />
            ★★★
            <br />
            $14.99
          </p>
        </div>
        <div>
          <img className="hero__image" src={basket}></img>
          <p>
            Hand Made Bamboo Basket
            <br />
            ★★★★★
            <br />
            $18.99
          </p>
        </div>
        <div>
          <img className="hero__image" src={pendant}></img>
          <p>
            Wild Wasp Macrame Pendant
            <br />
            ★★★★★
            <br />
            $29.99(10%off)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

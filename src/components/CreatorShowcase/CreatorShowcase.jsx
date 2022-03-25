import "./CreatorShowcase.scss";
import ArtistImg1 from "../../assets/images/artist-1.png";
import ArtistImg2 from "../../assets/images/artist-2.png";
import ArtistImg3 from "../../assets/images/artist-3.png";
import Item1 from "../../assets/images/Mask-group-4.png";
import Item2 from "../../assets/images/Mask-group-5.png";
import Item3 from "../../assets/images/Mask-group-6.png";
import Item4 from "../../assets/images/Mask-group-7.png";
import Item5 from "../../assets/images/Mask-group-8.png";
import Item6 from "../../assets/images/Mask-group-9.png";
import Item7 from "../../assets/images/1.png";
import Item8 from "../../assets/images/2.png";
import Item9 from "../../assets/images/3.png";
import Auth from "../../assets/icons/secure_major.png";
import Star from "../../assets/icons/star.png";

export default function CreatorShowcase() {
  return (
    <>
      <section className="creator-showcase">
        <div className="creator-showcase__container">
          <h2 className="creator-showcase__header">Creators Showcase</h2>
          <article className="creator-showcase__subheader">
            Here are some upcoming creators that have implemented new products
            to their store.
          </article>
        </div>
        <div className="creator-showcase__artist">
          <div className="creator-showcase__artist-container1">
            <img
              className="creator-showcase__artist-pic"
              src={ArtistImg1}
              alt="Artist user profile."
            />
            <div className="creator-showcase__profile-header">
              <h2 className="creator-showcase__name">Lauren Chewey</h2>
              <div className="creator-showcase__auth-cont">
                <img
                  className="creator-showcase__auth"
                  src={Auth}
                  alt="Shopify Authenticated Seller."
                />
              </div>
            </div>
            <p className="creator-showcase__about-artist">
              Lauren is from the Inuit aboringal group from Canada and loves to
              create diverse lamps
            </p>
            <div className="creator-showcase__products-cont">
              <div className="creator-showcase__products">
                <div className="creator-showcase__products-item-cont">
                  <img className="creator-showcase__item1" src={Item1} alt="" />
                  <p className="creator-showcase__item1-desc">Haze Saddle</p>
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <p className="creator-showcase__item1-price">$12.99</p>
                </div>
                <div className="creator-showcase__products-item-cont">
                  <img className="creator-showcase__item2" src={Item2} alt="" />
                  <p className="creator-showcase__item1-desc">Wooden Lamp</p>
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <p className="creator-showcase__item1-price">$12.99</p>
                </div>
                <div className="creator-showcase__products-item-cont">
                  <img className="creator-showcase__item3" src={Item3} alt="" />
                  <p className="creator-showcase__item1-desc">Paper Lamp</p>
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <p className="creator-showcase__item1-price">$12.99</p>
                </div>
              </div>
            </div>
          </div>

          <div className="creator-showcase__artist-container2 creator-showcase__artist-container2--margins">
            <img
              className="creator-showcase__artist-pic"
              src={ArtistImg2}
              alt="Artist user profile."
            />
            <div className="creator-showcase__profile-header">
              <h2 className="creator-showcase__name">Adriel Huaman</h2>
              <div className="creator-showcase__auth-cont">
                <img
                  className="creator-showcase__auth"
                  src={Auth}
                  alt="Shopify Authenticated Seller."
                />
              </div>
            </div>
            <p className="creator-showcase__about-artist">
              Adriel comes from the Skyway First Nation and wants to represent
              his tribe by selling accessories and jewellery products
            </p>
            <div className="creator-showcase__products-cont">
              <div className="creator-showcase__products">
                <div className="creator-showcase__products-item-cont">
                  <img className="creator-showcase__item1" src={Item4} alt="" />
                  <p className="creator-showcase__item1-desc">Heart Earrings</p>
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <p className="creator-showcase__item1-price">$12.99</p>
                </div>
                <div className="creator-showcase__products-item-cont">
                  <img className="creator-showcase__item2" src={Item5} alt="" />
                  <p className="creator-showcase__item1-desc">
                    Butterfly Pendant
                  </p>
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <p className="creator-showcase__item1-price">$12.99</p>
                </div>
                <div className="creator-showcase__products-item-cont">
                  <img className="creator-showcase__item3" src={Item6} alt="" />
                  <p className="creator-showcase__item1-desc">Bead Necklace</p>
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <p className="creator-showcase__item1-price">$12.99</p>
                </div>
              </div>
            </div>
          </div>
          <div className="creator-showcase__artist-container3">
            <img
              className="creator-showcase__artist-pic"
              src={ArtistImg3}
              alt="Artist user profile."
            />
            <div className="creator-showcase__profile-header">
              <h2 className="creator-showcase__name">Ayita Swiftwater</h2>
              <div className="creator-showcase__auth-cont">
                <img
                  className="creator-showcase__auth"
                  src={Auth}
                  alt="Shopify Authenticated Seller."
                />
              </div>
            </div>
            <p className="creator-showcase__about-artist">
              Ayita is of the Nootka tribe from Vancouver Island and makes
              native textiles
            </p>
            <div className="creator-showcase__products-cont">
              <div className="creator-showcase__products">
                <div className="creator-showcase__products-item-cont">
                  <img className="creator-showcase__item1" src={Item7} alt="" />
                  <p className="creator-showcase__item1-desc">
                    Riverbend Blanket
                  </p>
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <p className="creator-showcase__item1-price">$12.99</p>
                </div>
                <div className="creator-showcase__products-item-cont">
                  <img className="creator-showcase__item2" src={Item8} alt="" />
                  <p className="creator-showcase__item1-desc">
                    Northern Lights Blanket
                  </p>
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <p className="creator-showcase__item1-price">$12.99</p>
                </div>
                <div className="creator-showcase__products-item-cont">
                  <img className="creator-showcase__item3" src={Item9} alt="" />
                  <p className="creator-showcase__item1-desc">
                    Rock Valley Blanket
                  </p>
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <img className="creator-showcase__stars" src={Star} />
                  <p className="creator-showcase__item1-price">$12.99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

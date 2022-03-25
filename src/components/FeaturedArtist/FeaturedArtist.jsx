import './FeaturedArtist.scss';
import MeetArtistImage from '../../assets/images/Mask-group.png';
import ShopifyIcon from '../../assets/icons/shopify-2.png';
import TikTok from '../../assets/icons/TikTok.png';
import IG from '../../assets/icons/Instagram.png';


export default function FeaturedArtist() {
    return (
        <>
        <section className="featured-artist">
            <h1 className="featured-artist__header">
                Meet Shina Novalinga
            </h1>
                <article className="featured-artist__container">
                    <img className="featured-artist__image" 
                    src={MeetArtistImage}
                    alt="Featured Artist"
                    />
                        <div className="featured-artist__body-container">
                            <p className="featured-artst__body">
                                Nunavik-born Shina is a popular throat singer 
                                that showcases her Inuit culture through TikTok 
                                and has a mass following of over 1.6M followers 
                                on social media platforms. She shares her cutlural 
                                experiences and her lifestyle to educate her audience 
                                about Indigenous culture.
                            </p>

                                <div className="featured-artist__cta">
                                    <button className="featured-artist__button">
                                        Learn More
                                    </button>
                                        <div className="featured-artist__social">
                                            <img className="featured-artist__shop" 
                                            src={ShopifyIcon}
                                            alt="Shopify Icon"
                                            />
                                            <img className="featured-artist__tiktok"
                                            src={TikTok}
                                            alt="TikTok Icon"
                                            />
                                            <img className="featured-artist__ig"
                                            src={IG}
                                            alt="Instagram Icon"
                                            />
                                        </div>
                                </div>

                        </div>
                         
                </article>
        </section>
        </>
    )
}
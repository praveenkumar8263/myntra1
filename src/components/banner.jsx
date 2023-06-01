import BannerImg from '../image/banner.png'
import '../Styles/banner.css'
const Banner = (e) => {
    return (
        <div className="bannerImg">
            <div className="child">
            <img src={BannerImg} alt="" />
            </div>
        </div>
        
    );
};
export default Banner;
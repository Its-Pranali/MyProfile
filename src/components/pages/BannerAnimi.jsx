import "../../assets/css/BannerAnimi.css";


function BannerAnimi() {
    return (
        <>
            <div className="tmp-banner-circle">
                <img decoding="async" className="tmp-banner-circle-1" src="assets/images/shape-01.svg" alt="circle-image" />
                <img decoding="async" className="tmp-banner-circle-2" src="assets/images/shape-02.svg" alt="circle-image" />
                <img decoding="async" className="tmp-banner-circle-3" src="assets/images/shape-03.svg" alt="circle-image" />
                <img decoding="async" className="tmp-banner-circle-4" src="assets/images/shape-04.svg" alt="circle-image" />
            </div>
            <div className="slider-bg-light">
                <img decoding="async" className="blocksync-scroll-trigger fade_in animation-order-8" src="assets/images/banner-shape-light-1.png" alt="Top Light Shape" />
            </div>
            <div className="slider-bg-dot-shape">
                <div className="wrapper blocksync-scroll-trigger blocksync-stars-area fade_in animation-order-16">
                    <div className="blocksync-stars"></div>
                    <div className="blocksync-stars2"></div>
                    <div className="blocksync-stars3"></div>
                </div>
            </div>
        </>
    );
}
export default BannerAnimi;
import Main from "../layout/Main";
import BannerAnimi from "./BannerAnimi";
import "../../assets/css/Home.css";


function Home() {
    return (
        <Main>
            <section className="banner-section py-5">
                <div className="container">
                    <div className="row align-items-center text-white">
                        <div className="col-md-7">
                            <h2 className="sub-heading">Hello  there...</h2>
                            <h1 className="heading">Pranali Nikam</h1>
                            <p className="text">Crafting modern, responsive, and user-centric websites with React, WordPress & modern front-end technologies.
                                Turning great ideas into real digital experiences.</p>
                            <div className="cons_w_wrapper download-resume"> <a href="https://pranalinikam.22web.org/wp-content/uploads/2026/02/Pranali-Nikam.pdf" download="" className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon text-decoration-none" data-align="">
                                <span className="icon-reverse-wrapper">
                                    <span className="btn-text">Download Resume</span>
                                    <span className="btn-hack"></span>
                                    <img decoding="async" src="../../../public/assets/images/btg-bg.svg" alt="" className="btn-bg" />
                                    <img decoding="async" src="../../../public/assets/images/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                    <span className="btn-icon">
                                        <i><svg className="fn__svg fn__svg_arrow-right " width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z">
                                            </path>
                                        </svg></i> </span>
                                    <span className="btn-icon">
                                        <i><svg className="fn__svg fn__svg_arrow-right " width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z">
                                            </path>
                                        </svg></i> </span>
                                </span>
                            </a></div>
                        </div>
                        <div className="col-md-5">
                            <div className="me-img tmponhover">
                                <img src="../../../public/assets/images/pranali-img.jpg" className="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BannerAnimi />

            <section className="about-sec py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="about-card">
                                <h2 className="sub-heading text-center">About Me</h2>
                                <h2 className="heading text-center">Who I Am</h2>
                                <p className="text">I am a passionate and detail-oriented Front-End Developer with over 2+ years of experience in designing and developing modern, responsive, and user-friendly websites. I specialize in transforming creative ideas and UI/UX designs into functional, high-performing web applications.</p>

                                <p className="text">I have hands-on experience working with React.js, TypeScript, HTML5, CSS3, JavaScript, and modern frameworks like Bootstrap and Tailwind CSS. I enjoy building scalable UI components, optimizing performance, and ensuring seamless user experiences across all devices and browsers.</p>

                                <p className="text">Along with development, I have strong expertise in UI/UX design tools such as Figma, Adobe Photoshop, and Canva, which helps me bridge the gap between design and development effectively.</p>

                                <p className="text">I also bring extensive experience in working with multiple CMS platforms including WordPress, Webflow, Wix, Shopify, and Squarespace, allowing me to deliver flexible and client-focused solutions.</p>

                                <p className="text">Currently, I am working as a UI Developer at Vidya Online Services Pvt. Ltd., Pune, where I collaborate with designers and backend teams to build dynamic and efficient web applications. Previously, I worked as a Front-End Developer at Walstar Technologies Pvt. Ltd., where I contributed to multiple live projects and enhanced my development skills.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="counter-sec text-light py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="counter-card text-center">
                                <h2 className="counter-count">30+</h2>
                                <p className="counter-text">Years Experience</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="counter-card text-center">
                                <h2 className="counter-count">10+</h2>
                                <p className="counter-text">Websites Build</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="counter-card text-center">
                                <h2 className="counter-count">5+</h2>
                                <p className="counter-text">Frontend Tools</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="counter-card text-center">
                                <h2 className="counter-count">100%</h2>
                                <p className="counter-text">Responsive Designs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="experience py-5 text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="sub-heading">Experience</h2>
                            <h2 className="heading">My Work Experience</h2>
                        </div>
                    </div>

                    <div className="row service-card">
                        <div className="col-md-4">
                            <div className="unit">
                                <h2>UI Developer</h2>
                                <p>Nov 2024 – Present</p>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h2>Vidya Online Services Pune Pvt Ltd</h2>
                            <p>Developing scalable React applications with reusable components, API integration, and performance optimization.</p>
                            <h3>Technologies</h3>
                            <div className="tech-btn">
                                <span className="gradient-tag">React</span>
                                <span className="gradient-tag">Tailwind CSS</span>
                                <span className="gradient-tag">Laravel</span>
                                <span className="gradient-tag">Git</span>
                                <span className="gradient-tag">MySQL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Main>
    );
}
export default Home;
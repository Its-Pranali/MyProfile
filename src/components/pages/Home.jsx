import Main from "../layout/Main";
import BannerAnimi from "./BannerAnimi";
import "../../assets/css/Home.css";
import { Check } from "lucide-react";

function Home() {
    return (
        <Main>

            <section className="banner-section py-5">
                <BannerAnimi />
                <div className="container">
                    <div className="row align-items-center text-white">
                        <div className="col-md-7">
                            <h2 className="sub-heading">Hello  there...</h2>
                            <h1 className="heading">Pranali Nikam</h1>
                            <p className="text">Crafting modern, responsive, and user-centric websites with React, WordPress & modern front-end technologies.
                                Turning great ideas into real digital experiences.</p>
                            <div className="cons_w_wrapper download-resume"> <a href="assets/images/Pranali_S_Nikam.pdf" download="" className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon text-decoration-none" data-align="">
                                <span className="icon-reverse-wrapper">
                                    <span className="btn-text">Download Resume</span>
                                    <span className="btn-hack"></span>
                                    <img decoding="async" src="assets/images/btg-bg.svg" alt="" className="btn-bg" />
                                    <img decoding="async" src="assets/images/btg-bg-2.svg" alt="" className="btn-bg-hover" />
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
                                <img src="assets/images/pranali-img.jpg" />
                                {/* <img src="../../../public/assets/images/pranali-img.jpg" className="" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


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
                        <div className="col-md-3 my-2">
                            <div className="counter-card text-center">
                                <h2 className="counter-count">2+</h2>
                                <p className="counter-text">Years Experience</p>
                            </div>
                        </div>
                        <div className="col-md-3 my-2">
                            <div className="counter-card text-center">
                                <h2 className="counter-count">30+</h2>
                                <p className="counter-text">Websites Build</p>
                            </div>
                        </div>
                        <div className="col-md-3 my-2">
                            <div className="counter-card text-center">
                                <h2 className="counter-count">10+</h2>
                                <p className="counter-text">Frontend Tools</p>
                            </div>
                        </div>
                        <div className="col-md-3 my-2">
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

                    <div className="row service-card align-items-center mb-4">
                        <div className="col-md-4 my-2">
                            <div className="unit">
                                <h2 className="exp-heading">UI Developer</h2>
                                <p className="text">Nov 2024 – Present</p>

                                <div className="d-flex align-items-center gap-1 mb-3">
                                    <Check size={18} className="check-icon" />
                                    <p className="job-type mb-0">Onsite</p>
                                </div>

                                <a class="tmp-btn temp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon exp-btn" data-align="">
                                    <span class="icon-reverse-wrapper">
                                        <span class="btn-text">Full Time</span>
                                        <span class="btn-hack"></span>
                                        <img decoding="async" src="assets/images/btg-bg.svg" alt="" class="btn-bg" />
                                        <img decoding="async" src="assets/images/btg-bg-2.svg" alt="" class="btn-bg-hover" />
                                        <span class="btn-icon">
                                            <i><svg class="fn__svg fn__svg_arrow-right " width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z">
                                                </path>
                                            </svg></i> </span>
                                        <span class="btn-icon">
                                            <i><svg class="fn__svg fn__svg_arrow-right " width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z">
                                                </path>
                                            </svg></i> </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h2 className="company-name">Vidya Online Services Pune Pvt Ltd</h2>
                            <p className="text">Developing scalable React applications with reusable components, API integration, and performance optimization.</p>
                            <h3 className="tech">Technologies</h3>
                            <div className="tech-btn">
                                <span className="gradient-tag">React</span>
                                <span className="gradient-tag">Tailwind CSS</span>
                                <span className="gradient-tag">Laravel</span>
                                <span className="gradient-tag">Git</span>
                                <span className="gradient-tag">MySQL</span>
                            </div>
                        </div>
                    </div>

                    <div className="row service-card align-items-center mb-4">
                        <div className="col-md-4 my-2">
                            <div className="unit">
                                <h2 className="exp-heading">Jr. Web Developer</h2>
                                <p className="text">Sept 2023 – Sept 2024</p>

                                <div className="d-flex align-items-center gap-1 mb-3">
                                    <Check size={18} className="check-icon" />
                                    <p className="job-type mb-0">Onsite</p>
                                </div>

                                <a class="tmp-btn temp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon exp-btn" data-align="">
                                    <span class="icon-reverse-wrapper">
                                        <span class="btn-text">Full Time</span>
                                        <span class="btn-hack"></span>
                                        <img decoding="async" src="assets/images/btg-bg.svg" alt="" class="btn-bg" />
                                        <img decoding="async" src="assets/images/btg-bg-2.svg" alt="" class="btn-bg-hover" />
                                        <span class="btn-icon">
                                            <i><svg class="fn__svg fn__svg_arrow-right " width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z">
                                                </path>
                                            </svg></i> </span>
                                        <span class="btn-icon">
                                            <i><svg class="fn__svg fn__svg_arrow-right " width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z">
                                                </path>
                                            </svg></i> </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h2 className="company-name">Walstar Technologies Private Ltd Kolhapur</h2>
                            <p className="text">Built and customized WordPress and CMS-based websites using Elementor, Divi, and other builders. Delivered responsive, SEO-friendly websites aligned with client business goals.</p>
                            <h3 className="tech">Technologies</h3>
                            <div className="tech-btn">
                                <span className="gradient-tag">Wordpress</span>
                                <span className="gradient-tag">Wix</span>
                                <span className="gradient-tag">Webflow</span>
                                <span className="gradient-tag">Bootstrap</span>
                                <span className="gradient-tag">Elementor</span>
                                <span className="gradient-tag">Divi</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="skill-sec py-5">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-12 mb-3">
                            <h2 className="sub-heading">My Skills</h2>
                            <h2 className="heading">My Experts Areas Where I Gained Skills</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="skill-card">
                                <div className="card-header d-flex align-items-center gap-3 mb-4">
                                    <div className="skill-icon globe-icon">
                                        <svg aria-hidden="true" class="e-font-icon-svg e-fas-globe" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg"><path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg>
                                    </div>

                                    <div>
                                        <h2 className="skill-heading mb-0">Frontend Development</h2>
                                        <p className="skill-text mb-0">7 Technologies</p>
                                    </div>
                                </div>

                                <div className="d-flex gap-2 flex-wrap">
                                    <div className="front-end-icon tech-skill-icon text-light text-center">
                                        <svg aria-hidden="true" class="e-font-icon-svg e-fab-html5" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" fill="#E14D24"></path></svg>
                                        <h3 className="tech-skill-heading">HTML5</h3>
                                    </div>
                                    <div className="front-end-icon tech-skill-icon text-light text-center">
                                        <svg aria-hidden="true" class="e-font-icon-svg e-fab-css3-alt" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" fill="#1474B6"></path></svg>
                                        <h3 className="tech-skill-heading">CSS3</h3>
                                    </div>
                                    <div className="front-end-icon tech-skill-icon text-light text-center">
                                        <svg aria-hidden="true" class="e-font-icon-svg e-fab-js" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" fill="#F0DC4E"></path></svg>
                                        <h3 className="tech-skill-heading">JavaScript</h3>
                                    </div>
                                    <div className="front-end-icon tech-skill-icon text-light text-center">
                                        <svg aria-hidden="true" class="e-font-icon-svg e-fab-react" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" fill="#5CDAF9"></path></svg>
                                        <h3 className="tech-skill-heading">React</h3>
                                    </div>
                                    <div className="front-end-icon tech-skill-icon text-light text-center">
                                        <svg aria-hidden="true" class="e-font-icon-svg e-fab-bootstrap" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M292.3 311.93c0 42.41-39.72 41.43-43.92 41.43h-80.89v-81.69h80.89c42.56 0 43.92 31.9 43.92 40.26zm-50.15-73.13c.67 0 38.44 1 38.44-36.31 0-15.52-3.51-35.87-38.44-35.87h-74.66v72.18h74.66zM448 106.67v298.66A74.89 74.89 0 0 1 373.33 480H74.67A74.89 74.89 0 0 1 0 405.33V106.67A74.89 74.89 0 0 1 74.67 32h298.66A74.89 74.89 0 0 1 448 106.67zM338.05 317.86c0-21.57-6.65-58.29-49.05-67.35v-.73c22.91-9.78 37.34-28.25 37.34-55.64 0-7 2-64.78-77.6-64.78h-127v261.33c128.23 0 139.87 1.68 163.6-5.71 14.21-4.42 52.71-17.98 52.71-67.12z" fill="#8612FB"></path></svg>
                                        <h3 className="tech-skill-heading">Bootstrap</h3>
                                    </div>
                                    <div className="front-end-icon tech-skill-icon text-light text-center">
                                        <img src="assets/images/tailwindcss-img.png" alt="Tailwind CSS" className="tailwind-icon" />
                                        <h3 className="tech-skill-heading">Tailwind CSS</h3>
                                    </div>
                                    <div className="front-end-icon tech-skill-icon text-light text-center">
                                        <img src="assets/images/typescript.png" alt="TypeScript" className="tailwind-icon" />
                                        <h3 className="tech-skill-heading">TypeScript</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="skill-card">
                                <div className="card-header d-flex align-items-center gap-3 mb-4">
                                    <div className="skill-icon cms-icon">
                                        <svg class="ekit-svg-icon icon-cogwheel" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M13.536 13.936c-1.356 1.356-2.104 3.16-2.104 5.078s0.747 3.722 2.104 5.078c1.357 1.356 3.16 2.104 5.078 2.104s3.722-0.747 5.078-2.104c2.8-2.8 2.8-7.356 0-10.157s-7.356-2.8-10.157 0zM22.881 23.281c-1.14 1.14-2.655 1.768-4.267 1.768s-3.127-0.628-4.267-1.767c-1.14-1.14-1.767-2.655-1.767-4.267s0.628-3.127 1.767-4.267c1.177-1.177 2.722-1.765 4.267-1.765s3.091 0.588 4.267 1.765c2.353 2.353 2.353 6.181 0 8.534zM31.669 16.042c-0.059-0.261-0.292-0.447-0.56-0.447h-1.566c-0.204-0.654-0.466-1.287-0.782-1.892l1.107-1.107c0.189-0.189 0.222-0.484 0.080-0.711-0.528-0.84-1.156-1.626-1.868-2.338s-1.498-1.34-2.338-1.868c-0.227-0.143-0.522-0.109-0.711 0.080l-1.107 1.107c-0.604-0.316-1.237-0.578-1.891-0.782l0-1.565c0-0.268-0.185-0.5-0.447-0.56-0.777-0.176-1.571-0.281-2.368-0.317 0.022-0.135-0.002-0.276-0.079-0.399-0.41-0.651-0.896-1.259-1.446-1.809s-1.159-1.037-1.809-1.446c-0.227-0.143-0.522-0.109-0.711 0.080l-0.776 0.776c-0.413-0.21-0.842-0.387-1.284-0.531l-0-1.097c-0-0.268-0.185-0.5-0.446-0.559-1.507-0.343-3.099-0.343-4.605 0.001-0.261 0.060-0.446 0.292-0.446 0.559v1.096c-0.442 0.143-0.871 0.321-1.284 0.531l-0.776-0.776c-0.189-0.19-0.485-0.223-0.711-0.080-0.65 0.409-1.259 0.896-1.81 1.447s-1.037 1.159-1.446 1.809c-0.143 0.227-0.11 0.522 0.080 0.711l0.776 0.776c-0.21 0.413-0.388 0.842-0.531 1.284l-1.096-0c-0 0-0 0-0 0-0.268 0-0.5 0.185-0.559 0.446-0.343 1.505-0.344 3.097-0.001 4.605 0.059 0.261 0.292 0.447 0.559 0.447h1.097c0.143 0.442 0.321 0.871 0.531 1.284l-0.776 0.776c-0.189 0.189-0.223 0.485-0.080 0.711 0.409 0.65 0.896 1.259 1.446 1.81s1.159 1.037 1.809 1.446c0.094 0.059 0.2 0.088 0.305 0.088 0.031 0 0.062-0.003 0.093-0.008 0.036 0.797 0.14 1.591 0.317 2.367 0.059 0.261 0.292 0.447 0.559 0.447h1.565c0.204 0.653 0.466 1.287 0.782 1.891l-1.107 1.107c-0.189 0.189-0.223 0.484-0.080 0.711 0.528 0.84 1.157 1.627 1.868 2.338s1.498 1.34 2.338 1.868c0.227 0.143 0.522 0.109 0.711-0.080l1.107-1.107c0.604 0.316 1.238 0.578 1.892 0.782v1.566c0 0.268 0.186 0.5 0.447 0.56 0.972 0.22 1.972 0.331 2.972 0.331 1.001 0 2.002-0.111 2.975-0.332 0.261-0.059 0.447-0.292 0.447-0.559v-1.565c0.653-0.204 1.286-0.466 1.891-0.782l1.107 1.107c0.189 0.189 0.484 0.223 0.711 0.080 0.84-0.528 1.626-1.156 2.338-1.868s1.34-1.498 1.868-2.338c0.142-0.227 0.109-0.522-0.080-0.711l-1.107-1.107c0.316-0.604 0.578-1.237 0.782-1.891h1.565c0.268 0 0.5-0.185 0.559-0.447 0.442-1.944 0.442-4 0.001-5.946zM5.561 16.041c-0.157 0.687-0.257 1.389-0.303 2.095l-0.181 0.181c-0.437-0.307-0.849-0.653-1.23-1.034s-0.728-0.794-1.034-1.23l0.746-0.746c0.183-0.183 0.221-0.467 0.092-0.692-0.328-0.571-0.582-1.185-0.754-1.824-0.067-0.25-0.295-0.424-0.554-0.424h-1.056c-0.185-1.056-0.185-2.148 0.001-3.203l1.054 0c0 0 0 0 0 0 0.259 0 0.486-0.174 0.554-0.424 0.173-0.64 0.427-1.254 0.755-1.825 0.129-0.225 0.092-0.508-0.092-0.692l-0.747-0.747c0.307-0.437 0.653-0.849 1.034-1.23s0.794-0.728 1.231-1.035l0.747 0.747c0.183 0.183 0.467 0.221 0.692 0.092 0.571-0.328 1.185-0.582 1.824-0.754 0.25-0.067 0.424-0.295 0.424-0.554v-1.055c1.055-0.185 2.147-0.186 3.202-0l0 1.056c0 0.259 0.174 0.486 0.424 0.554 0.639 0.173 1.253 0.427 1.825 0.755 0.225 0.129 0.508 0.091 0.691-0.092l0.746-0.746c0.436 0.306 0.849 0.653 1.23 1.034s0.728 0.793 1.034 1.23l-0.182 0.182c-0.706 0.046-1.407 0.146-2.095 0.303-0.261 0.059-0.446 0.292-0.446 0.559v1.364c-0.237-0.397-0.522-0.764-0.854-1.096-1.062-1.062-2.474-1.647-3.976-1.647s-2.914 0.585-3.977 1.647c-2.192 2.192-2.192 5.76 0.001 7.952 0.332 0.332 0.699 0.617 1.096 0.854h-1.365c-0.268 0-0.5 0.185-0.559 0.446zM7.36 12.597l1.107 1.107c-0.152 0.291-0.291 0.589-0.418 0.892-0.306-0.186-0.591-0.408-0.848-0.665-1.745-1.745-1.745-4.585-0.001-6.33 0.845-0.846 1.97-1.311 3.165-1.311s2.32 0.466 3.165 1.311c0.258 0.258 0.48 0.542 0.666 0.848-0.303 0.127-0.601 0.266-0.892 0.418l-1.107-1.107c-0.189-0.189-0.484-0.223-0.711-0.080-0.84 0.528-1.627 1.157-2.338 1.868s-1.34 1.498-1.868 2.338c-0.143 0.227-0.109 0.522 0.080 0.711zM30.642 21.287h-1.529c-0.259 0-0.486 0.174-0.554 0.424-0.23 0.852-0.568 1.669-1.005 2.43-0.129 0.225-0.091 0.508 0.092 0.691l1.081 1.081c-0.427 0.625-0.916 1.214-1.458 1.756s-1.131 1.031-1.756 1.458l-1.081-1.081c-0.183-0.183-0.467-0.221-0.692-0.092-0.76 0.437-1.578 0.775-2.43 1.005-0.25 0.068-0.424 0.295-0.424 0.554v1.529c-1.495 0.281-3.049 0.281-4.545 0.001v-1.529c0-0.259-0.174-0.486-0.424-0.554-0.852-0.23-1.67-0.568-2.431-1.005-0.225-0.129-0.508-0.091-0.691 0.092l-1.081 1.081c-0.625-0.427-1.214-0.916-1.756-1.458s-1.031-1.131-1.458-1.756l1.081-1.081c0.183-0.183 0.221-0.467 0.092-0.691-0.437-0.76-0.775-1.578-1.005-2.43-0.068-0.25-0.295-0.424-0.554-0.424h-1.529c-0.281-1.496-0.281-3.050 0.001-4.545h1.528c0.259 0 0.486-0.174 0.554-0.424 0.23-0.852 0.568-1.67 1.005-2.431 0.129-0.225 0.091-0.508-0.092-0.691l-1.081-1.081c0.427-0.625 0.916-1.214 1.458-1.756s1.131-1.031 1.756-1.458l1.081 1.081c0.183 0.183 0.467 0.221 0.691 0.092 0.761-0.437 1.578-0.775 2.431-1.005 0.25-0.068 0.424-0.295 0.424-0.554v-1.528c1.495-0.281 3.049-0.282 4.545-0.001l-0 1.529c0 0.259 0.174 0.486 0.424 0.554 0.852 0.23 1.669 0.568 2.43 1.005 0.225 0.129 0.508 0.091 0.692-0.092l1.081-1.081c0.625 0.427 1.214 0.916 1.756 1.458s1.031 1.131 1.458 1.756l-1.081 1.081c-0.183 0.183-0.221 0.467-0.092 0.691 0.437 0.76 0.775 1.578 1.005 2.431 0.068 0.25 0.295 0.424 0.554 0.424h1.529c0.28 1.496 0.28 3.050-0.001 4.545zM16.589 16.989c-1.116 1.116-1.116 2.933 0 4.050 0.558 0.558 1.292 0.837 2.025 0.837s1.467-0.279 2.025-0.837c1.116-1.116 1.116-2.933-0-4.050s-2.933-1.116-4.050 0zM19.828 20.228c-0.669 0.669-1.758 0.669-2.427 0s-0.669-1.758-0-2.427c0.335-0.335 0.774-0.502 1.213-0.502s0.879 0.167 1.213 0.502c0.669 0.669 0.669 1.758 0 2.427z"></path></svg>
                                    </div>

                                    <div>
                                        <h2 className="skill-heading mb-0">CMS / Page Builders</h2>
                                        <p className="skill-text mb-0">5 Technologies</p>
                                    </div>
                                </div>

                                <div className="d-flex gap-2 flex-wrap">
                                    <div className="cms tech-skill-icon text-light text-center">
                                        <svg aria-hidden="true" class="e-font-icon-svg e-fab-wordpress" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6zm337.9 75.9c0-26.3-9.4-44.5-17.5-58.7-10.8-17.5-20.9-32.4-20.9-49.9 0-19.6 14.8-37.8 35.7-37.8.9 0 1.8.1 2.8.2-37.9-34.7-88.3-55.9-143.7-55.9-74.3 0-139.7 38.1-177.8 95.9 5 .2 9.7.3 13.7.3 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l77.5 230.4L249.8 247l-33.1-90.8c-11.5-.7-22.3-2-22.3-2-11.5-.7-10.1-18.2 1.3-17.5 0 0 35.1 2.7 56 2.7 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l76.9 228.7 21.2-70.9c9-29.4 16-50.5 16-68.7zm-139.9 29.3l-63.8 185.5c19.1 5.6 39.2 8.7 60.1 8.7 24.8 0 48.5-4.3 70.6-12.1-.6-.9-1.1-1.9-1.5-2.9l-65.4-179.2zm183-120.7c.9 6.8 1.4 14 1.4 21.9 0 21.6-4 45.8-16.2 76.2l-65 187.9C426.2 403 468.7 334.5 468.7 256c0-37-9.4-71.8-26-102.1zM504 256c0 136.8-111.3 248-248 248C119.2 504 8 392.7 8 256 8 119.2 119.2 8 256 8c136.7 0 248 111.2 248 248zm-11.4 0c0-130.5-106.2-236.6-236.6-236.6C125.5 19.4 19.4 125.5 19.4 256S125.6 492.6 256 492.6c130.5 0 236.6-106.1 236.6-236.6z" fill="#0275A2"></path></svg>
                                        <h3 className="tech-skill-heading">Wordpress</h3>
                                    </div>
                                    <div className="cms tech-skill-icon text-light text-center">
                                        <svg aria-hidden="true" class="e-font-icon-svg e-fab-wix" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M393.38 131.69c0 13.03 2.08 32.69-28.68 43.83-9.52 3.45-15.95 9.66-15.95 9.66 0-31 4.72-42.22 17.4-48.86 9.75-5.11 27.23-4.63 27.23-4.63zm-115.8 35.54l-34.24 132.66-28.48-108.57c-7.69-31.99-20.81-48.53-48.43-48.53-27.37 0-40.66 16.18-48.43 48.53L89.52 299.89 55.28 167.23C49.73 140.51 23.86 128.96 0 131.96l65.57 247.93s21.63 1.56 32.46-3.96c14.22-7.25 20.98-12.84 29.59-46.57 7.67-30.07 29.11-118.41 31.12-124.7 4.76-14.94 11.09-13.81 15.4 0 1.97 6.3 23.45 94.63 31.12 124.7 8.6 33.73 15.37 39.32 29.59 46.57 10.82 5.52 32.46 3.96 32.46 3.96l65.57-247.93c-24.42-3.07-49.82 8.93-55.3 35.27zm115.78 5.21s-4.1 6.34-13.46 11.57c-6.01 3.36-11.78 5.64-17.97 8.61-15.14 7.26-13.18 13.95-13.18 35.2v152.07s16.55 2.09 27.37-3.43c13.93-7.1 17.13-13.95 17.26-44.78V181.41l-.02.01v-8.98zm163.44 84.08L640 132.78s-35.11-5.98-52.5 9.85c-13.3 12.1-24.41 29.55-54.18 72.47-.47.73-6.25 10.54-13.07 0-29.29-42.23-40.8-60.29-54.18-72.47-17.39-15.83-52.5-9.85-52.5-9.85l83.2 123.74-82.97 123.36s36.57 4.62 53.95-11.21c11.49-10.46 17.58-20.37 52.51-70.72 6.81-10.52 12.57-.77 13.07 0 29.4 42.38 39.23 58.06 53.14 70.72 17.39 15.83 53.32 11.21 53.32 11.21L556.8 256.52z" fill="#1474B6"></path></svg>
                                        <h3 className="tech-skill-heading">Wix</h3>
                                    </div>
                                    <div className="cms tech-skill-icon text-light text-center">
                                        <svg aria-hidden="true" class="e-font-icon-svg e-fab-elementor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M425.6 32H22.4C10 32 0 42 0 54.4v403.2C0 470 10 480 22.4 480h403.2c12.4 0 22.4-10 22.4-22.4V54.4C448 42 438 32 425.6 32M164.3 355.5h-39.8v-199h39.8v199zm159.3 0H204.1v-39.8h119.5v39.8zm0-79.6H204.1v-39.8h119.5v39.8zm0-79.7H204.1v-39.8h119.5v39.8z" fill="#EF01EE"></path></svg>
                                        <h3 className="tech-skill-heading">Elementor</h3>
                                    </div>
                                    <div className="cms tech-skill-icon text-light text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 319.382"><path fill="#146EF5" d="M512 0L348.627 319.382H195.172l68.375-132.364h-3.071C204.072 260.235 119.911 308.437 0 319.382V188.849s76.71-4.533 121.808-51.945H0V.007h136.897v112.594l3.071-.013L195.91.007h103.535V111.89l3.071-.006L360.557 0H512z"></path></svg>
                                        <h3 className="tech-skill-heading">Webflow</h3>
                                    </div>
                                    <div className="cms tech-skill-icon text-light text-center">
                                        <img src="assets/images/Divi.svg" />
                                        <h3 className="tech-skill-heading">Divi</h3>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="skill-card">
                                <div className="card-header d-flex align-items-center gap-3 mb-4">
                                    <div className="skill-icon dev-icon">
                                        <svg aria-hidden="true" class="e-font-icon-svg e-fas-infinity" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M471.1 96C405 96 353.3 137.3 320 174.6 286.7 137.3 235 96 168.9 96 75.8 96 0 167.8 0 256s75.8 160 168.9 160c66.1 0 117.8-41.3 151.1-78.6 33.3 37.3 85 78.6 151.1 78.6 93.1 0 168.9-71.8 168.9-160S564.2 96 471.1 96zM168.9 320c-40.2 0-72.9-28.7-72.9-64s32.7-64 72.9-64c38.2 0 73.4 36.1 94 64-20.4 27.6-55.9 64-94 64zm302.2 0c-38.2 0-73.4-36.1-94-64 20.4-27.6 55.9-64 94-64 40.2 0 72.9 28.7 72.9 64s-32.7 64-72.9 64z"></path></svg>
                                    </div>

                                    <div>
                                        <h2 className="skill-heading mb-0">DevOps / Backend</h2>
                                        <p className="skill-text mb-0">4 Technologies</p>
                                    </div>
                                </div>

                                <div className="d-flex gap-2 flex-wrap">
                                    <div className="backend tech-skill-icon text-light text-center">
                                        <svg aria-hidden="true" class="e-font-icon-svg e-fab-laravel" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M504.4,115.83a5.72,5.72,0,0,0-.28-.68,8.52,8.52,0,0,0-.53-1.25,6,6,0,0,0-.54-.71,9.36,9.36,0,0,0-.72-.94c-.23-.22-.52-.4-.77-.6a8.84,8.84,0,0,0-.9-.68L404.4,55.55a8,8,0,0,0-8,0L300.12,111h0a8.07,8.07,0,0,0-.88.69,7.68,7.68,0,0,0-.78.6,8.23,8.23,0,0,0-.72.93c-.17.24-.39.45-.54.71a9.7,9.7,0,0,0-.52,1.25c-.08.23-.21.44-.28.68a8.08,8.08,0,0,0-.28,2.08V223.18l-80.22,46.19V63.44a7.8,7.8,0,0,0-.28-2.09c-.06-.24-.2-.45-.28-.68a8.35,8.35,0,0,0-.52-1.24c-.14-.26-.37-.47-.54-.72a9.36,9.36,0,0,0-.72-.94,9.46,9.46,0,0,0-.78-.6,9.8,9.8,0,0,0-.88-.68h0L115.61,1.07a8,8,0,0,0-8,0L11.34,56.49h0a6.52,6.52,0,0,0-.88.69,7.81,7.81,0,0,0-.79.6,8.15,8.15,0,0,0-.71.93c-.18.25-.4.46-.55.72a7.88,7.88,0,0,0-.51,1.24,6.46,6.46,0,0,0-.29.67,8.18,8.18,0,0,0-.28,2.1v329.7a8,8,0,0,0,4,6.95l192.5,110.84a8.83,8.83,0,0,0,1.33.54c.21.08.41.2.63.26a7.92,7.92,0,0,0,4.1,0c.2-.05.37-.16.55-.22a8.6,8.6,0,0,0,1.4-.58L404.4,400.09a8,8,0,0,0,4-6.95V287.88l92.24-53.11a8,8,0,0,0,4-7V117.92A8.63,8.63,0,0,0,504.4,115.83ZM111.6,17.28h0l80.19,46.15-80.2,46.18L31.41,63.44Zm88.25,60V278.6l-46.53,26.79-33.69,19.4V123.5l46.53-26.79Zm0,412.78L23.37,388.5V77.32L57.06,96.7l46.52,26.8V338.68a6.94,6.94,0,0,0,.12.9,8,8,0,0,0,.16,1.18h0a5.92,5.92,0,0,0,.38.9,6.38,6.38,0,0,0,.42,1v0a8.54,8.54,0,0,0,.6.78,7.62,7.62,0,0,0,.66.84l0,0c.23.22.52.38.77.58a8.93,8.93,0,0,0,.86.66l0,0,0,0,92.19,52.18Zm8-106.17-80.06-45.32,84.09-48.41,92.26-53.11,80.13,46.13-58.8,33.56Zm184.52,4.57L215.88,490.11V397.8L346.6,323.2l45.77-26.15Zm0-119.13L358.68,250l-46.53-26.79V131.79l33.69,19.4L392.37,178Zm8-105.28-80.2-46.17,80.2-46.16,80.18,46.15Zm8,105.28V178L455,151.19l33.68-19.4v91.39h0Z" fill="#F53003"></path></svg>
                                        <h3 className="tech-skill-heading">Laravel</h3>
                                    </div>
                                    <div className="backend tech-skill-icon text-light text-center">
                                        <svg aria-hidden="true" class="e-font-icon-svg e-fab-php" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z" fill="#4F5B93"></path></svg>
                                        <h3 className="tech-skill-heading">PHP</h3>
                                    </div>
                                    <div className="backend tech-skill-icon text-light text-center">
                                        <svg aria-hidden="true" class="e-font-icon-svg e-fab-github" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" fill="#F0DC4E"></path></svg>
                                        <h3 className="tech-skill-heading">Git</h3>
                                    </div>
                                    <div className="backend tech-skill-icon text-light text-center">
                                        <svg aria-hidden="true" class="e-font-icon-svg e-fab-bitbucket" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M22.2 32A16 16 0 0 0 6 47.8a26.35 26.35 0 0 0 .2 2.8l67.9 412.1a21.77 21.77 0 0 0 21.3 18.2h325.7a16 16 0 0 0 16-13.4L505 50.7a16 16 0 0 0-13.2-18.3 24.58 24.58 0 0 0-2.8-.2L22.2 32zm285.9 297.8h-104l-28.1-147h157.3l-25.2 147z" fill="#1868DB"></path></svg>
                                        <h3 className="tech-skill-heading">Bitbucket</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="skill-card">
                                <div className="card-header d-flex align-items-center gap-3 mb-4">
                                    <div className="skill-icon ui-icon">
                                        <svg aria-hidden="true" class="e-font-icon-svg e-fas-tools" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"></path></svg>
                                    </div>

                                    <div>
                                        <h2 className="skill-heading mb-0">UI/UX & Design Tools</h2>
                                        <p className="skill-text mb-0">3 Technologies</p>
                                    </div>
                                </div>

                                <div className="d-flex gap-2 flex-wrap">
                                    <div className="ui-tool-icon tech-skill-icon text-light text-center">
                                        <img src="assets/images/figma-icon.jpg" />
                                        <h3 className="tech-skill-heading">Figma</h3>
                                    </div>
                                    <div className="ui-tool-icon tech-skill-icon text-light text-center">
                                        <img src="assets/images/canva-img.jpg" />
                                        <h3 className="tech-skill-heading">Canva</h3>
                                    </div>
                                    <div className="ui-tool-icon tech-skill-icon text-light text-center">
                                        <img src="assets/images/psd-img.jpg" />
                                        <h3 className="tech-skill-heading">Photoshop</h3>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="projects-sec py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="project-div d-flex justify-content-center align-items-center mb-4">
                                <div className="skill-icon cms-icon">
                                    <svg aria-hidden="true" class="e-font-icon-svg e-fas-briefcase" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path></svg>
                                </div>
                                <h2 className="heading text-center mb-0">Featured Projects</h2>
                                <div className="skill-icon cms-icon">
                                    <svg class="ekit-svg-icon icon-briefcase" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M29.6 8h-7.2v-2.4c0-1.323-1.077-2.4-2.4-2.4h-8c-1.323 0-2.4 1.077-2.4 2.4v2.4h-7.2c-1.323 0-2.4 1.077-2.4 2.4v17.6c0 1.323 1.077 2.4 2.4 2.4h27.2c1.323 0 2.4-1.077 2.4-2.4v-17.6c0-1.323-1.077-2.4-2.4-2.4zM11.2 5.6c0-0.441 0.359-0.8 0.8-0.8h8c0.441 0 0.8 0.359 0.8 0.8v2.4h-9.6v-2.4zM2.4 9.6h27.2c0.441 0 0.8 0.359 0.8 0.8v12h-3.2v-0.8c0-0.442-0.358-0.8-0.8-0.8h-3.2c-0.442 0-0.8 0.358-0.8 0.8v0.8h-12.8v-0.8c0-0.442-0.358-0.8-0.8-0.8h-3.2c-0.442 0-0.8 0.358-0.8 0.8v0.8h-3.2v-12c0-0.441 0.359-0.8 0.8-0.8zM25.6 22.4v1.6h-1.6v-1.6h1.6zM8 22.4v1.6h-1.6v-1.6h1.6zM29.6 28.8h-27.2c-0.441 0-0.8-0.359-0.8-0.8v-4h3.2v0.8c0 0.442 0.358 0.8 0.8 0.8h3.2c0.442 0 0.8-0.358 0.8-0.8v-0.8h12.8v0.8c0 0.442 0.358 0.8 0.8 0.8h3.2c0.442 0 0.8-0.358 0.8-0.8v-0.8h3.2v4c0 0.441-0.359 0.8-0.8 0.8z"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p className="text-light text-center">Exploring the intersection of artificial intelligence and modern web development through innovative solutions.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 my-2">
                            <div className="project-container text-light">
                                <button className="project-btn">Live</button>
                                <h3 className="fitness-heading">Scientific Calculator</h3>
                                <p>Built a modern scientific calculator using React, Vite, JavaScript, and CSS3. Supports both Standard and Scientific calculator modes. Added 5 customizable themes with unique visual styles. Implemented keyboard support for faster calculations. Added calculation history with up to 50 saved calculations. Included memory functions like MC, MR, and M+.
                                </p>

                                <p>Added Degree and Radian modes for trigonometric calculations.Used localStorage to save themes, modes, and calculation history. Designed a fully responsive UI with animations, glassmorphism, and modern CSS effects.</p>

                                <div class="project">
                                    <figure>
                                        <img decoding="async" src="assets/images/calculator-banner.png" alt="Thumb" />
                                        <a href="https://pranali-scientific-calc.vercel.app/" target="_blank">
                                        </a><figcaption><a href="https://pranali-scientific-calc.vercel.app/" target="_blank">
                                        </a><a class="send-icon" href="https://pranali-scientific-calc.vercel.app/" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link w-6 h-6 text-blue-400">
                                                    <path d="M15 3h6v6"></path>
                                                    <path d="M10 14 21 3"></path>
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                </svg>
                                            </a>
                                        </figcaption>
                                    </figure>
                                </div>


                                <div class="tech-btn">
                                    <span class="gradient-tag">React</span>
                                    <span class="gradient-tag">Vite</span>
                                    <span class="gradient-tag">HTML</span>
                                    <span class="gradient-tag">CSS</span>
                                    <span class="gradient-tag">JavaScript</span>
                                    <span class="gradient-tag">Bootstrap</span>
                                    <span class="gradient-tag">Git</span>
                                </div>

                                <div class="cons_w_wrapper project-view-btn d-flex justify-content-end gap-2">
                                    <a href="https://github.com/Its-Pranali/Calculator" target="_blank" className="git-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github w-5 h-5 text-gray-300 group-hover/btn:text-white relative z-10"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                    </a>
                                    <a href="https://pranali-scientific-calc.vercel.app/" target="_blank" class="tmp-btn temp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon text-decoration-none" data-align="">
                                        <span class="icon-reverse-wrapper">
                                            <span class="btn-text">Demo</span>
                                            <span class="btn-hack"></span>
                                            <img decoding="async" src="assets/images/btg-bg.svg" alt="" class="btn-bg" />
                                            <img decoding="async" src="assets/images/btg-bg-2.svg" alt="" class="btn-bg-hover" />
                                            <span class="btn-icon">
                                                <i>
                                                    <svg class="fn__svg fn__svg_arrow-right " width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z">
                                                        </path>
                                                    </svg>
                                                </i>
                                            </span>
                                            <span class="btn-icon">
                                                <i>
                                                    <svg class="fn__svg fn__svg_arrow-right " width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z">
                                                        </path>
                                                    </svg>
                                                </i>
                                            </span>
                                        </span>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6 my-2">
                            <div className="project-container text-light">
                                <button className="project-btn">Live</button>
                                <h3 className="fitness-heading">Ticketing Management system</h3>
                                <p>Built a modern scientific calculator using React, Vite, JavaScript, and CSS3. Supports both Standard and Scientific calculator modes. Added 5 customizable themes with unique visual styles. Implemented keyboard support for faster calculations. Added calculation history with up to 50 saved calculations. Included memory functions like MC, MR, and M+.
                                </p>

                                <p>Added Degree and Radian modes for trigonometric calculations.Used localStorage to save themes, modes, and calculation history. Designed a fully responsive UI with animations, glassmorphism, and modern CSS effects.</p>

                                <div class="project">
                                    <figure>
                                        <img decoding="async" src="assets/images/ticketing-banner.png" alt="Thumb" />
                                        <a href="https://ticketing-management-frontend.vercel.app/" target="_blank">
                                        </a><figcaption><a href="https://ticketing-management-frontend.vercel.app" target="_blank">
                                        </a><a class="send-icon" href="https://ticketing-management-frontend.vercel.app" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link w-6 h-6 text-blue-400">
                                                    <path d="M15 3h6v6"></path>
                                                    <path d="M10 14 21 3"></path>
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                </svg>
                                            </a>
                                        </figcaption>
                                    </figure>
                                </div>


                                <div class="tech-btn">
                                    <span class="gradient-tag">React</span>
                                    <span class="gradient-tag">Laravel</span>
                                    <span class="gradient-tag">PHP</span>
                                    <span class="gradient-tag">JavaScript</span>
                                    <span class="gradient-tag">Bootstrap</span>
                                    <span class="gradient-tag">Vite</span>
                                    <span class="gradient-tag">Composer</span>
                                    <span class="gradient-tag">NPM</span>
                                    <span class="gradient-tag">Laravel Passport</span>
                                    <span class="gradient-tag">Faker</span>
                                    <span class="gradient-tag">Git</span>
                                    <span class="gradient-tag">Vercel</span>
                                    <span class="gradient-tag">Render</span>
                                    <span class="gradient-tag">Clever Cloud</span>
                                </div>

                                <div class="cons_w_wrapper project-view-btn d-flex justify-content-end gap-2">
                                    <a href="https://github.com/Its-Pranali/Calculator" target="_blank" className="git-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github w-5 h-5 text-gray-300 group-hover/btn:text-white relative z-10"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                    </a>
                                    <a href="https://ticketing-management-frontend.vercel.app" target="_blank" class="tmp-btn temp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon text-decoration-none" data-align="">
                                        <span class="icon-reverse-wrapper">
                                            <span class="btn-text">Demo</span>
                                            <span class="btn-hack"></span>
                                            <img decoding="async" src="assets/images/btg-bg.svg" alt="" class="btn-bg" />
                                            <img decoding="async" src="assets/images/btg-bg-2.svg" alt="" class="btn-bg-hover" />
                                            <span class="btn-icon">
                                                <i>
                                                    <svg class="fn__svg fn__svg_arrow-right " width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z">
                                                        </path>
                                                    </svg>
                                                </i>
                                            </span>
                                            <span class="btn-icon">
                                                <i>
                                                    <svg class="fn__svg fn__svg_arrow-right " width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z">
                                                        </path>
                                                    </svg>
                                                </i>
                                            </span>
                                        </span>
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-6 my-2">
                            <div className="project-container text-light">
                                <button className="project-btn">Live</button>
                                <h3 className="fitness-heading">Fitness World</h3>
                                <p>Fitness World is a modern and responsive fitness website developed using WordPress. The website is designed to provide users with information about fitness programs, workouts, and healthy lifestyle practices. It features a clean layout, easy navigation, and mobile-friendly design to ensure a smooth user experience across all devices.</p>

                                <p>The website includes sections such as home, services, workout programs, and contact information, allowing visitors to explore different fitness options and stay motivated toward achieving their health goals. The design focuses on visually appealing elements, engaging content, and fast loading performance.</p>

                                <div class="project">
                                    <figure>

                                        <img decoding="async" src="assets/images/fitness-banner.png" alt="Thumb" />
                                        <a href="https://fitnessworld.wuaze.com/" target="_blank">
                                        </a><figcaption><a href="https://fitnessworld.wuaze.com/" target="_blank">
                                        </a><a class="send-icon" href="https://fitnessworld.wuaze.com/" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link w-6 h-6 text-blue-400">
                                                    <path d="M15 3h6v6"></path>
                                                    <path d="M10 14 21 3"></path>
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                </svg>
                                            </a>
                                        </figcaption>
                                    </figure>
                                </div>


                                <div class="tech-btn">
                                    <span class="gradient-tag">WordPress</span>
                                    <span class="gradient-tag">Elementor</span>
                                    <span class="gradient-tag">HTML</span>
                                    <span class="gradient-tag">CSS</span>
                                    <span class="gradient-tag">JavaScript</span>
                                    <span class="gradient-tag">Bootstrap</span>
                                </div>

                                <div class="cons_w_wrapper project-view-btn d-flex justify-content-end gap-2 mt-2">
                                    {/* <button className="git-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github w-5 h-5 text-gray-300 group-hover/btn:text-white relative z-10"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                    </button> */}
                                    <a href="https://fitnessworld.wuaze.com/" target="_blank" class="tmp-btn temp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon text-decoration-none" data-align="">
                                        <span class="icon-reverse-wrapper">
                                            <span class="btn-text">Demo</span>
                                            <span class="btn-hack"></span>
                                            <img decoding="async" src="assets/images/btg-bg.svg" alt="" class="btn-bg" />
                                            <img decoding="async" src="assets/images/btg-bg-2.svg" alt="" class="btn-bg-hover" />
                                            <span class="btn-icon">
                                                <i>
                                                    <svg class="fn__svg fn__svg_arrow-right " width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z">
                                                        </path>
                                                    </svg>
                                                </i>
                                            </span>
                                            <span class="btn-icon">
                                                <i>
                                                    <svg class="fn__svg fn__svg_arrow-right " width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z">
                                                        </path>
                                                    </svg>
                                                </i>
                                            </span>
                                        </span>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6 my-2">
                            <div className="project-container text-light">
                                <button className="project-btn">Live</button>
                                <h3 className="fitness-heading">Big Bear Vans</h3>
                                <p>Nestled in the heart of Big Bear City, California, Big Bear Vans transforms ordinary Sprinter, Transit, and Promaster vans into extraordinary custom camper vans built for real adventure.</p>

                                <p>We believe the road doesn't have to mean roughing it. Every van we build comes fully equipped with the comforts of home — cozy beds, functional kitchens, indoor bathrooms, and dinette areas — all packed into a compact, road-ready class B RV. Whether you're planning weekend getaways or embracing full-time van life, our team designs each conversion around how you actually want to travel.</p>

                                <div class="project">
                                    <figure>

                                        <img decoding="async" src="assets/images/bbv-banner.png" alt="Thumb" />
                                        <a href="https://bigbearvans.wuaze.com/" target="_blank">
                                        </a><figcaption><a href="https://bigbearvans.wuaze.com/" target="_blank">
                                        </a><a class="send-icon" href="https://bigbearvans.wuaze.com/" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link w-6 h-6 text-blue-400">
                                                    <path d="M15 3h6v6"></path>
                                                    <path d="M10 14 21 3"></path>
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                </svg>
                                            </a>
                                        </figcaption>
                                    </figure>
                                </div>


                                <div class="tech-btn">
                                    <span class="gradient-tag">WordPress</span>
                                    <span class="gradient-tag">Elementor</span>
                                    <span class="gradient-tag">HTML</span>
                                    <span class="gradient-tag">CSS</span>
                                    <span class="gradient-tag">JavaScript</span>
                                    <span class="gradient-tag">Bootstrap</span>
                                </div>

                                <div class="cons_w_wrapper project-view-btn d-flex justify-content-end gap-2 mt-2">
                                    {/* <button className="git-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github w-5 h-5 text-gray-300 group-hover/btn:text-white relative z-10"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                    </button> */}
                                    <a href="https://bigbearvans.wuaze.com/" target="_blank" class="tmp-btn temp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon text-decoration-none" data-align="">
                                        <span class="icon-reverse-wrapper">
                                            <span class="btn-text">Demo</span>
                                            <span class="btn-hack"></span>
                                            <img decoding="async" src="assets/images/btg-bg.svg" alt="" class="btn-bg" />
                                            <img decoding="async" src="assets/images/btg-bg-2.svg" alt="" class="btn-bg-hover" />
                                            <span class="btn-icon">
                                                <i>
                                                    <svg class="fn__svg fn__svg_arrow-right " width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z">
                                                        </path>
                                                    </svg>
                                                </i>
                                            </span>
                                            <span class="btn-icon">
                                                <i>
                                                    <svg class="fn__svg fn__svg_arrow-right " width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z">
                                                        </path>
                                                    </svg>
                                                </i>
                                            </span>
                                        </span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Main>
    );
}
export default Home;
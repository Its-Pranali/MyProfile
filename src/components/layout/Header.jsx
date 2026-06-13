import "../../assets/css/HeaderStyle.css";

function Header() {
    return (
        <>
            <header className="tmp-header-area-start header-one header--sticky header--transparent header__visible">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-content">
                                <div className="logo">
                                    <a className="site-logo" href="https://marketifythemes.net/wp/virtuo/1/" aria-label="Go to homepage">
                                        <img className="logo-dark" src="../../assets/images/PRANALI-NIKAM-logo.png" alt="Site logo" />
                                        
                                        <img className="logo-white" src="../../assets/images/PRANALI-NIKAM-logo.png" alt="Site logo" />
                                    </a>

                                </div>
                                <div className="tmp-mainmenu-nav d-none d-xl-block">
                                    <nav className="navbar-example2 onepagenav">
                                        <div className="menu-main-menu-container">
                                            <ul id="menu-main-menu" className="tmp-mainmenu nav nav-pills"><li id="menu-item-6" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6"><a href="#Home">Home</a></li>
                                                <li id="menu-item-7" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7"><a href="#About">About</a></li>
                                                <li id="menu-item-28" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28"><a href="#Skills">Skills</a></li>
                                                <li id="menu-item-738" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-738"><a href="#Experience">Experience</a></li>
                                                <li id="menu-item-29" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-29"><a href="#Projects">Projects</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>

                                <div className="tmp-header-right">
                                    <div className="social-share-wrapper d-none d-md-block">
                                        <div className="social-link">
                                            <a href="https://www.linkedin.com/in/pranali-nikam-436845327/" title="Linkedin" target="_blank">
                                                <i>
                                                    <svg className="fn__svg fn__svg_social/linkedin" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 24 24" fill="currentColor">

                                                        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8h4.56v16H.22V8zm7.78 0h4.37v2.19h.06c.61-1.16 2.11-2.39 4.34-2.39 4.64 0 5.49 3.05 5.49 7.01V24h-4.56v-7.98c0-1.9-.03-4.35-2.65-4.35-2.65 0-3.06 2.07-3.06 4.21V24H8V8z"></path>
                                                    </svg>
                                                </i>
                                            </a>

                                            <a href="https://github.com/Its-Pranali" title="GitHub" target="_blank">
                                                <i>
                                                    <svg className="fn__svg fn__svg_social/github" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">

                                                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.41 7.86 10.94.57.1.78-.25.78-.55 
            0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 
            1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.27-5.23-5.64 
            0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.18 1.17a10.97 10.97 0 012.9-.39 
            c.98 0 1.97.13 2.9.39 2.2-1.48 3.17-1.17 3.17-1.17.63 1.59.24 2.77.12 3.06.73.8 1.17 1.82 1.17 3.07 
            0 4.38-2.69 5.34-5.25 5.63.41.36.77 1.09.77 2.2 0 1.59-.01 2.87-.01 3.26 
            0 .3.21.66.79.55C20.71 21.4 24 17.09 24 12 
            24 5.65 18.35.5 12 .5z"></path>
                                                    </svg>
                                                </i>
                                            </a>

                                            <a href="https://wa.me/919359875721" title="WhatsApp" target="_blank" rel="noopener noreferrer">
                                                <i>
                                                    <svg className="fn__svg fn__svg_social/whatsapp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor">

                                                        <path d="M16 .4C7.5.4.6 7.3.6 15.8c0 2.8.7 5.5 2.1 7.9L.4 31.6l8.1-2.1c2.3 1.3 4.9 2 7.5 2 
            8.5 0 15.4-6.9 15.4-15.4S24.5.4 16 .4zm0 28.2c-2.3 0-4.6-.6-6.6-1.8l-.5-.3-4.8 1.2 
            1.3-4.7-.3-.5c-1.3-2.1-2-4.5-2-6.9 0-7.2 5.8-13 13-13s13 5.8 13 13-5.8 13-13 13zm7.3-9.7c-.4-.2-2.2-1.1-2.5-1.2 
            -.3-.1-.6-.2-.8.2-.2.4-.9 1.2-1.1 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.3-.4.4-.6.1-.2.1-.5 0-.7-.1-.2-.8-1.9-1.1-2.6-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7 0 1.6 1.2 3.2 1.3 3.4.2.2 2.3 3.5 5.5 4.8.8.3 1.4.5 1.9.6.8.2 1.6.2 2.2.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.7-.5z"></path>
                                                    </svg>
                                                </i>
                                            </a>

                                            <a href="mailto:pranalinikam1000@gmail.com" title="Email" target="_blank">
                                                <i>
                                                    <svg className="fn__svg fn__svg_social/mail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">

                                                        <path d="M2 4h20c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm10 9L2 6v12h20V6l-10 7z"></path>
                                                    </svg>
                                                </i>
                                            </a>

                                        </div>
                                    </div>
                                    <div className="tmp-side-collups-area d-block d-xl-none">
                                        <button className="hamberger-menu" id="openMenu">
                                            <i id="menuBtn">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </i>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="d-block d-xl-none">
                <div className="tmp-popup-mobile-menu" id="mobileMenu">
                    <div className="inner">
                        <div className="header-top">
                            <div className="logo">
                                <a className="site-logo" href="https://pranalinikam.html-5.me/">
                                    <img className="logo-dark" src="../../assets/images/PRANALI-NIKAM-logo.png" alt="Site logo" />
                                </a>
                            </div>

                            <div className="close-menu">
                                <button className="close-button tmp-round-action-btn" id="closeMenu">
                                    <i>
                                        <svg className="fn__svg fn__svg_close " width="800px" height="800px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z">
                                            </path>
                                        </svg>
                                    </i>
                                </button>
                            </div>
                        </div>
                        <div className="menu-main-menu-container">
                            <ul id="menu-main-menu-1" className="tmp-mainmenu nav nav-pills"><li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6"><a href="#Home">Home</a></li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7"><a href="#About">About</a></li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28"><a href="#Skills">Skills</a></li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-738"><a href="#Experience">Experience</a></li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-29"><a href="#Projects">Projects</a></li>
                            </ul>

                        </div>
                        <div className="social-wrapper mt--40"><span className="subtitle">find with me</span>
                            <div className="social-link">
                                <a href="https://www.linkedin.com/in/pranali-nikam-436845327/" title="Linkedin" target="_blank">
                                    <i>
                                        <svg className="fn__svg fn__svg_social/linkedin" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 24 24" fill="currentColor">

                                            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8h4.56v16H.22V8zm7.78 0h4.37v2.19h.06c.61-1.16 2.11-2.39 4.34-2.39 4.64 0 5.49 3.05 5.49 7.01V24h-4.56v-7.98c0-1.9-.03-4.35-2.65-4.35-2.65 0-3.06 2.07-3.06 4.21V24H8V8z"></path>
                                        </svg>
                                    </i>
                                </a>

                                <a href="https://github.com/Its-Pranali" title="GitHub" target="_blank">
                                    <i>
                                        <svg className="fn__svg fn__svg_social/github" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">

                                            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.41 7.86 10.94.57.1.78-.25.78-.55 
            0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 
            1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.27-5.23-5.64 
            0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.18 1.17a10.97 10.97 0 012.9-.39 
            c.98 0 1.97.13 2.9.39 2.2-1.48 3.17-1.17 3.17-1.17.63 1.59.24 2.77.12 3.06.73.8 1.17 1.82 1.17 3.07 
            0 4.38-2.69 5.34-5.25 5.63.41.36.77 1.09.77 2.2 0 1.59-.01 2.87-.01 3.26 
            0 .3.21.66.79.55C20.71 21.4 24 17.09 24 12 
            24 5.65 18.35.5 12 .5z"></path>
                                        </svg>
                                    </i>
                                </a>

                                <a href="https://wa.me/919359875721" title="WhatsApp" target="_blank" rel="noopener noreferrer">
                                    <i>
                                        <svg className="fn__svg fn__svg_social/whatsapp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor">

                                            <path d="M16 .4C7.5.4.6 7.3.6 15.8c0 2.8.7 5.5 2.1 7.9L.4 31.6l8.1-2.1c2.3 1.3 4.9 2 7.5 2 
            8.5 0 15.4-6.9 15.4-15.4S24.5.4 16 .4zm0 28.2c-2.3 0-4.6-.6-6.6-1.8l-.5-.3-4.8 1.2 
            1.3-4.7-.3-.5c-1.3-2.1-2-4.5-2-6.9 0-7.2 5.8-13 13-13s13 5.8 13 13-5.8 13-13 13zm7.3-9.7c-.4-.2-2.2-1.1-2.5-1.2 
            -.3-.1-.6-.2-.8.2-.2.4-.9 1.2-1.1 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.3-.4.4-.6.1-.2.1-.5 0-.7-.1-.2-.8-1.9-1.1-2.6-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7 0 1.6 1.2 3.2 1.3 3.4.2.2 2.3 3.5 5.5 4.8.8.3 1.4.5 1.9.6.8.2 1.6.2 2.2.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.7-.5z"></path>
                                        </svg>
                                    </i>
                                </a>

                                <a href="mailto:pranalinikam1000@gmail.com" title="Email" target="_blank">
                                    <i>
                                        <svg className="fn__svg fn__svg_social/mail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">

                                            <path d="M2 4h20c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm10 9L2 6v12h20V6l-10 7z"></path>
                                        </svg>
                                    </i>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="banner-area-one-main-demo tmp-section-gap shape-move">
                <div className="separator-animated-border border-top-footer animated-true"></div>
            </div>
        </>
    );
}
export default Header;
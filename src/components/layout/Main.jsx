import Header from "./Header";
import Footer from "./Footer";

function Main({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default Main;
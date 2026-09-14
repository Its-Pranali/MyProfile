import Header from "./Header";
import Footer from "./Footer";
import FluidCursor from "./FluidCursor";

function Main({ children }) {
    return (
        <>
            <FluidCursor />
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default Main;
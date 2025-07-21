import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
    const theme = useContext(ThemeContext);

    return (
        <div className={theme.type === true ? "lightContent" : "darkContent"} id="root">
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
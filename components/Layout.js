import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Footer from "./Footer";
import Header from "./Header";

const Layuot = ({ children }) => {
    const theme = useContext(ThemeContext);
    return (
        <div className={theme.type === true ? "lightContent" : "darkContent"}>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layuot;
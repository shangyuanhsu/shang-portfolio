import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    // theme color : true = ligth  falue = dark

    const [themes, setThemes] = useState(true);

    // click change boolean
    const changeTheme = () => {
        setThemes(!themes);
    }
    return (
        <ThemeContext.Provider value={{ type: themes, changeTheme: changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;




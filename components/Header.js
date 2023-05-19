import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ThemeContext } from "../contexts/ThemeContext";
import Image from "next/image";



const Header = () => {
    const router = useRouter();
    const { pathname, asPath, query } = router;
    const { locale } = useRouter();
    const theme = useContext(ThemeContext);
    const [hamburger, setHamburger] = useState(false);
    const t = { ...require(`../lang/index/${locale}.json`) }

    const handleTheme = () => {
        theme.changeTheme();
    }
    // type : 0 = not click hamburger btn 
    // type : 1 = click hamburger btn 
    const handleHamburgerBtn = (type = 0) => {
        setHamburger(type === 0 ? false : !hamburger);
    }
    const handleLang = (lang) => {
        console.log(router)
        router.push({ pathname, query }, asPath, { locale: lang })
    }
    return (
        <header>
            <div>
                <h1 className="logo" onClick={() => { handleHamburgerBtn() }}>
                    <Link href="/">SHANG</Link>
                </h1>
                <nav className={hamburger === true ? "show" : ""}>
                    <ul>
                        <li className={router.pathname == "/autobiography" ? "active" : ""} onClick={() => { handleHamburgerBtn() }}>
                            <Link href="/autobiography">{t.nav.autobiography}</Link>
                        </li>
                        <li className={router.pathname == "/projects" || router.pathname == "/projects/[id]" ? "active" : ""} onClick={() => { handleHamburgerBtn() }}>
                            <Link href="/projects">{t.nav.project}</Link>
                        </li>
                        {/* <li className={router.pathname == "/posts" ? "active" : ""} onClick={() => { handleHamburgerBtn() }}>
                            <Link href="/posts">{t.nav.post}</Link>
                        </li> */}
                        <li >
                            <Link href="https://github.com/shangyuanhsu">Github</Link>
                        </li>

                    </ul>
                    <div className="themeBtn">
                        <div className="langBtn">
                            <div className={locale == "tw" ? "checkLang" : ""} onClick={() => {
                                handleLang("tw")
                            }}>🇹🇼</div>
                            <div className={locale == "en" ? "checkLang" : ""} onClick={() => {
                                handleLang("en")
                            }}>🇺🇸</div>
                        </div>
                        <Image src={theme.type === true ? "/img/sun.png" : "/img/moon.png"} width={30} height={30} alt="change theme icon" onClick={handleTheme} />
                    </div>
                </nav>
                <div className={hamburger === true ? "hamburgerBtn hamburgerBtnCkecked" : "hamburgerBtn"} onClick={() => { handleHamburgerBtn(1) }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>
        </header>
    );
}

export default Header;
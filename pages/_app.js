import '../styles/globals.css'
import Layuot from '../components/Layout';
import ThemeContextProvider from "../contexts/ThemeContext"
import Script from 'next/script';

function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Layuot>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-R73JK0G1BX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {
            `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-R73JK0G1BX');
          `
          }

        </Script>
        <Component {...pageProps} />
      </Layuot>
    </ThemeContextProvider>
  );
}

export default App
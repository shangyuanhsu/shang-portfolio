import '../styles/globals.css'
import Layout from '../components/Layout';
import ThemeContextProvider from "../contexts/ThemeContext"
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function App({ Component, pageProps }) {

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => {
      const el = document.querySelector('#root');
      if (el) {
        el.scrollTo(0, 0); 
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeContextProvider>
      <Layout>
        <Script id="google-analytics" strategy="afterInteractive">
          {
            `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-528B7QD');
        `
          }
        </Script>

        <Component {...pageProps} />
      </Layout>
    </ThemeContextProvider>
  );
}

export default App
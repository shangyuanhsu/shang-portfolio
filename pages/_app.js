import '../styles/globals.css'
import Layuot from '../components/Layout';
import ThemeContextProvider from "../contexts/ThemeContext"

function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
    <Layuot>
      <Component {...pageProps} />
    </Layuot>
    </ThemeContextProvider>
  );
}

export default App
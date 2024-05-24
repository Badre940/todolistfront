// pages/_app.js
import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import NavBar from './NavBar';
function MyApp({ Component, pageProps }) {
  return (
    <div className="globalBackground">
      <NavBar/>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

// pages/_app.js
import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="globalBackground">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

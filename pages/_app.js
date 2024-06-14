import "../public/assets/css/style.css";
import { useState ,useEffect} from "react";

function loadGTM(gtmId) {

  const script = document.createElement("script");
  script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${gtmId}');`;
  document.head.appendChild(script);

  const noScript = document.createElement("noscript");
  noScript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
  height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
  document.body.appendChild(noScript);
}

function MyApp({ Component, pageProps }) {
  const [gtmLoaded, setGtmLoaded] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!gtmLoaded) {
        loadGTM("GTM-538RX7C");
        setGtmLoaded(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { once: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [gtmLoaded]);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

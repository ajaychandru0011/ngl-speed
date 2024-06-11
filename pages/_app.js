// import { GoogleTagManager } from "@next/third-parties/google";
import "../public/assets/css/style.css";
import { useState ,useEffect} from "react";

function loadGTM(gtmId) {
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [gtmLoaded]);

  return (
    <>
      <Component {...pageProps} />
      {/* <GoogleTagManager gtmId="GTM-538RX7C" /> */}
    </>
  );
}

export default MyApp;

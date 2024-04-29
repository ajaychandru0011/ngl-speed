import React from "react";
const data = [
  { src: "assets/imgs/clientlogo/HDFC.png", alt: "hdfc" },
  { src: "assets/imgs/clientlogo/Groww.png", alt: "groww" },
  { src: "assets/imgs/clientlogo/BajajFinserve.png", alt: "BajajFinserve" },
  { src: "assets/imgs/clientlogo/B612.png", alt: "B612" },
  { src: "assets/imgs/clientlogo/Alibabagroup.png", alt: "Alibabagroup" },
  { src: "assets/imgs/clientlogo/Cred.png", alt: "Cred" },
  { src: "assets/imgs/clientlogo/Tata1mg.png", alt: "Tata1mg" },
  { src: "assets/imgs/clientlogo/Urbancompany.png", alt: "Urbancompany" },
  { src: "assets/imgs/clientlogo/Kotak.png", alt: "Kotak" },
  { src: "assets/imgs/clientlogo/Dunzo.png", alt: "Dunzo" },
  { src: "assets/imgs/clientlogo/Dream11.png", alt: "Dream11" },
  { src: "assets/imgs/clientlogo/Airtel.png", alt: "airtel" },
  { src: "assets/imgs/clientlogo/ZEE.png", alt: "ZEE" },
  { src: "assets/imgs/clientlogo/OYO.png", alt: "OYO" },
  { src: "assets/imgs/clientlogo/Josh.png", alt: "Josh" },
  { src: "assets/imgs/clientlogo/ShareChat.png", alt: "ShareChat" },
  { src: "assets/imgs/clientlogo/Make-My-trip.png", alt: "Make-My-trip" },
  { src: "assets/imgs/clientlogo/Goibibo.png", alt: "Goibibo" },
  { src: "assets/imgs/clientlogo/ixigo.png", alt: "ixigo" },
  { src: "assets/imgs/clientlogo/Yatra.png", alt: "Yatra" },
  { src: "assets/imgs/clientlogo/Nykaa.png", alt: "Nykaa" },
  { src: "assets/imgs/clientlogo/Myntra.png", alt: "Myntra" },
  { src: "assets/imgs/clientlogo/Snapdeal.png", alt: "Snapdeal" },
  { src: "assets/imgs/clientlogo/Smood.png", alt: "Smood" },
  { src: "assets/imgs/clientlogo/IDFC.png", alt: "IDFC" },
  { src: "assets/imgs/clientlogo/YesBank.png", alt: "YesBank" },
  { src: "assets/imgs/clientlogo/Edelweiss.png", alt: "Edelweiss" },
  { src: "assets/imgs/clientlogo/ELSA.png", alt: "ELSA" },
  { src: "assets/imgs/clientlogo/CoinMArketcap.png", alt: "CoinMArketcap" },
  { src: "assets/imgs/clientlogo/SimpleLearn.png", alt: "SimpleLearn" },
  { src: "assets/imgs/clientlogo/BYJU'sExamPrep.png", alt: "BYJU'sExamPrep" },
  { src: "assets/imgs/clientlogo/mint.png", alt: "mint" },
  { src: "assets/imgs/clientlogo/Magicbricks.png", alt: "Magicbricks" },
  { src: "assets/imgs/clientlogo/Housing.png", alt: "Housing" },
  { src: "assets/imgs/clientlogo/Nobroker.png", alt: "Nobroker" },
  { src: "assets/imgs/clientlogo/Ultrahuman.png", alt: "Ultrahuman" },
  { src: "assets/imgs/clientlogo/Fynd.png", alt: "fynd" },
  { src: "assets/imgs/clientlogo/FanCODE.png", alt: "FanCODE" },
  { src: "assets/imgs/clientlogo/fectar.png", alt: "fectar" },
  { src: "assets/imgs/clientlogo/ZET.png", alt: "ZET" },
];

const SEOTrustBy = () => {
  return (
    <div className="section mt-50">
      <div className="container">
        <div className="box-radius-logo">
          <div className="text-center">
            <p className="font-lg color-brand-1">Trusted By Enterprises</p>
          </div>
          <div className="mt-30">
            <marquee scrollAmount="20">
              <ul className="list-partners">
                {data.map((image, index) => (
                  <li key={index}>
                    <img src={image.src} alt={image.alt} height="50px" />
                  </li>
                ))}
              </ul>
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOTrustBy;

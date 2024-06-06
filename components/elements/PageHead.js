import Head from "next/head";
import Script from "next/script";

const PageHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/logo.svg" />
      {/* <!-- Google Tag Manager --> */}
      {/* <Script
        id="gtm"
        strategy="afterInteractive"
      >{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NH5RFSKJ');`}</Script> */}
      {/* <!-- End Google Tag Manager --> */}
    </Head>
  );
};

export default PageHead;

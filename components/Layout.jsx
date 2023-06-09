import React from "react";
import Head from "next/head";

import NavBar from "./NavBar/NavBar";
import Footer from "./Footer";

const Layout = ({ children, title, description, content, keywords }) => {
  return (
    <>
      <Head>
        <title>{`Trend Trove - ${title}`}</title>
        <meta charSet="UTF-8" />
        <meta name={description} content={content} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="TrendTrove - Juan Martin Perez" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://res.cloudinary.com/dvabcnlc4/image/upload/f_auto,q_auto/v1/TrendTrove/ivldike91ef7kdrljfx3" />

        <meta property="og:title" content={`Trend Trove - ${title}`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://res.cloudinary.com/dvabcnlc4/image/upload/f_auto,q_auto/v1/TrendTrove/ivldike91ef7kdrljfx3" />
        <meta property="og:url" content="https://trend-trove.shop" />
        <meta property="og:type" content="product" />
      </Head>
      <div className="max-w-screen-xl mx-auto">
        <NavBar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;

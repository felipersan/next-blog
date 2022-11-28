import React from "react";
import { AppProps } from "next/app";

import "../styles/global.css";
import Layout from "../components/layout";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname !== "/signIn" && router.pathname !== "/signUp") {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  } else {
    return <Component {...pageProps} />;
  }
}

export default MyApp;

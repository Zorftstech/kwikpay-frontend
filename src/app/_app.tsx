import React from "react";
import Layout from "@/components/layout/layout";

interface MyAppProps {
  Component: React.FC<any>;
  pageProps: any;
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;

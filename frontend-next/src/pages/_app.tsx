import "@styles/globals.css";
import { ThemeProvider } from "@material-ui/core";
import theme from "ui/themes/theme";
import Head from "next/head";
import Header from "ui/components/surfaces/Header/Header";
import Footer from "ui/components/surfaces/Header/Footer/Footer";
import { Appcontainer } from "ui/styles/pages/_app.style";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>e-diaristas</title>
        <link
          href="https://fontsgoogleapis.com/css2?family=Poppins:ital,wht@0,10"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <ThemeProvider theme={theme}>
        <Appcontainer>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Appcontainer>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

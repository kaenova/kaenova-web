import Document, { Html, Head, Main, NextScript } from "next/document";

class MainDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/png" href="/Favicon.png" />
        </Head>
        <body
          className="antialiased bg-white-template text-black-template"
          style={{ fontFamily: ["Poppins", "sans-serif"] }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MainDocument;

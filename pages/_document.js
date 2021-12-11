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
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;"
            rel="stylesheet"
          />
        </Head>
        <body
          className="antialiased"
          style={{ fontFamily: ["Poppins", "sans-serif"] }}
        >
          <div className="bg-white-template text-black-template">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}

export default MainDocument;

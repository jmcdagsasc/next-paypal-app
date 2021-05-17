import Document, { Html, Head, Main, NextScript } from "next/document";

class FarmazoneDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head />
        <body>
          <Main />
          <script src="https://www.paypal.com/sdk/js?currency=MXN&client-id=Ab6Y15dqay1zLlqAkk2YZik05jto6wmoB_J5ILBPkZgEDqIZ5-km5ZHqyagG8RKuQ7zGQclIiH1_4wUl"></script>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default FarmazoneDocument;

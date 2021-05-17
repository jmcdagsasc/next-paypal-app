import Head from "next/head";
import Image from "next/image";
import PaymentForm from "../components/payment";
import styles from "../styles/Home.module.css";

export default function Home() {
  const product = {
    price: 650.5,
    name: "Caja misteriosa de Manolo",
    description: "Caja misteriosa de Manolo",
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Paypal-Next App</title>
        <meta name="description" content="paypal next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Paypal-Next App</h1>

        <div className={styles.grid}>
          <PaymentForm product={product} />
        </div>
      </main>

      <footer className={styles.footer}>Este es un footer</footer>
    </div>
  );
}

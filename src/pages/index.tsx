/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import logo_larger from "@/public/logo_larger.svg";
import pets from "@/public/pets.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Find A Friend</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_small_orange.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.background}>
        <div className={styles.row}>
          <div className={styles.spacement}>
            <Image src={logo_larger} alt={"logo"}></Image>
            <p className={styles.mainText}>
              Leve
              <br /> a felicidade
              <br /> para o seu lar
            </p>
            <p className={styles.text}>
              Encontre o animal de estimação ideal
              <br /> para seu estilo de vida!
            </p>
          </div>
          <div className={styles.imagebox}>
            <Image src={pets} alt={"pets"}></Image>
          </div>
        </div>
      </div>
    </>
  );
}

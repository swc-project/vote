import type { NextPage } from "next";
import Head from "next/head";

import Description from "~/components/main/Description";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SWC Vote app</title>
        <meta name="description" content="Vote app for the SWC project" />
      </Head>

      <main className={styles.main}>
        <Description></Description>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;

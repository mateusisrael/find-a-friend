/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./Adote.module.css";
import logo_larger from "@/public/logo_larger.svg";
import lupa from "@/public/lupa.svg";
import pets from "@/public/pets.svg";
import Select from "@/components/Select";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { listFilters } from "./_data";
import { SearchButton } from "@/components/SearchButton";
import { Card } from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function SearchList() {
  const router = useRouter();
  const { estado, uf } = router.query;

  return (
    <>
      <Head>
        <title>Find A Friend | Adote</title>
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
        <div className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <div className={styles.logoMargin}>
              <Image src={logo_larger} alt={"logo"}></Image>
            </div>
            <div className={styles.regionFilters}>
              <Select
                backgroundColor={"var(--main-background-color-dark)"}
                size={"md"}
                options={["RJ", "PE"]}
              />
              <div className={styles.margin}>
                <Select
                  size={"lg"}
                  options={["Rio de Janeiro", "Pernambuco"]}
                  backgroundColor={"var(--main-background-color-dark)"}
                />
              </div>

              <SearchButton onClick={() => {}} />
            </div>
          </div>

          <div className={styles.sidebarBody}>
            <p className={styles.filterText}>Filtros</p>

            {listFilters.map((filter, i) => (
              <div className={styles.filterContainer} key={i}>
                <p className={styles.filterLabel}>{filter.label}</p>
                <Select
                  backgroundColor={"var(--main-background-color)"}
                  size={"lg"}
                  options={filter.options}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.list}>
          {Array.from(Array(10).keys()).map((element, i) => (
            <div style={{ margin: "10px" }} key={i}>
              <Card />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

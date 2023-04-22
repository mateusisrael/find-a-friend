import Image from "next/image";
import { FunctionComponent } from "react";
import styles from "./Card.module.css";
import dogoPNG from "@/public/dogo.png";
import petlogo from "@/public/logo_small.svg";

interface CardProps {
  species?: "cat" | "dog";
  picture?: string;
  name?: string;
}

const Card: FunctionComponent<CardProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pictureContainer}>
        <Image src={dogoPNG} alt={"Foto do bixinho"}></Image>
      </div>
      <div
        style={{
          backgroundColor: true
            ? "var(--main-background-color)"
            : "var(--secondary-color)",
        }}
        className={styles.animalSpecie}
      >
        <Image src={petlogo} alt={"Indicador da espécie"}></Image>
      </div>
      <p className={styles.name}>Alfredo</p>
    </div>
  );
};

export { Card };

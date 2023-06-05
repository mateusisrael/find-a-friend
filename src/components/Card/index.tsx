import Image from "next/image";
import { FunctionComponent } from "react";
import styles from "./Card.module.css";
import petlogo from "@/public/logo_small.svg";
import { IPetResume } from "@/types/pet";

interface CardProps {
  pet: IPetResume;
}

const Card: FunctionComponent<CardProps> = ({ pet }) => {
  return (
    <div className={styles.container}>
      <div className={styles.pictureContainer}>
        <Image
          width={274}
          height={135}
          src={pet.mainPicture}
          alt={"Foto do bixinho"}
        ></Image>
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
      <p className={styles.name}>{pet.name}</p>
    </div>
  );
};

export { Card };

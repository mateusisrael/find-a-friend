import Image from "next/image";
import lupa from "@/public/lupa.svg";
import styles from "./SearchButton.module.css";

export function SearchButton({ onClick }) {
  return (
    <button onClick={onClick} className={styles.searchButton}>
      <Image src={lupa} alt="Lupa" />
    </button>
  );
}

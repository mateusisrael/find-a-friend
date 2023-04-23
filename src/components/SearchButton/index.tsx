import Image from "next/image";
import lupa from "@/public/lupa.svg";
import styles from "./SearchButton.module.css";
import { FunctionComponent } from "react";

// interface CallbackFunction {
//   (): void;
// }

interface SearchButtonProps {
  onClick: VoidFunction;
}

export const SearchButton: FunctionComponent<SearchButtonProps> = ({
  onClick,
}) => {
  return (
    <button onClick={onClick} className={styles.searchButton}>
      <Image src={lupa} alt="Lupa" />
    </button>
  );
};

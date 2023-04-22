import styles from "@/components/Select/Select.module.css";
import { FunctionComponent, useState } from "react";
import arrowSVG from "@/public/drop-arrow.svg";
import Image from "next/image";

interface SelectProps {
  options: string[];
  size: "md" | "lg";
  backgroundColor?: string;
  centrelizeSelectText?: boolean;
}

const Select: FunctionComponent<SelectProps> = ({
  centrelizeSelectText = false,
  options,
  size,
  backgroundColor,
}) => {
  const [selected, setSelected] = useState(options[0]);
  const [isOpenOptions, setOpenOptions] = useState(false);

  const _handleChange = (item: string) => {
    setSelected(item);
    setOpenOptions(false);
  };

  const _handleMouseOut = () => {
    setOpenOptions(false);
  };

  return (
    <div
      onMouseLeave={_handleMouseOut}
      // onMouseBlur={_handleMouseOut}
      className={`${styles.container} ${styles[size]}`}
    >
      <div
        style={{ backgroundColor: backgroundColor }}
        className={`${styles.selection} ${
          isOpenOptions ? styles.selectionRemoveBorderBottom : ""
        }
          ${centrelizeSelectText ? styles.alignCenter : ""}
          `}
        onClick={() => setOpenOptions((state) => !state)}
      >
        {selected}
        <Image
          className={isOpenOptions ? styles.arrow180deg : styles.arrow}
          src={arrowSVG}
          alt="dropdown icon"
        />
      </div>
      {isOpenOptions ? (
        <div
          style={{ backgroundColor: backgroundColor }}
          className={styles.optionsContainer}
        >
          {options.map((item, i) => {
            return (
              <div
                className={styles.option}
                onClick={() => _handleChange(item)}
                key={i}
              >
                {item}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Select;

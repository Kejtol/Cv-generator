import React, { useRef, useEffect } from "react";
import InputModule from "./InputModule";

interface Props {
  intere: string[];
  setIntere: React.Dispatch<React.SetStateAction<string[]>>;
  setStart: React.Dispatch<React.SetStateAction<number>>;
  setIsDone: React.Dispatch<React.SetStateAction<number>>;
}

const Interests: React.FC<Props> = ({
  intere,
  setIntere,
  setStart,
  setIsDone,
}) => {
  useEffect(() => {
    setStart(2);
    setIsDone(5);
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const undoExp = (): void => {
    setIntere(intere.slice(0, -1));
  };
  const deleteExp = (): void => {
    setIntere([]);
  };
  const addExp = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log(intere);

    if (inputRef.current) {
      setIntere([...intere, inputRef.current.value]);
      inputRef.current.value = "";
    }
  };

  return (
    <InputModule
      addExp={addExp}
      deleteExp={deleteExp}
      undoExp={undoExp}
      type={intere}
      title={"Opisz swoje zainteresowania"}
      inputRef={inputRef}
    />
  );
};

export default Interests;

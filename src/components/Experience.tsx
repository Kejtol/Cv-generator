import React, { useRef, useEffect } from "react";
import InputModule from "./InputModule";

interface Props {
  exps: string[];
  setExps: React.Dispatch<React.SetStateAction<string[]>>;
  setStart: React.Dispatch<React.SetStateAction<number>>;
  setIsDone: React.Dispatch<React.SetStateAction<number>>;
}

const Experience: React.FC<Props> = ({
  exps,
  setExps,
  setStart,
  setIsDone,
}) => {
  useEffect(() => {
    setStart(2);
    setIsDone(1);
  }, []);

  const inputRef = useRef<HTMLInputElement>(null);

  const undoExp = (): void => {
    setExps(exps.slice(0, -1));
  };
  const deleteExp = (): void => {
    setExps([]);
  };
  const addExp = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log(exps);

    if (inputRef.current) {
      setExps([...exps, inputRef.current.value]);
      inputRef.current.value = "";
    }
  };

  return (
    <InputModule
      addExp={addExp}
      deleteExp={deleteExp}
      undoExp={undoExp}
      type={exps}
      title={"Wprowadź swoje doświadczenie zawodowe"}
      inputRef={inputRef}
    />
  );
};

export default Experience;

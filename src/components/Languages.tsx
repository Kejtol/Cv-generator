import React, { useRef, useEffect } from "react";
import InputModule from "./InputModule";

interface Props {
  lang: string[];
  setLang: React.Dispatch<React.SetStateAction<string[]>>;
  setStart: React.Dispatch<React.SetStateAction<number>>;
  setIsDone: React.Dispatch<React.SetStateAction<number>>;
}

const Languages: React.FC<Props> = ({ lang, setLang, setStart, setIsDone }) => {
  useEffect(() => {
    setStart(2);
    setIsDone(3);
  }, []);

  const inputRef = useRef<HTMLInputElement>(null);

  const undoExp = (): void => {
    setLang(lang.slice(0, -1));
  };
  const deleteExp = (): void => {
    setLang([]);
  };
  const addExp = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log(lang);

    if (inputRef.current) {
      setLang([...lang, inputRef.current.value]);
      inputRef.current.value = "";
    }
  };

  return (
    <InputModule
      addExp={addExp}
      deleteExp={deleteExp}
      undoExp={undoExp}
      type={lang}
      title={"Wprowadź języki, które znasz"}
      inputRef={inputRef}
    />
  );
};

export default Languages;

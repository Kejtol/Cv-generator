import React, { useRef, useEffect } from "react";
import InputModule from "./InputModule";

interface Props {
  educat: string[];
  setEducat: React.Dispatch<React.SetStateAction<string[]>>;
  setStart: React.Dispatch<React.SetStateAction<number>>;
  setIsDone: React.Dispatch<React.SetStateAction<number>>;
}

const Education: React.FC<Props> = ({
  educat,
  setEducat,
  setStart,
  setIsDone,
}) => {
  useEffect(() => {
    setStart(2);
    setIsDone(2);
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const undoExp = (): void => {
    setEducat(educat.slice(0, -1));
  };
  const deleteExp = (): void => {
    setEducat([]);
  };
  const addExp = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log(educat);

    if (inputRef.current) {
      setEducat([...educat, inputRef.current.value]);
      inputRef.current.value = "";
    }
  };

  return (
    <InputModule
      addExp={addExp}
      deleteExp={deleteExp}
      undoExp={undoExp}
      type={educat}
      title={"Wprowadź swoje wykształcenie"}
      inputRef={inputRef}
    />
  );
};

export default Education;

import React, { useRef, useEffect } from "react";
import InputModule from "./InputModule";

interface Props {
  skill: string[];
  setSkill: React.Dispatch<React.SetStateAction<string[]>>;
  setStart: React.Dispatch<React.SetStateAction<number>>;
  setIsDone: React.Dispatch<React.SetStateAction<number>>;
}

const Skills: React.FC<Props> = ({ skill, setSkill, setStart, setIsDone }) => {
  useEffect(() => {
    setStart(2);
    setIsDone(4);
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const undoExp = (): void => {
    setSkill(skill.slice(0, -1));
  };
  const deleteExp = (): void => {
    setSkill([]);
  };
  const addExp = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log(skill);

    if (inputRef.current) {
      setSkill([...skill, inputRef.current.value]);
      inputRef.current.value = "";
    }
  };

  return (
    <InputModule
      addExp={addExp}
      deleteExp={deleteExp}
      undoExp={undoExp}
      type={skill}
      title={"Opisz swoje umiejętności"}
      inputRef={inputRef}
    />
  );
};

export default Skills;

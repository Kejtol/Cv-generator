import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import UndoIcon from "@mui/icons-material/Undo";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

interface Props {
  addExp: (e: React.FormEvent) => void;
  deleteExp: (e: React.FormEvent) => void;
  undoExp: (e: React.FormEvent) => void;
  type: string[];
  title: string;
  inputRef: React.RefObject<HTMLInputElement>;
}

const InputModule: React.FC<Props> = ({
  inputRef,
  addExp,
  deleteExp,
  undoExp,
  type,
  title,
}) => {
  return (
    <InputModuleContainer>
      <InputModuleLeft>
        <h1>{title}</h1>
        <form onSubmit={addExp}>
          <input type="text" ref={inputRef} />
        </form>
        <InputModuleButtons>
          <Button onClick={deleteExp}>
            <DeleteIcon />
          </Button>
          <Button onClick={undoExp}>
            <UndoIcon />
          </Button>
        </InputModuleButtons>
      </InputModuleLeft>
      <InputModuleRight>
        <ul>
          {type.map((exp: string, index: number) => {
            return <li key={index}>{exp}</li>;
          })}
        </ul>
      </InputModuleRight>
    </InputModuleContainer>
  );
};

export default InputModule;

const InputModuleContainer = styled.div`
  display: flex;
`;
const InputModuleLeft = styled.div`
  width: 50%;
  height: 450px;
  background-color: #fff;
  margin: 10px;
  border-radius: 20px;
  font-size: 35px;
  text-align: center;
  box-shadow: 7px 4px 9px -4px rgba(66, 68, 90, 1);
  > h1 {
    margin-top: 70px;
    font-size: 30px;
  }
  > form {
    > input {
      margin-top: 80px;
      outline: none;
      height: 50px;
      width: 90%;
      border: none;
      border-bottom: 3px solid #23126d;
      font-size: 20px;
    }
  }
`;
const InputModuleRight = styled.div`
  width: 50%;
  height: 450px;
  background-color: #fff;
  margin: 10px;
  border-radius: 20px;
  font-size: 35px;
  text-align: center;
  box-shadow: 7px 4px 9px -4px rgba(66, 68, 90, 1);
  > ul {
    font-size: 20px;
    margin: 30px;
  }
`;
const InputModuleButtons = styled.div`
  margin: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > button {
    border-radius: 30px;
    background-color: #ece9fa;
    > .MuiSvgIcon-root {
      font-size: 50px;
      color: #23126d;
    }
  }
`;

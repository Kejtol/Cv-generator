import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
  start: number;
  setStart: React.Dispatch<React.SetStateAction<number>>;
  setIsDone: React.Dispatch<React.SetStateAction<number>>;
}

const StartPage: React.FC<Props> = ({ start, setStart, setIsDone }) => {
  const navigate = useNavigate();
  const handleClick = (): void => {
    setStart(1);
    setIsDone(1);
    navigate("/stepone");
  };

  return (
    <StartPageContainer>
      <h1>Utwórz nowe CV i znajdź pracę marzeń</h1>
      <Button onClick={handleClick}>Zaczynajmy!</Button>
    </StartPageContainer>
  );
};

export default StartPage;
const StartPageContainer = styled.div`
  margin-top: 10vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;

  > h1 {
    color: #23126d;
    font-size: 70px;
  }
  > button {
    color: white;
    font-size: 50px;
    font-weight: 600;
    height: 170px;
    width: 500px;
    border-radius: 80px;
    background-color: #23126d;
    margin-top: 70px;
    :hover {
      opacity: 0.8;
      background-color: #23126d;
    }
  }
`;

import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

interface Props {
  isDone: number;
  setIsDone: React.Dispatch<React.SetStateAction<number>>;
  start: number;
  setStart: React.Dispatch<React.SetStateAction<number>>;
}

const Footer: React.FC<Props> = ({ isDone, setIsDone, start, setStart }) => {
  const navigate = useNavigate();

  const addValue = (): void => {
    if (isDone <= 7) {
      setIsDone(isDone + 1);
    } else {
      setIsDone(isDone);
    }
  };

  const goTo = (call: Function): void => {
    if (isDone === 6 && start === 2) {
      navigate("/summary");
    } else if (isDone === 5 && start === 2) {
      navigate("/person");
    } else if (isDone === 4 && start === 2) {
      navigate("/interests");
    } else if (isDone === 3 && start === 2) {
      navigate("/skills");
    } else if (isDone === 2 && start === 2) {
      navigate("/languages");
    } else if (isDone === 1 && start === 2) {
      navigate("/education");
    } else if (isDone === 0 && start === 2) {
      navigate("/experience");
    } else if (isDone === 0 && start === 2) {
      navigate("/");
    }
    call();
  };

  const goBack = (call: Function): void => {
    if (isDone === 8 && start === 2) {
      navigate("/summary");
    } else if (isDone === 7 && start === 2) {
      navigate("/person");
    } else if (isDone === 6 && start === 2) {
      navigate("/interests");
    } else if (isDone === 5 && start === 2) {
      navigate("/skills");
    } else if (isDone === 4 && start === 2) {
      navigate("/languages");
    } else if (isDone === 3 && start === 2) {
      navigate("/education");
    } else if (isDone === 2 && start === 2) {
      navigate("/experience");
    } else if (isDone === 1 && start === 2) {
      navigate("/");
    }
    call();
  };

  const substractValue = (): void => {
    if (isDone >= 1) {
      setIsDone(isDone - 1);
    } else {
      setIsDone(isDone);
    }
  };

  const nextBut = (): void => {
    goTo(addValue);
  };
  const backBut = (): void => {
    goBack(substractValue);
  };
  return (
    <FooterContainer>
      <FooterButton>
        <Button onClick={backBut}>
          Back
          <ArrowBackIosNewIcon />
        </Button>
      </FooterButton>
      <FooterButton>
        <Button onClick={nextBut}>
          Next
          <ArrowForwardIosIcon />
        </Button>
      </FooterButton>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  width: 100vw;
`;
const FooterButton = styled.div`
  margin: 20px;
  > button {
    color: white;
    height: 70px;
    width: 200px;
    border-radius: 30px;
    background-color: #23126d;
    :hover {
      opacity: 0.8;
      transition: 120ms;
      transform: scale(1.1);
      background-color: #23126d;
    }
  }
`;

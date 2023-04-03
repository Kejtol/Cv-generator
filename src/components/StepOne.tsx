import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Props {
  isDone: number;
  setIsDone: React.Dispatch<React.SetStateAction<number>>;
  setStart: React.Dispatch<React.SetStateAction<number>>;
}

const StepOne: React.FC<Props> = ({ isDone, setIsDone, setStart }) => {
  useEffect(() => {
    setStart(1);
  });

  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const [test, setTest] = useState<string>("");

  const enterClick = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputRef.current) {
      setTest(inputRef.current.value);
    }
  };
  return (
    <StepOneContainer>
      <StepOneLeft>
        <form onSubmit={enterClick}>
          {isDone === 0 && (
            <h3>
              Na początek mała instrukcja jak tworzyć CV w naszym generatorze
            </h3>
          )}
          {isDone >= 3 && (
            <input
              type="text"
              ref={inputRef}
              placeholder="Wprowadź informacje"
            />
          )}
          {isDone === 0 && <h3>Jesli jesteś gotowy naciśnij NEXT</h3>}
          {test !== "" && <h3>{test}</h3>}
        </form>
        {isDone >= 6 && (
          <button
            onClick={() => {
              navigate("/experience");
              setIsDone(1);
              setStart(2);
            }}
          >
            {" "}
            Przejdź dalej
          </button>
        )}
      </StepOneLeft>
      <StepOneRight>
        <ul>
          {isDone >= 1 && <li>Powyżej widzisz postęp tworzenia Twojego CV </li>}
          {isDone >= 2 && (
            <li>Kroki które wykonasz i zatwierdzisz zostaną odznaczone</li>
          )}
          {isDone >= 3 && (
            <li>
              Informacje o sobie wprowadzaj w polu które wyświetliło sie po
              lewej stronie{" "}
            </li>
          )}
          {isDone >= 4 && (
            <li>
              Zatwierdzanie podanych informacji wykonaj poprzez naciśnięcie
              klawisza Enter
            </li>
          )}
          {isDone >= 5 && (
            <li>
              Przetestuj teraz działanie tego systemu wpisując testową
              informacje i zatwierdzając klawiszem Enter
            </li>
          )}
          {isDone >= 6 && (
            <li>
              Po wprowadzeniu wszytskich informacji wybierzesz idealny dla
              Ciebie szablon oraz wykonasz zdjęcie{" "}
            </li>
          )}
        </ul>
      </StepOneRight>
    </StepOneContainer>
  );
};

export default StepOne;

const StepOneContainer = styled.div`
  display: flex;
  height: 100%;
`;
const StepOneLeft = styled.div`
  width: 50%;
  height: 450px;
  background-color: #fff;
  margin: 10px;
  border-radius: 20px;
  font-size: 35px;
  text-align: center;
  box-shadow: 7px 4px 9px -4px rgba(66, 68, 90, 1);

  > form > h3 {
    margin: 30px;
    margin-bottom: 50px;
  }
  > form > input {
    margin-top: 80px;
    outline: none;
    height: 50px;
    width: 90%;
    border: none;
    border-bottom: 3px solid #23126d;
    font-size: 20px;
  }
  > form > button {
    display: none;
  }
  > button {
    color: white;
    margin-top: 20px;
    font-size: 30px;
    height: 70px;
    width: 90%;
    border-radius: 30px;
    background-color: #23126d;
    :hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
`;
const StepOneRight = styled.div`
  width: 50%;
  height: 450px;
  background-color: #fff;
  margin: 10px;
  border-radius: 20px;
  box-shadow: 7px 4px 9px -4px rgba(66, 68, 90, 1);
  > ul {
    font-size: 25px;
    margin-top: 20px;
  }
`;

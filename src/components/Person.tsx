import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import TakePhoto from "./TakePhoto";

interface PersonData {
  name: string;
  lastname: string;
  email: string;
  picture: string;
}

interface Props {
  user: PersonData;
  setUser: React.Dispatch<React.SetStateAction<PersonData>>;
  setStart: React.Dispatch<React.SetStateAction<number>>;
  setIsDone: React.Dispatch<React.SetStateAction<number>>;
}

const Person: React.FC<Props> = ({ user, setUser, setStart, setIsDone }) => {
  useEffect(() => {
    setStart(2);
    setIsDone(6);
  }, []);

  const [takePic, setTakePic] = useState(false);

  const dataUpdate = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const imageUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageUser = e.target.files && e.target.files[0];

    if (imageUser) {
      const reader = new FileReader();
      reader.readAsDataURL(imageUser);
      reader.onloadend = () => {
        setUser({ ...user, picture: reader.result as string });
      };
    }
  };

  const addExp = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <PersonContainer>
      <PersonLeft>
        <PersonDataInput>
          <h2>Wprowadź swoje dane</h2>
          <form onSubmit={addExp}>
            <input
              type="text"
              name="name"
              onChange={dataUpdate}
              placeholder="Imię"
            />
            <input
              type="text"
              name="lastname"
              onChange={dataUpdate}
              placeholder="Nazwisko"
            />
            <input
              type="text"
              name="email"
              onChange={dataUpdate}
              placeholder="Email/Numer telefonu"
            />
            <input
              className="file-input"
              type="file"
              name="picture"
              onChange={imageUpdate}
            />
          </form>
        </PersonDataInput>
        <hr />
        <PersonImageInput>
          <h2>Zrób zdjęcie teraz</h2>
          {takePic && (
            <TakePhoto user={user} setTakePic={setTakePic} setUser={setUser} />
          )}
          {!takePic && (
            <button onClick={(): void => setTakePic(true)}>
              <CameraAltIcon />
            </button>
          )}
        </PersonImageInput>
      </PersonLeft>

      <PersonRight>
        <PersonData>
          <h3>Imię</h3>
          <p>{user.name}</p>
          <h3>Nazwisko</h3>
          <p>{user.lastname}</p>
          <h3>Dane Kontaktowe</h3>
          <p>{user.email}</p>
        </PersonData>
        <hr />
        <PersonImage>
          <img src={user.picture} alt="Twoje zdjęcie" />
        </PersonImage>
      </PersonRight>
    </PersonContainer>
  );
};

export default Person;

const PersonContainer = styled.div`
  display: flex;
`;
const PersonLeft = styled.div`
  display: flex;
  width: 50%;
  height: 450px;
  background-color: #fff;
  margin: 10px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 7px 4px 9px -4px rgba(66, 68, 90, 1);
  > h2 {
    margin-top: 70px;
    font-size: 30px;
  }
`;
const PersonDataInput = styled.div`
  flex: 0.5;
  margin: 30px;
  > form {
    > input {
      outline: none;
      height: 50px;
      width: 100%;
      border: none;
      border-bottom: 3px solid #23126d;
      font-size: 20px;
    }
    > input[type="file"]::file-selector-button {
      background-color: #23126d;
      cursor: pointer;
      color: white;
      border: none;
      border-radius: 10px;
      margin-top: 10px;
    }
  }
`;
const PersonImageInput = styled.div`
  flex: 0.5;
  margin: 30px;
  text-align: center;
  > button {
    margin-top: 30px;
    border-radius: 20px;
    background-color: #ece9fa;
    > .MuiSvgIcon-root {
      font-size: 50px;
      color: #23126d;
    }
  }
`;

const PersonRight = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  height: 450px;
  background-color: #fff;
  margin: 10px;
  border-radius: 20px;
  font-size: 25px;
  box-shadow: 7px 4px 9px -4px rgba(66, 68, 90, 1);
`;
const PersonData = styled.div`
  flex: 0.5;
  margin: 30px;
`;
const PersonImage = styled.div`
  display: flex;
  justify-content: center;
  flex: 0.5;
  margin: 30px;
  > img {
    height: 350px;
    width: 300px;
    border-radius: 20px;
  }
`;

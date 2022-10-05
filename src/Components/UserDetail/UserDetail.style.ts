import styled from "styled-components";

const WrapName = styled.div`
  display: flex;
  padding-top: 4px;
  gap: 6px;
`;
const WrapEmail = styled.div`
  display: flex;
  padding-top: 4px;
`;

const WrapLocation = styled.div`
  display: flex;
  gap: 6px;
  padding-top: 4px;
`;

const WrapBtn = styled.div`
  display: flex;
  padding-top: 8px;
  gap: 20px;
`;

const ButtonDelete = styled.button`
  background-color: red;
  color: white;
  border-radius: 5px;
  padding: 6px;
  width: 80px;
  cursor: pointer;
`;

const ButtonEdit = styled.button`
  background-color: blue;
  color: white;
  border-radius: 5px;
  padding: 6px;
  width: 80px;
  cursor: pointer;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: 8px;
  border: 1px solid black;
  border-radius: 15px;
  background: linear-gradient(45deg, black, transparent);
  img {
    border-radius: 50%;
  }
`;

export {
  WrapName,
  Card,
  WrapEmail,
  WrapLocation,
  WrapBtn,
  ButtonDelete,
  ButtonEdit,
};

import React from "react";
import { IUsers } from "../../Interfece/interface";
import UserDetail from "../UserDetail/UserDetail";
import { Container } from "./UsersList.style";

interface IUserProps {
  users: IUsers[];
}

export const UsersList = ({ users }: IUserProps) => {
  return (
    <>
      {users.length ? (
        <Container>
          {users?.map((user) => (
            <UserDetail key={user.login.uuid} user={user} />
          ))}
        </Container>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            color: "red",
          }}
        >
          The users do not exist
        </div>
      )}
    </>
  );
};

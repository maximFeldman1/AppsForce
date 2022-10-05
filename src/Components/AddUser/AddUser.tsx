import React, { useState } from "react";
import { IUsers } from "../../Interfece/interface";
import EditUserBtn from "../EditButton/EditUserBtn";
import { WrapButton } from "./AddUser.style";
import { v4 as uuidv4 } from "uuid";
const AddUser = () => {
  console.log("uuid", uuidv4());

  const usersInfo: IUsers = {
    name: {
      first: "",
      last: "",
      title: "",
    },
    location: {
      city: "",
      country: " ",
      street: {
        name: " ",
      },
    },
    email: "",
    login: { uuid: uuidv4() },
    picture: {
      medium: "",
    },
  };

  const [isAdd, setIsAdd] = useState<boolean>(false);

  const onClickAdd = (isAddUser: boolean) => {
    setIsAdd(isAddUser);
  };

  return (
    <div>
      <WrapButton onClick={() => setIsAdd(!isAdd)}>Add</WrapButton>
      {isAdd && (
        <EditUserBtn
          isAddUser={true}
          onClickAdd={onClickAdd}
          user={usersInfo}
          onClickEdit={function (isEdit: boolean): void | undefined {
            throw new Error("Function not implemented.");
          }}
        />
      )}
    </div>
  );
};

export default AddUser;

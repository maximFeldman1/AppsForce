import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IUsers } from "../../Interfece/interface";
import { removeUser } from "../../store/slices/UsersDetailSlice";
import EditUserBtn from "../EditButton/EditUserBtn";
import {
  WrapName,
  Card,
  WrapEmail,
  WrapLocation,
  WrapBtn,
  ButtonEdit,
  ButtonDelete,
} from "./UserDetail.style";

interface IUserProps {
  user: IUsers;
}

const UserDetail = ({ user }: IUserProps) => {
  const [isEditBtn, setIsEditBtn] = useState<boolean>(false);
  const dispatch = useDispatch();

  const onClickEdit = (isEdit: boolean) => {
    setIsEditBtn(isEdit);
  };

  return (
    <Card>
      <img src={user.picture.medium} alt={user.name.title} />
      <WrapName>
        <span>{user.name.title}</span>
        <span>{user.name.first}</span>
        <span>{user.name.last}</span>
      </WrapName>
      <WrapEmail>{user.email}</WrapEmail>
      <WrapLocation>
        <span>{user.location.street.name},</span>
        <span>{user.location.city} </span>

        <span>{user.location.country}</span>
      </WrapLocation>
      <WrapBtn>
        <ButtonEdit onClick={() => setIsEditBtn(!isEditBtn)}>Edit</ButtonEdit>
        <ButtonDelete onClick={() => dispatch(removeUser(user))}>
          Delete
        </ButtonDelete>
      </WrapBtn>
      {isEditBtn && (
        <EditUserBtn isAddUser={false} onClickEdit={onClickEdit} user={user} onClickAdd={function (isAddUser: boolean): void | undefined {
          throw new Error("Function not implemented.");
        } } />
      )}
    </Card>
  );
};

export default UserDetail;

import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/redux";
import { IUsers } from "../../Interfece/interface";
import { Formik, Form, Field } from "formik";
import { userAdd, userEdit } from "../../store/slices/UsersDetailSlice";
import {
  EditModal,
  WrapEdit,
  WrapButtons,
  ButtonSave,
  ButtonCancel,
} from "./EditUserBtn.style";

interface IEdit {
  user: IUsers;
  onClickEdit: (isEdit: boolean) => void | undefined;
  isAddUser: boolean;
  onClickAdd: (isAddUser: boolean) => void | undefined;
}
const EditUserBtn = ({ onClickEdit, user, isAddUser, onClickAdd }: IEdit) => {
  const initValues = {
    name: {
      first: user.name.first,
      last: user.name.last,
      title: user.name.title,
    },
    location: {
      city: user.location.city,
      country: user.location.country,
      street: {
        name: user.location.street.name,
      },
    },
    email: user.email,
    login: { uuid: user.login.uuid },
  };

  const { users } = useAppSelector((state) => state.usersReducer);
  const dispatch = useDispatch();

  function isEmail(email: string) {
    const regex = new RegExp("[a-z0-9]+@[a-z]+[a-z]{2,3}");
    return regex.test(email);
  }

  const checkEmptyFeild = (user: IUsers) => {
    let isEmptyField = false;
    Object.values(user.location).forEach((val) => {
      if (val === "") {
        isEmptyField = true;
      }
    });
    Object.values(user.name).forEach((val) => {
      if (val === "") {
        isEmptyField = true;
      }
    });
    return isEmptyField;
  };

  const checkEmailIsExit = (singleUser: IUsers) => {
    let isEmailTaken = false;
    users.forEach((user: IUsers) => {
      if (
        singleUser.email === user.email &&
        singleUser.login.uuid !== user.login.uuid
      )
        isEmailTaken = true;
    });
    return isEmailTaken;
  };

  const onSubmit = (values: any) => {
    const userCopy: IUsers = { ...user, ...values };
    if (!isEmail(values.email)) {
      alert("Email is not valid");
      return;
    }
    if (checkEmptyFeild(userCopy)) {
      alert("Field cannot be empty");
      return;
    }

    if (userCopy.name.first.length < 3) {
      alert("First Name length is too short");
      return;
    }

    if (checkEmailIsExit(userCopy)) {
      alert("Email already Exist");
      return;
    }

    if (!isAddUser) {
      dispatch(userEdit(userCopy));
      onClickEdit(false);
    } else {
      dispatch(userAdd(userCopy));
      onClickAdd(false);
    }
  };

  return (
    <WrapEdit>
      <EditModal>
        <div>
          {isAddUser && <h2>Add User</h2>}
          {!isAddUser && <h2>Edit User</h2>}
        </div>
        <Formik
          initialValues={initValues}
          onSubmit={(values) => {
            onSubmit(values);
          }}
        >
          <Form >
            <div >
              <h2>Info</h2>
              <label htmlFor="name.first">First Name:</label>
              <Field id="name.first" name="name.first" />
              <label htmlFor="name.last">Last last:</label>
              <Field id="name.last" name="name.last" />
              <label htmlFor="name.title">Title:</label>
              <Field id="name.title" name="name.title" />
            </div>
            <div >
              <h2>Location</h2>
              <label htmlFor="City">City:</label>
              <Field id="location.city" name="location.city" />
            </div>
            <div>
              <h2>Email</h2>
              <label htmlFor="Email">Email:</label>
              <Field id="email" name="email" />
            </div>
            <WrapButtons>
              <ButtonSave
                type="submit"
                className="primary-btn login-signup-btn"
              >
                Save
              </ButtonSave>
              <ButtonCancel
                
                onClick={() => {
                  isAddUser ? onClickAdd(false) : onClickEdit(false);
                }}
              >
                Cancel
              </ButtonCancel>
            </WrapButtons>
          </Form>
        </Formik>
      </EditModal>
    </WrapEdit>
  );
};

export default EditUserBtn;

import React, { useEffect } from "react";
import AddUser from "../Components/AddUser/AddUser";
import FilterUsers from "../Components/FilterUser/FilterUsers";
import { UsersList } from "../Components/ListOfUsers/UsersList";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchUsers } from "../store/ActionsCreators";
import { WrapFilters } from "./Homepage.style";

const HomePage = () => {
  const { users, loading } = useAppSelector((state) => state.usersReducer);

  const dispatch = useAppDispatch();

  console.log("users", users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <WrapFilters>
        <FilterUsers />
        <AddUser />
      </WrapFilters>
      {loading ? <div>Loading...</div> : <UsersList users={users} />}
    </>
  );
};

export default HomePage;

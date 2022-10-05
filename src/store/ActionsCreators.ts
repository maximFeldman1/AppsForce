import axios from "axios";
import { AppDispatch } from ".";
import { usersSlice } from "./slices/UsersDetailSlice";

export const fetchUsers = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(usersSlice.actions.usersFetching());
      const response = await axios.get("https://randomuser.me/api/?results=10");
      dispatch(
        usersSlice.actions.usersFetchingSuccess({
          users: response.data.results,
        })
      );
    } catch (e) {
      dispatch(usersSlice.actions.usersFetchingError(e as Error));
    }
  };
};

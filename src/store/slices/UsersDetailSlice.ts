import { IFilter } from "./../../Interfece/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUsers } from "../../Interfece/interface";

interface IUsersState {
  users: IUsers[];
  usersContainer: IUsers[];
  loading: boolean;
  error: string;
}

const initialState: IUsersState = {
  users: [],
  usersContainer: [],
  loading: false,
  error: "",
};

interface IUsersPayload {
  users: IUsers[];
}

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersFetching(state) {
      state.loading = true;
    },
    usersFetchingSuccess(state, action: PayloadAction<IUsersPayload>) {
      state.error = "";
      state.users = action.payload.users;
      state.usersContainer = action.payload.users;
      state.loading = false;
    },
    usersFetchingError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
    userEdit(state, action: PayloadAction<IUsers>) {
      state.users = state.users?.map((user) =>
        user.login.uuid === action.payload.login.uuid
          ? { ...action.payload }
          : user
      );
      console.log("ddd", state.users);
    },
    userAdd(state, action: PayloadAction<IUsers>) {
      state.users?.push(action.payload);
    },
    removeUser(state, action: PayloadAction<IUsers>) {
      state.users = state.users?.filter(
        (user) => user.login.uuid !== action.payload.login.uuid
      );
    },
    filterUsers(state, action: PayloadAction<IFilter>) {
      state.users = state.usersContainer
        ?.filter((user) =>
          (
            user.name.first.toLowerCase() ||
            user.name.last.toLowerCase() ||
            user.name.title.toLowerCase()
          ).includes(action.payload.name.toLowerCase())
        )
        .filter((user) =>
          user.email.toLowerCase().includes(action.payload.email.toLowerCase())
        )
        .filter((user) =>
          user.location.country
            .toLowerCase()
            .includes(action.payload.location.toLowerCase())
        );
    },
    // airportFilter(state, action: PayloadAction<IFilter>) {
    //   state.airports = state.airportsContainer
    //     .filter((air) => air.type.includes(action.payload.type))
    //     .filter((air) => air.country.includes(action.payload.country))
    //     .filter((air) => air.region.includes(action.payload.region));
    // },
  },
});
export const {
  usersFetching,
  usersFetchingSuccess,
  usersFetchingError,
  userEdit,
  removeUser,
  userAdd,
  filterUsers,
} = usersSlice.actions;
export default usersSlice.reducer;

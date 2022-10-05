import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IFilter } from "../../Interfece/interface";
import { filterUsers } from "../../store/slices/UsersDetailSlice";
import { Form } from "./FilterUsers.style";

const FilterUsers = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState<IFilter>({
    name: "",
    email: "",
    location: "",
  });

  useEffect(() => {
    dispatch(filterUsers(filter));
  }, [dispatch, filter]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="">
          Name:
          <input
            type="text"
            name="name"
            placeholder=""
            value={filter.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="">
          Email:
          <input
            type="text"
            name="email"
            placeholder=""
            value={filter.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="">
          Location:
          <input
            type="text"
            name="location"
            placeholder=""
            value={filter.location}
            onChange={handleChange}
          />
        </label>
      </div>
    </Form>
  );
};

export default FilterUsers;

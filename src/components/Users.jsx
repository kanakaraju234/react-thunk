import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, DataTable } from "../core";
import { getUsers } from "../redux/Reducers/UserReducer";

export const Users = () => {
  const { loading, error, users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  console.log("users", users);
  const tableHeaders = [
    {
      id: 1,
      name: "#",
    },
    {
      id: 2,
      name: "Name",
    },
    {
      id: 3,
      name: "Email",
    },
    {
      id: 4,
      name: "Phone Number",
    },
  ];
  // Memoize the dispatch function using useCallback
  const dispatchGetUsers = useCallback(() => {
    dispatch(getUsers());
  }, [dispatch]); // Ensure dispatch is the only dependency

  useEffect(() => {
    // Dispatch getUsers action only when the component mounts
    dispatchGetUsers();
  }, [dispatchGetUsers]); // Pass dispatchGetUsers as dependency

  if (loading) <div>Loading...</div>;
  if (error.length > 0) <div>{error}</div>;

  const renderData = users?.map((user) => {
    return (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
      </tr>
    );
  });

  return (
    <div>
      <Card className="fs-2">Users List</Card>
      <Card>
        <DataTable tableHeaders={tableHeaders} renderData={renderData} />
      </Card>
    </div>
  );
};

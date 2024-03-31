import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
      name: "Email",
    },
    {
      id: 3,
      name: "Created At",
    },
  ];

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (loading) <div>Loading...</div>;
  if (error.length > 0) <div>{error}</div>;

  const renderData = users?.map((user) => {
    return (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.mail}</td>
        <td>{user.created_at}</td>
      </tr>
    );
  });

  return (
    <div>
      <div className="shadow-sm p-3 mb-5 bg-white rounded border border-2 fs-2">
        Users List
      </div>
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              {tableHeaders?.map((item) => (
                <th key={item.id}>{item.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>{renderData}</tbody>
        </table>
      </div>
    </div>
  );
};

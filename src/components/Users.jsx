import { useCallback, useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, DataTable } from "../core";
import { getUsers } from "../redux/Reducers/UserReducer";
import { Pagination } from "../core/Pagination";
import "../components/Users.css"

export const Users = () => {
  const { loading, error, users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  

  const [limit, setLimit] = useState(5);
  const [selectedPage, setSelectedPage] = useState(1);

    useEffect(()=>{
      dispatch(getUsers({limit,selectedPage}));
    },[limit,selectedPage,dispatch]);

  const handleChange = (event) => {
    setLimit(event.target.value);
  };

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
    dispatch(getUsers(limit,selectedPage));
  }, [dispatch]); // Ensure dispatch is the only dependency

  // useEffect(() => {
  //   // Dispatch getUsers action only when the component mounts
  //   dispatch(getUsers(limit,selectedPage));
  // }, [dispatchGetUsers]); // Pass dispatchGetUsers as dependency

  if (loading) <div>Loading...</div>;
  if (error.length > 0) <div>{error}</div>;

  const renderData = users.data?.map((user) => {
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
        <div className="d-flex">
        <div className=" input-group search">
              <div className="input-group-prepend">
                <span className="input-group-text searchIcon">
                  <i className="bi bi-search"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control searchInput"
                placeholder="Search and enter for data"
                aria-label="Search"
                aria-describedby="button-addon2"
              ></input>
            </div>
            <div className="pageLimit">
        <p>Page Size:</p>
          <select value={limit} onChange={handleChange} className="PageLtDrop">
            
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20 ">20</option>
          </select>
          
        </div>
        </div>
      
        <DataTable tableHeaders={tableHeaders} renderData={renderData} />
        
        <div>
          
          <Pagination total={users?.items} pageLimit={limit} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        </div>
      </Card>
    </div>
  );
};

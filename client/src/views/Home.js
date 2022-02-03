// Components
import Table from "../components/Table";
// React
import { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/actionCreators";

const Home = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="home w-10/12 mx-auto">
      <div className="mb-5">
        <h1 className="heading">Administrator Database</h1>
      </div>
      <div>
        <Table users={users} />
      </div>
    </div>
  );
};

export default Home;

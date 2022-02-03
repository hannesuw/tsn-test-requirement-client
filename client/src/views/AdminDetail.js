// React
import { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store/actionCreators";

// Router
import { useParams } from "react-router-dom";
import Stats from "../components/Stats";

const AdminDetail = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchUser(id));
  }, []);

  return (
    <div className="admin-detail">
      <h1 className="heading mb-10">{user.name}</h1>
      <div className="w-1/2 mx-auto flex justify-center">
        <Stats email={user.email} phone={user.phone} category={user.category} />
      </div>
    </div>
  );
};

export default AdminDetail;

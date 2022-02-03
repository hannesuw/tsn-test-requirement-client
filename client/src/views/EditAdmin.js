import Form from "../components/Form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store/actionCreators";
import { useParams } from "react-router-dom";

const EditAdmin = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(id));
  }, []);

  return (
    <div className="edit-admin">
      <h1 className="heading">Edit Admin</h1>
      <Form page="Edit" />
    </div>
  );
};

export default EditAdmin;

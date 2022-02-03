import { useEffect } from "react";
import Form from "../components/Form";
import { useDispatch } from "react-redux";
import { setUser } from "../store/actionCreators";

const AddAdmin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser({ name: "", email: "", category: "", phone: "" }));
  });
  return (
    <div className="add-admin">
      <h1 className="heading">Add a New Admin</h1>
      <Form page="Add" />
    </div>
  );
};

export default AddAdmin;

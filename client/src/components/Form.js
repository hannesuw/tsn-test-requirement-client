// React
import { useEffect, useState } from "react";
import { createUser, editUser } from "../store/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { successAlert } from "../helpers/alert";

const Form = ({ page }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store);
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
  });

  useEffect(() => {
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      category: user.category,
    });
  }, [user]);

  const handleInputChange = (e) => {
    const val = e.target.value;
    const field = e.target.name;
    setFormData({
      ...formData,
      [field]: val,
    });
  };

  const doSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(formData))
      .then(() => {
        navigate("/");
        successAlert("Success create new user");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const doEdit = (e) => {
    e.preventDefault();
    dispatch(editUser(id, formData))
      .then(() => {
        navigate("/");
        successAlert("Success edit user");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-1/3 mx-auto">
      <form>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            className="input input-primary input-bordered input-md"
            value={formData.name}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            name="email"
            className="input input-primary input-bordered input-md"
            value={formData.email}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select
            class="select select-bordered select-primary w-full"
            name="category"
            onChange={(e) => handleInputChange(e)}
            value={formData.category}
          >
            <option disabled="disabled" selected="selected">
              Admin Category
            </option>
            <option value="Admin 1">Admin 1</option>
            <option value="Admin 2">Admin 2</option>
            <option value="Admin 3">Admin 3</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            type="text"
            name="phone"
            className="input input-primary input-bordered input-md"
            onChange={(e) => handleInputChange(e)}
            value={formData.phone}
          />
        </div>
        <div className="mt-10">
          {page === "Add" ? (
            <button
              className="w-full btn btn-primary text-white"
              onClick={(e) => doSubmit(e)}
            >
              Create
            </button>
          ) : (
            <button
              className="w-full btn btn-primary text-white"
              onClick={(e) => doEdit(e)}
            >
              Edit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;

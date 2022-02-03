import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "../store/actionCreators";
import { successAlert } from "../helpers/alert";

const Table = ({ users }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const doDelete = (id) => {
    dispatch(deleteUser(id)).then((user) => {
      successAlert(`Success delete ${user.name}`);
    });
  };
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Nama</th>
            <th>Email</th>
            <th>Kategori</th>
            <th>Detail</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ _id, name, email, category }, i) => {
            return (
              <tr className="hover ">
                <th>{i + 1}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{category}</td>
                <td>
                  <button
                    class="btn btn-sm btn-primary"
                    onClick={() => navigate(`/detail/${_id}`)}
                  >
                    Detail
                  </button>
                </td>
                <td className="flex gap-5">
                  <button
                    class="btn btn-sm btn-outline btn-accent"
                    onClick={() => navigate(`/edit/${_id}`)}
                  >
                    Edit
                  </button>
                  <button
                    class="btn btn-sm btn-outline btn-secondary"
                    onClick={() => doDelete(_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

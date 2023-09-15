import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const AllTaskTable = ({ task, index }) => {
  const { user } = useContext(AuthContext);
  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <th>{index + 1}</th>
        <td>{user.displayName}</td>
        <td>{task.title}</td>
        <td>{task.description}</td>
        <td>{task.date}</td>
        <td>{task.status ? "Completed" : "Pending"}</td>
      </tr>
    </tbody>
  );
};

export default AllTaskTable;

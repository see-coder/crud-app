import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../service/api";
import { useNavigate } from "react-router-dom";

function AllUsers() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    };

    const deleteUserDetails = async (id) => {
        await deleteUser(id);
        getAllUsers();
    };

    return (
        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th></th>
            </tr>
            {users.map((user) => (
                <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                        <button onClick={() => navigate(`/edit/${user._id}`)}>
                            Edit
                        </button>
                        <button onClick={() => deleteUserDetails(user._id)}>
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
        </table>
    );
}
export default AllUsers;

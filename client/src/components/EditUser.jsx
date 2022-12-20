import { useState, useEffect } from "react";
import { editUser, getUser } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
    });

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async () => {
        const response = await getUser(id);
        setUser(response.data);
    };

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const editUserDetails = async () => {
        await editUser(user, id);
        navigate("/all");
    };

    return (
        <div>
            <h4>Edit User</h4>
            <form>
                <input
                    onChange={(e) => onValueChange(e)}
                    name="name"
                    placeholder="Name"
                    value={user.name}
                />
                <input
                    onChange={(e) => onValueChange(e)}
                    name="username"
                    placeholder="UserName"
                    value={user.username}
                />
                <input
                    onChange={(e) => onValueChange(e)}
                    name="email"
                    placeholder="E-mail"
                    value={user.email}
                />
                <input
                    onChange={(e) => onValueChange(e)}
                    name="phone"
                    placeholder="Phone"
                    value={user.phone}
                />
                <button variant="contained" onClick={() => editUserDetails()}>
                    Edit User
                </button>
            </form>
        </div>
    );
}

export default EditUser;

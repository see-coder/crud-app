import { useState } from "react";
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";

function AddUser() {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
    });

    const navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const addUserDetails = async () => {
        await addUser(user);
        navigate("/all");
    };

    return (
        <div>
            <h4>Add User</h4>
            <form>
                <input
                    onChange={(e) => onValueChange(e)}
                    name="name"
                    placeholder="Name"
                />
                <input
                    onChange={(e) => onValueChange(e)}
                    name="username"
                    placeholder="UserName"
                />
                <input
                    onChange={(e) => onValueChange(e)}
                    name="email"
                    placeholder="E-mail"
                />
                <input
                    onChange={(e) => onValueChange(e)}
                    name="phone"
                    placeholder="Phone"
                />
                <button onClick={addUserDetails}>Add User</button>
            </form>
        </div>
    );
}

export default AddUser;

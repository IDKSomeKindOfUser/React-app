import {useContext} from "react";
import {UserContext} from "../../context/user.context.jsx";
import styles from "./SelectUser.module.css";

function SelectUser() {
    const {userId, setUserId} = useContext(UserContext);

    const changeUser = (e) => {
        setUserId(e.target.value);
    }

    return (
        <select className={styles['select']} name="user" id="user" onChange={changeUser} value={userId}>
            <option value="1">AkumA</option>
            <option value="2">Unknown</option>
        </select>
    )
}

export default SelectUser
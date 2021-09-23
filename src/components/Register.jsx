import react from "react";
import { registerUser } from "../api";

const Register = (props) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="auth-component-main-container">
            <form>
                <fieldset className="auth-component-input">
                    <label htmlFor="userName">User Name</label>
                    <input
                        id="userName"
                        type="text"
                        placeholder="enter username"
                        value={userName}
                        onChange={(event) => {
                            setUserName(event.target.value);
                        }
                        }></input>
                </fieldset>
                <fieldset className="auth-component-input">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="text"
                        placeholder="enter password"
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }
                        }></input>
                </fieldset>
            </form>
        </div>
    )
}
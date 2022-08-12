import {createContext, useContext} from "react";
import {useLocalStorage} from "./useLocalStorage";
import {useNavigate} from "react-router-dom";
import { userCredential } from "../../features/Login/userCredential";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useLocalStorage("user", null);
    const navigate = useNavigate();

    const login = async (data) => {
        return new Promise((resolve, reject) => { 
            setTimeout(() => {
                if (authenticate(data)) {
                    console.log(`login resolve`);
                    setUser(data.username);
                    navigate("/main", {replace: true});
                } else {
                    console.log(`login reject`);
                    reject(alert("Incorrect email or password"))
                }
            }, 3000);
        })
    };

    const logout = () => {
        setUser(null);
        navigate("/", {replace: true});
    };

    const authenticate = (userCredentialInput) => {
		const adminUserCredential = userCredential('admin@example.com', '12345678');
		return userCredentialInput.username === adminUserCredential.username && userCredentialInput.password === adminUserCredential.password;
	}

    return <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};

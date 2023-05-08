import axios from "./axios";

const AuthService = {
    login: (email, password) => {
        return axios.post("/auth/login", { email, password });
    },
    register(user) {
        return axios.post("/users", {user} );
    },

};

export default AuthService;

import { setItem } from "../helpers/persistanceStorge";
import AuthService from "../service/auth";

const state = {
    isLoading: false,
    user: null,
    errors: null
};

const mutations = {
    registerStart(state) {
        state.isLoading = true;
        state.errors = null;
        state.user = null;
    },
    registerSuccess(state, payload) {
        state.isLoading = false;
        state.user = payload;
    },
    registerFailure(state, payload) {
        state.isLoading = false;
        state.errors = payload;
    }
};

// action is same as mutation, but it is used for async operation
const actions = {
    register(context, user) {
        return new Promise((resolve, reject) => {
            context.commit("registerStart");
            AuthService.register(user).then(response => {
                context.commit("registerSuccess", response.data.user); // commit mutation
                setItem("token", response.data.user.token); // set token in local storage
                resolve(response.data.user); // resolve promise for consumption by caller function (e.g. component) example: Let's say you have a function that returns a promise, and you want to call that function and wait for it to resolve before doing something else with the result. You can use async/await to write asynchronous code that looks more like synchronous code.
            }).catch(error => {
                context.commit("registerFailure", error.response.data);
                reject(error.response.data); // reject promise for consumption by caller function 
            }
            );
        });
    }
};

export default {
    state,
    mutations,
    actions
}
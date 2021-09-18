import Vue from "vue";
import Vuex from "vuex";

import Axios from "axios";

Vue.use(Vuex);

const baseUrl = "http://localhost:3000/pages";


export default new Vuex.Store({
    strict: true,
    state: {
        pages: [],
    },
    mutations: {
        setPages(state, pages) {
            state.pages = pages;
        },
    },
    actions: {
        async setPagesAction(context) {
            context.commit("setPages", (await Axios.get(baseUrl)).data);
        },
    },
});

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        profileData: {}
    },
    mutations: {
        setProfileData(state, profileData) {
            state.profileData = profileData;
        }
    },
    getters: {
        porfileData: state => state.profileData
    }
});

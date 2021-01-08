import Vue from 'vue';
import Vuex from 'vuex';

import data from '../mocks/data';

Vue.use(Vuex);

const getDataFromSource = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
};

export default new Vuex.Store({
  state: {
    data: [],
  },
  getters: {
    getData(state) {
      return state.data;
    },
  },
  mutations: {
    SET_DATA(state, payload) {
      state.data = payload;
    },
  },
  actions: {
    async ActionGetData({ commit }, payload) {
      try {
        const data = await getDataFromSource(payload);
        commit('SET_DATA', data);
      } catch (error) {
        console.error(error);
      }
    },
  },
});

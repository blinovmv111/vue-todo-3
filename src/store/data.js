// import axios from 'axios';
import data from '../mocks/data';

const getDataFromSource = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
};

// const getDataFromSource = () => {
//   axios.get('https://jsonplaceholder.typicode.com/users/1/posts')
//   .then()
//   ;
// };

export default {
  namespased: true,
  state: {
    data: [],
  },
  getters: {
    getData: (state) => {
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
};

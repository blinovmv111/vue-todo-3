import axios from 'axios';
// import data from '../mocks/data';

// const getDataFromSource = (time) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(data);
//     }, time);
//   });
// };

// const getDataFromSource = () => {
//   axios.get('https://jsonplaceholder.typicode.com/users/1/posts')
//   .then()
//   ;
// };

export default {
  namespased: true,
  state: {
    data: [],
    error: false,
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
    SET_ERROR(state) {
      state.error = true;
    },
  },
  actions: {
    async ActionGetData({ commit }) {
      try {
        let { data } = await axios.get('https://jsonplaceholder.typicode.com/users/1/posts');
        // const data = await getDataFromSource(payload);
        commit('SET_DATA', data);
      } catch (error) {
        console.error(error);
        commit('SET_ERROR');
      }
    },
  },
};

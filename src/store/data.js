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
  },
  actions: {
    async ActionGetData({ commit }) {
      try {
        let { data } = await axios.get('https://jsonplaceholder.typicode.com/users/1/posts');
        // const data = await getDataFromSource(payload);
        commit('SET_DATA', data);
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response);
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
        return error;
      }
    },
  },
};

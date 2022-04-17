import { createStore } from 'vuex'
import axios from '../../plugins/axios'

export default createStore({
  state: {
    tasks: []
  },
  getters:{
    tasks: state => state.tasks
  },
  mutations: {
    setTasks: (state, tasks) => {
      state.tasks = tasks
    },
    addTask: (state, task) => {
      state.tasks.push(task)
    }
  },
  actions: {
    fetchTasks({ commit }) {
      axios.get('tasks')
      .then(res => {
        commit('setTasks', res.data)
      })
      .catch(err => console.log(err.response));
    },
    createTask({ commit }, task) {
      return axios.post('tasks', task)
      .then(res => {
        commit('addTask', res.data)
      })
    }
  },
})
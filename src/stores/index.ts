import { defineStore } from 'pinia'


export const useStore = defineStore('main', {
  // other options...
  state: () => {
    return {
      counter: 0,
      name: 'Eduardo',
      isAdmin: true,
    }
  },
  getters: {
    doubleCount: state => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random())
    }
  }
})
import { defineStore } from 'pinia'
import { quizzes } from '../quizzes_demo'

export const useCounterStore = defineStore('data', {
  // ストアオプション
  state: () => ({
    data: quizzes
  })
})

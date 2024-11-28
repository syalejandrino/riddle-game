import { defineStore } from 'pinia';

export const useRiddleStore = defineStore('riddle', {
  state: () => ({
    answers: {
      riddle1: 'a_snowflake',
      riddle2: 'a_daughter',
      riddle3: 'automobile',
      riddle4: 'mailbox'
    },
    userResponse: {
      riddle1: null,
      riddle2: null,
      riddle3: '',
      riddle4: null
    },
    userResults: []
  }),
  getters: {
    getAnswers(state) {
      return state.answers;
    },
    getUserResponse(state) {
      return state.userResponse;
    },
    getUserResults(state) {
      return state.userResults;
    }
  },
  actions: {
    submitRiddleForm(userAnswers) {
      this.userResponse = userAnswers;
      this.calculateScore();
    },
    calculateScore() {
      let score = 0;
      for (const key in this.answers) {
        if (this.answers[key] === this.userResponse[key]) {
          score++;
        }
      }
      this.userResults.push(score);
    }
  }
});

<template>
  <div class="results">
    <h1>Riddle Quiz Results</h1>
    <div v-if="getUserResults.length">
      <table>
        <thead>
          <tr>
            <th>Attempt #</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(result, index) in getUserResults" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ result }}/4</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>No Result History</div>
    <div class="center-btn">
      <button @click="backToQuiz">
        {{ getUserResults.length ? 'Take Quiz Again' : 'Take Quiz!' }}
      </button>
    </div>
  </div>
</template>

<script>
import { useRiddleStore } from '@/stores/riddleStore';
import { mapState } from 'pinia';

export default {
  computed: {
    ...mapState(useRiddleStore, ['getUserResults'])
  },
  methods: {
    backToQuiz() {
      this.$router.push({ path: '/riddle' });
    }
  }
}
</script>

<style scoped>
.results {
  text-align: center;
  margin-top: 20px;
  font-family: 'Arial', sans-serif;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
}

table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 15px;
  text-align: center;
  font-size: 1.2rem;
}

.center-btn {
  margin-top: 20px;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>

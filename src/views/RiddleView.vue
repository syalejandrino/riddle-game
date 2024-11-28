<template>
  <div class="riddle">
    <h1>Riddle Quiz:</h1>
    <RiddleForm @submitForm="submit" />
  </div>
</template>

<script>
import RiddleForm from '../components/RiddleForm.vue';
import { useRiddleStore } from '@/stores/riddleStore';
import { mapActions } from 'pinia';

export default {
  name: 'RiddleView',
  components: {
    RiddleForm
  },
  methods: {
    ...mapActions(useRiddleStore, ['submitRiddleForm']),
    submit(response) {
      console.log("Form Submitted")
      this.submitRiddleForm(response);
      this.$router.push({ path: '/riddle-results' });
    }
  }
};
</script>

<style scoped>
.riddle {
  text-align: center;
  margin-top: 20px;
  font-family: 'Arial', sans-serif;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
}
</style>

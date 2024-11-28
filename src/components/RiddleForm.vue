<template>
  <div class="form-css">
    <p><em class="title">Riddle 1:</em> What flies when it's born, lies when it's alive, and runs when it's dead?</p>
    <input type="checkbox" id="sand" true-value="grain_of_sand" v-model="response.riddle1">
    <label for="sand">A Grain of Sand</label>
    <input type="checkbox" id="eaglet" true-value="an_eaglet" v-model="response.riddle1">
    <label for="eaglet">An Eaglet</label>
    <input type="checkbox" id="snowflake" true-value="a_snowflake" v-model="response.riddle1">
    <label for="snowflake">A Snowflake</label>
    <input type="checkbox" id="fly" true-value="a_fruit_fly" v-model="response.riddle1">
    <label for="fly">A Fruit Fly</label>

    <p><em class="title">Riddle 2:</em> I am a mother's child and a father's child but nobody's son. What am I?</p>
    <input type="radio" id="grandson" value="a_grandson" v-model="response.riddle2" />
    <label for="grandson">A Grandson</label>
    <input type="radio" id="daughter" value="a_daughter" v-model="response.riddle2" />
    <label for="daughter">A Daughter</label>
    <input type="radio" id="father" value="a_father" v-model="response.riddle2" />
    <label for="father">A Father</label>
    <input type="radio" id="uncle" value="an_uncle" v-model="response.riddle2" />
    <label for="uncle">An Uncle</label>

    <p><em class="title">Riddle 3:</em> What ten letter word starts with gas?</p>
    <select v-model="response.riddle3">
      <option disabled value="">Please select one</option>
      <option value="retirement">Retirement</option>
      <option value="automobile">Automobile</option>
      <option value="aberration">Aberration</option>
      <option value="television">Television</option>
    </select>

    <p>
      <em class="title">Riddle 4:</em> I start with M, end with X, and have a never-ending amount of letters. 
      What am I? A mix, mailbox, multiplex, or matrix
    </p>
    <input v-model="response.riddle4" placeholder="answer here" />

    <p v-if="!validateForm" class="error">Please fill out all answers</p>

    <div class="center-btn">
      <button 
        id="submitBtn" 
        @click="submitForm" 
        :disabled="!validateForm">
        Submit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['submitForm'],
  data() {
    return {
      response: {
        riddle1: null,
        riddle2: null,
        riddle3: '',
        riddle4: null
      }
    };
  },
  computed: {
    validateForm() {
      return Object.values(this.response).every(value => value !== null && value !== '');
    }
  },
  methods: {
    submitForm() {
      console.log("Form Submitted");
      this.$emit('submitForm', this.response);
    }
  }
}
</script>

<style scoped>
.form-css {
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  max-width: 600px;
  margin: 30px auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
}

input[type="checkbox"],
input[type="radio"] {
  margin: 10px 0;
}

label {
  margin-left: 5px;
  font-size: 1rem;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.center-btn {
  text-align: center;
  margin-top: 20px;
}

.error {
  color: red;
  font-size: 0.9rem;
}

.title {
  font-weight: bold;
  font-size: 1.2rem;
}
</style>

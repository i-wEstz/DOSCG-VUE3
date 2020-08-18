<template>
  <div class="card text-center">
    <div class="card-header">
      Polynomial Function
    </div>
    <div class="card-body">
      <h5 class="card-title">X, Y, 5, 9, 15, 23, Z  -
        Please create a new function for finding X, Y, Z value
      </h5>
      <p class="card-text">The Results is {{results}}</p>
    </div>
    <div class="card-footer text-muted">
      * point to `/api/polynomial` with body list of number
    </div>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'Polynomial',
  data() {
    return {
      results: {},
    };
  },
  beforeMount() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const { data } = await axios.post('http://localhost:3000/api/polynomial', { list: ['X', 'Y', '5', '9', '15', '23', 'Z'] });
        this.results = data;
      } catch (error) {
        alert('Please check connection to express');
      }
    },
  },
};
</script>

<style scoped>

</style>

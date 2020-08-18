<template>
  <div class="card text-center">
    <div class="card-header">
      Algebra Function
    </div>
    <div class="card-body">
      <h5 class="card-title">If A = 21, A + B = 23, A + C = -21
      <br/>Please create a new function for finding B and C value
      </h5>
      <p class="card-text">The Results is</p>
      <p class="card-text">A is => {{results.a || ''}}</p>
      <p class="card-text">B is => {{results.b || ''}}</p>
      <p class="card-text">C is => {{results.c || ''}}</p>
    </div>
    <div class="card-footer text-muted">
      * point to `/api/algebra/` with params of a (21)
    </div>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'Algebra',
  data() {
    return {
      results: {
        a: '',
        b: '',
        c: '',
      },
    };
  },
  beforeMount() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const { data } = await axios.get('http://localhost:3000/api/algebra/21');
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

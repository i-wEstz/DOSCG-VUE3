<template>
  <!--Grid row-->
  <div class="row justify-content-center">

    <!--Grid column-->
    <div class="col-md-12 mb-6">

      <!--Card-->
      <div class="card text-white bg-dark narrower">

        <!--Card image-->
        <div class="view view-cascade card-header">
          <h5 class="mb-0">Quickest Route</h5>
            No any avoid condition
             , Best guess option selected<br/>
          <p class="small">ref configuration: https://developers.google.com/maps/documentation/directions/overview</p>
        </div>
        <!--/Card image-->

        <!--Card content-->
        <div class="card-body text-center">

          <!--Google map-->
          <div id="map-container-google-9" class="z-depth-1-half map-container-5"
               style="height: 500px">
            <iframe :src="'https://www.google.com/maps/embed/v1/directions?key=' + results.key +'&origin=' + results.source + '&destination=' + results.destination " frameborder="0"
                    style="border:0" allowfullscreen></iframe>
          </div>

        </div>
        <!--/.Card content-->

      </div>
      <!--/.Card-->

    </div>
    <!--Grid column-->

  </div>
  <!--Grid row-->
</template>

<script>
const axios = require('axios');

export default {
  name: 'GoogleMap',
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
        const { data } = await axios.get('http://localhost:3000/api/google-map');
        this.results = data;
      } catch (error) {
        alert('Please check connection to express');
      }
    },
  },
};
</script>

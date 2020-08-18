<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">DOSCG by Kritchapon.C</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
            aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/"><a class="nav-item nav-link active">Home</a></router-link>
        <router-link to="/about"><a class="nav-item nav-link">About</a></router-link>
        <router-link to="/google-map"><a class="nav-item nav-link">Map</a></router-link>
        <router-link to="/polynomial"><a class="nav-item nav-link">Math Polynomial</a></router-link>
        <router-link to="/algebra"><a class="nav-item nav-link">Math Algebra</a></router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>

</style>

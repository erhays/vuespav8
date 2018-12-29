<template>
  <div class="hero-section">
    <main class="uk-section uk-section-default">
      <router-view></router-view>
    </main>
    <footer class="uk-section tm-section-primary uk-section-xlarge uk-padding-remove-bottom">
      <div class="uk-container uk-text-center">
        <p class="uk-text-muted">Built with Vue.js, UIKit + Buttercms.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HeroSection"
};
</script>
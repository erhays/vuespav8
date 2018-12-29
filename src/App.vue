<template>
  <div id="app">
    <div
      class="uk-navbar-container tm-navbar-container uk-sticky uk-active uk-sticky-below uk-sticky-fixed"
    >
      <div class="uk-container uk-container-expand">
        <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>'
          <div class="uk-navbar-left">
            <span uk-navbar-item uk-logo uk-icon="icon: heart"></span>
            <span class="uk-flex" uk-navbar-item>
              <router-link class="uk-margin-left" to="/">Home</router-link>
              <router-link class="uk-margin-left" to="/about">About</router-link>
              <router-link class="uk-margin-left" to="/work">Work</router-link>
              <router-link to="/blog">Blog</router-link>
            </span>
          </div>
        </nav>
      </div>
    </div>
    <router-view/>
    <footer
      class="uk-section uk-background-secondary tm-section-primary uk-padding-remove-bottom uk-position-bottom"
    >
      <div class="uk-container uk-text-center">
        <p class="uk-text-muted">Built with Vue.js, UIKit + Buttercms.</p>
      </div>
    </footer>
  </div>
</template>



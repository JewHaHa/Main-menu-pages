<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">CMS ShoppingCart</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item active" v-for="(p, i) in pages" :key="i">
            <a class="nav-link active" href="#">{{ p.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["pages"]),
  },
};
</script>

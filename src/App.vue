<template>
  <div>
    <!-- Top Bar -->
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand ml-6">
        <router-link to="/" class="navbar-item">
          <img src="@/assets/logo.png" alt="Logo" />
        </router-link>

        <!-- Mobile Menu Button -->
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenu"
          @click="toggleNavbar"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <!-- Right Menu -->
      <div id="navbarMenu" class="navbar-menu mr-6">
        <div class="navbar-end">
          <router-link
            to="/"
            class="navbar-item is-tab"
            :class="{ 'is-active': $route.path === '/' }"
            >Home</router-link
          >
          <router-link
            to="/filmes"
            class="navbar-item is-tab"
            :class="{ 'is-active': $route.path === '/filmes' }"
          >
            Lista de Filmes
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="columns mt-0 p-5" style="background-color: #f2f4f8">
      <!-- Sidebar -->
      <div class="column is-2">
        <FormFilter />
      </div>

      <!-- Main Content (Current Route) -->
      <div class="column" style="background-color: #f2f4f8">
        <DashboardInformation class="mb-4" />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FormFilter from "@/components/FormFilter.vue";
import DashboardInformation from "@/components/DashboardInformation.vue";

// Function to toggle the mobile menu
const toggleNavbar = () => {
  const navbarMenu = document.getElementById("navbarMenu");
  if (navbarMenu) {
    navbarMenu.classList.toggle("is-active");
  }
};
</script>

<style lang="scss">
$primary: #456387;

.navbar-item.is-tab {
  &.is-active {
    color: $primary !important;
    border-bottom-color: $primary !important;
  }
  &:hover {
    color: $primary !important;
    border-bottom-color: $primary !important;
  }
}

.is-primary {
  background-color: $primary !important;
}
.is-primary.is-hovered,
.is-primary:hover {
  background-color: lighten($primary, 10%) !important;
}

.main-fullheight {
  min-height: calc(100vh - 3.25rem);
}
</style>

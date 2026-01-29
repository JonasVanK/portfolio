<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<template>
  <header>
    <div>
      <div class="logoWrapper">

        <RouterLink @click="closeMenu()" class="logo" to="/">
          <img src="@/assets/home.svg" alt="Home Logo" />
        </RouterLink>
        <button class="hamburger" @click="toggleMenu" :aria-expanded="menuOpen" aria-label="Toggle navigation menu">
          <p>Menu</p>
          <div>
            <span :class="{ open: menuOpen }"></span>
            <span :class="{ open: menuOpen }"></span>
            <span :class="{ open: menuOpen }"></span>
          </div>
        </button>
      </div>


      <div class="wrapper" :class="{ open: menuOpen }">
        <nav>
          <RouterLink @click="closeMenu()" class="link" active-class="activeTab" exact-active-class="ActiveTab" to="/">
            Home</RouterLink>
          <RouterLink @click="closeMenu()" class="link" active-class="activeTab" exact-active-class="ActiveTab"
            to="/about">About</RouterLink>
        </nav>
      </div>
    </div>
  </header>
  <div class="container">
    <RouterView />
  </div>


  <footer>
    <div>
      @JonasVanKerkhove
    </div>
  </footer>
</template>

<style scoped>
header>div,
footer>div {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 60rem;
  z-index: 1;
  width: 100%;
  backdrop-filter: blur(.2rem);
}


.container {
  max-width: 60rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  justify-self: center;
  min-height: 100vh;
  backdrop-filter: blur(.2rem);
  padding: 5rem 1rem;
  border: none;
  box-shadow: none;
}

header,
footer {
  background-color: #1f1f1f;
  top: 0;
  position: sticky;
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 1;
}

header {
  position: fixed;
  width: 100%;
}

.logoWrapper {
  display: flex;
  padding: .5rem;
  justify-content: space-between;
}

.hamburger div {
  display: flex;
  gap: .4rem;
  flex-direction: column;
  justify-content: center;
}

.hamburger {
  display: flex;
  gap: .4rem;
  background-color: #1f1f1f;
  outline: none;
  border: none;
  cursor: pointer;
}

.hamburger p {
  color: #00ADFF;
}

.hamburger span {
  display: block;
  width: 1.5rem;
  height: .1rem;
  border-radius: 1rem;
  background-color: #00ADFF;
  transition: .3s;
}

.link {
  border: 2px solid;
  border-color: transparent;
  background-color: #1f1f1f;
  color: #00ADFF;
  border-radius: 0;
  padding: .2rem 1rem;
  transition: .3s;
  text-decoration: none;
}

.link:hover,
.link:active {
  background-color: #00ADFF;
  color: #1f1f1f;
  border-color: #00ADFF;
}

.activeTab {
  background-color: #00ADFF;
  color: #1f1f1f;
}

.logo {
  display: block;
  outline: none;
  border: none;
  background: none;
  width: 2rem;
}

.logo img {
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  display: block;
}

.logo img {
  max-width: 100%;
  max-height: 100%;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  display: flex;
  gap: 0;
  flex-direction: column;
}

.wrapper {
  max-height: 0;
  overflow: hidden;
  margin-left: -100vw;
  transition: cubic-bezier(0.37, 0.24, 0.39, 1.03) .6s;
}

.wrapper.open {
  max-height: 5rem;
  margin-left: 0;
}

.hamburger span.open:nth-child(2) {
  opacity: 0;
}

.hamburger span.open:first-child {
  transform: rotate(45deg) translate(5px, 6px);
}

.hamburger span.open:last-child {
  transform: rotate(-45deg) translate(5px, -6px);
}

@media (min-width: 500px) {
  header>div {
    flex-direction: row;
  }

  nav {
    flex-direction: row;
    gap: .5rem;
  }

  .link {
    border-color: #00ADFF;
    color: #00ADFF;
    border-radius: .7rem;
    padding: .2rem 1rem;
    width: auto;
    height: auto;
  }

  .logoWrapper .hamburger {
    display: none;
  }

  .activeTab {
    background-color: #00ADFF;
    color: #1f1f1f;
  }

  .wrapper {
    max-height: 5rem;
    overflow: auto;
    align-content: center;
  }

  header,
  footer {
    background-color: #1f1f1fc6;
  }
}

@media (min-width: 65rem) {
  .container {
    border: 2px solid #1f1f1f;
    box-shadow: white 0 0 1rem;
  }
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

footer {
  padding: 1rem;
  justify-content: center;
}
</style>

<script setup lang='ts'>
import { ref } from 'vue';

const openMenu = ref<Boolean>(false);

const toggleMenu = (): void => {
  openMenu.value = !openMenu.value;
}

</script>
<template>
  <div class='navbar-container'>
    <nav>
      <div class='navbar-burger-button' v-on:click='toggleMenu'>
        <i class='bi' :class="[openMenu ? 'bi-x-lg' : 'bi-list']"></i>
      </div>
      <div class='navbar-logo-container'>
        <img src='../assets/library_logo_white.svg' />
      </div>
      <ul class='navbar-items' :class="{ 'navbar-items-hide': !openMenu}">
        <li v-on:click='toggleMenu'><i class='bi-x-lg'></i></li>
        <li>Inicio</li>
        <li>Conocenos</li>
        <li>Libros</li>
        <li>Categorias</li>
        <li>Contactanos</li>
        <li><i class='bi bi-search icon'></i></li>
      </ul>
    </nav>
  </div>
</template>
<style scoped>
.navbar-container {
  background-color: var(--navbar-background);
  padding: 8px 0;
  position: sticky;
  top: 0;
  z-index: 999;
}

.navbar-burger-button {
  color: var(--navbar-text);
  align-self: center;
  font-size: clamp(20px, 1rem, 26px);
  font-weight: 600;
  margin-left: 15px;
  cursor: pointer;
}

nav {
  display: flex;
}

/*
.navbar-items-hide {
  position: absolute;
  top: 0;
  left: 0;
}
*/
/*
.navbar-items-show {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: 100vh;
  background-color: var(--navbar-background);
  color: var(--navbar-text);
  text-align: left;
}*/

.navbar-items {
  list-style: none;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--navbar-background);
  width: 75%;
  height: 100vh;
  padding: 50px 0 0 40px;
  color: var(--navbar-text);
  display: flex;
  flex-direction: column;
  gap: 25px;
  transition: all ease 400ms;
}

.navbar-items-hide {
  transform: translateX(-100%);
}

.navbar-items li {
  font-size: clamp(20px, 1.5rem, 30px);
  cursor: pointer;
  width: fit-content;
}

.navbar-logo-container {
  margin: 0 auto;
}

/*
.navbar-container {
  width: 100%;
  background-color: var(--navbar-background);
}

nav {
  max-width: 1024px;
  margin: 0 auto;
  padding: 10px 0;
  color: var(--navbar-text);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-container {
  max-width: 180px;
  width: 100%;
  cursor: pointer;
}

img {
  width: 100%;
}

ul {
  display: flex;
  gap: 40px;
}

ul li {
  list-style: none;
  font-weight: 600;
  cursor: pointer;
}
*/
</style>
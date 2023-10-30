<template>
  <div class='navbar-container'>
    <nav>
      <div class='logo-container'>
        <img src='../assets/library_logo_white.svg' />
      </div>
      <ul>
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

</style>
<template>
  <div class='background-img'>
    <h1>Bienvenido a la Biblioteca</h1>
    <h5>Descripcion de la libraria que tengo que crear mas tarde</h5>
    <button>Comenzar</button>
  </div>
</template>
<style scoped>
  .background-img {
    position: relative;
    width: 100%;
    height: 500px;
    background: 
      url(https://images.pexels.com/photos/6334916/pexels-photo-6334916.jpeg?auto=compress&cs=tinysrgb&w=2000)
      no-repeat
      center
      center 
      fixed;
    background-size: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--hero-text);
  }

  .background-img::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.4;
  }

  h1, h5, button {
    z-index: 100;
  }

  h1 {
    font-size: clamp(50px, 4rem, 80px);
  }

  h5 {
    font-size: clamp(16px, 1rem, 24px);
  }

  button {
    margin-top: 40px;
    padding: 15px 40px;
    border: none;
    border-radius: 6px;
    text-transform: uppercase;
    font-weight: 400;
    cursor: pointer;
  }
</style>
<script setup lang='ts'>
import BookCard from './BookCard.vue';

const example = Array(8).fill(0);
</script>

<template>
  <div class='container'>
    <h2>Libros</h2>
    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
    <div class='container-cards'>
      <BookCard v-for='(demo, key) in example' :key='key' />
    </div>
  </div>
</template>

<style scoped>
  .container {
    max-width: var(--main-block-item-max-width);
    margin: 0 auto;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .container h2 {
    font-size: clamp(32px, 3rem, 64px);
  }

  .container-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 400px;
    gap: 15px;
    margin-top: 50px;
  }
</style>
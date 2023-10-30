<script setup lang='ts'>
import BookCard from './BookCard.vue';

const example = Array(3).fill(0);
</script>
<template>
  <div>
    <h2>Libros</h2>
    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quisquam est aliquid provident ipsam, iure quo? Sapiente, ipsum fuga alias culpa soluta temporibus animi, fugit natus odio aspernatur, blanditiis nihil.</h5>
    <div>
      <BookCard v-for='(demo, key) in example' :key='key' />
    </div>
  </div>
</template>
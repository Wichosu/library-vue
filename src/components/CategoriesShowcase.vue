<script setup lang='ts'>
import CategoryItem from './CategoryItem.vue';

const array = Array(4).fill(0);
</script>

<template>
  <div class='container'>
    <h2>Categorias</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt impedit quae alias esse corporis earum obcaecati nam, quisquam doloribus! Aperiam enim unde consequatur nobis quasi quia ex consequuntur dicta alias?</p>
    <div>
      <CategoryItem v-for='(demo, key) in array' :key='key' />
    </div>
  </div>
</template>

<style scoped>
  .container {
    width: var(--main-block-item-width);
    margin: 0 auto;
    margin-top: 20px;
  }

</style>
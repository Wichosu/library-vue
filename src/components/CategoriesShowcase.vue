<script setup lang='ts'>
import CategoryItem from './CategoryItem.vue';

const array = Array(4).fill(0);

</script>
<template>
  <div>
    <h2>Categorias</h2>
    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt impedit quae alias esse corporis earum obcaecati nam, quisquam doloribus! Aperiam enim unde consequatur nobis quasi quia ex consequuntur dicta alias?</h5>
    <div>
      <CategoryItem v-for='(demo, key) in array' :key='key' />
    </div>
  </div>
</template>
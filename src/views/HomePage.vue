<script setup lang='ts'>
import NavbarItem from '../components/NavbarItem.vue';
import HeroItem from '../components/HeroItem.vue';
import AboutUsItem from '../components/AboutUsItem.vue';
import BooksShowcase from '../components/BooksShowcase.vue';
import CategoriesShowcase from '../components/CategoriesShowcase.vue';
import FooterItem from '../components/FooterItem.vue';

</script>

<template>
    <NavbarItem />
    <!--Hero-->
    <HeroItem />
    <!--About us / Conocenos-->
    <AboutUsItem />
    <!--Libros / Products -->
    <BooksShowcase/>
    <!--Categories / Categorias-->
    <CategoriesShowcase />
    <!--Footer-->
    <FooterItem />
</template>

<style scoped>

</style>
<template>
  <div class='container'>
    <div class='text-container'>
      <h1>Conocenos</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quas consequuntur, aliquid cupiditate laudantium placeat excepturi blanditiis cumque hic rerum tempore repudiandae quos et unde dolorem voluptates officiis, est fuga?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ut repudiandae ipsa inventore debitis possimus corporis consectetur quo tenetur. Doloribus officiis culpa sed et est quae consectetur eum, nisi repellendus.</p>
      <br />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim numquam non, adipisci excepturi sed facere repellat saepe, dolor accusantium rerum asperiores exercitationem distinctio? Sunt sed ipsam error, a architecto Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, odio. Fugiat ratione quae, sint dolore ab libero eaque vero unde voluptatum officia, reiciendis accusamus illum minus, ullam quam! Voluptates, nisi.</p>
    </div>
    <div class='img-container'>
      <img src='https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Imagen' />
    </div>
  </div>
</template>

<style scoped>
  .container {
    width: var(--main-block-item-width);
    margin: 0 auto;
    margin-top: 20px;
  }

  .img-container {
    margin-top: 20px;
  }

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  .text-container {
    text-align: justify;
  }

/*
  .container {
    width: var(--main-block-item-width);
    max-width: var(--main-block-item-max-width);
    height: var(--main-block-item-height);
    margin: 0 auto;
    margin-top: 100px;
    display: flex;
  }

  .text-container {
    width: 50%;
  }

  .text-container h2 {
    font-size: clamp(32px, 3rem, 64px);
    margin: 40px 0;
  }

  .img-container {
    width: 50%;
    height: 100%;
    position: relative;
  }

  .img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  */
</style>
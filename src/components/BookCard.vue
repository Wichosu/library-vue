<template>
  <div class='bookcard-container'>
    <div class='bookcard-container-image'>
      <img src='https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600' alt='imagen' />
    </div>
    <div class='bookcard-container-text'>
      <h4>Lorem Ipsum</h4>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint aliquid</p>
    </div>
  </div>
</template>

<style scoped>
.bookcard-container {
  height: 400px;
}

.bookcard-container-image {
  height: 70%;
}

.bookcard-container-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bookcard-container-text {
  background-color: var(--bookcard-background-text);
  height: 30%;
  padding: 20px 10px;
}

.bookcard-container-text h4 {
  height: 50%;
  text-align: center;
  font-size: clamp(16px, 1.1rem, 20px);
}

.bookcard-container-text p {
  height: 50%;
  text-align: left;
}
</style>
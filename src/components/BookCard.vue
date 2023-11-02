<template>
  <div class='bookcard-container'>
    <div class='bookcard-container-image'>
      <img src='https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600' alt='imagen' />
    </div>
    <div class='bookcard-container-text'>
      <h4>Lorem Ipsum</h4>
      <div class='bookcard-container-text-tags'>
        <p>Etiqueta 1</p>
        <p>Etiqueta 2</p>
        <p>Etiqueta 3</p>
        <p>Etiqueta 4</p>
        <p>Etiqueta 5</p>
        <p>Etiqueta 6</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bookcard-container {
  display: flex;
  flex-direction: column;
}

.bookcard-container-image {
  flex-grow: 2;
}

.bookcard-container-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bookcard-container-text {
  flex-shrink: 1;
  background-color: var(--bookcard-background-text);
  padding: 20px 10px;
}

.bookcard-container-text h4 {
  text-align: center;
  font-size: clamp(16px, 1.1rem, 20px);
  margin-bottom: 10px;
}

.bookcard-container-text-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.bookcard-container-text-tags p{
  border: 1px solid var(--bookcard-text-tags);
  border-radius: 4px;
  padding: 4px 2px;
  font-size: clamp(8px, 0.75rem, 12px);
  color: var(--bookcard-text-tags);
}
</style>
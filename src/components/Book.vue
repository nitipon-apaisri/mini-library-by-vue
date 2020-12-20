<template>
  <article class="book" :style="{ backgroundColor: book.color }">
    <hr />
    <div class="book-title">
      <h1 class="title">{{ book.title }}</h1>
      <p class="author">{{ book.author }}</p>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    book: Object,
  },
};
</script>

<style lang="scss" scoped>
.book {
  overflow: hidden;
  display: flex;
  height: 20rem;
  align-items: flex-end;
  .book-title {
    text-align: left;
    margin-bottom: 10px;
    .title {
      line-height: 1.3rem;
      color: #fff;
      text-decoration: none;
      margin: 2px 0;
      max-width: 150px;
      font-weight: bold;
    }
    .author {
      color: #fff;
      text-decoration: none;
      margin: 2px 0;
      font-weight: normal;
    }
  }
  hr {
    border: 1px solid rgb(63, 63, 63);
    height: 100%;
    margin: 0 10px;
  }
}
</style>
<template>
  <div class="container">
    <article>
      <h1>{{ books.length }} Classic Children Books</h1>
    </article>
    <section class="books-list">
      <router-link
        v-for="book in books"
        :key="book.id"
        :to="'/books/' + book.id"
      >
        <Book :book="book" />
      </router-link>
    </section>
  </div>
</template>

<script>
import Book from "@/components/Book";
export default {
  components: { Book },
  computed: {
    books() {
      return this.$store.state.books;
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 996px;
  margin: auto;
  article {
    text-align: left;
  }
  .books-list {
    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
    a {
      text-decoration: none;
    }
  }
}
</style>
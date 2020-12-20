<template>
  <article>
    <div class="wrapper">
      <div class="bar">
        <router-link to="/"
          ><font-awesome-icon icon="arrow-circle-left"
        /></router-link>
      </div>
      <div class="the-book">
        <section class="left-side">
          <div class="book-cover">
            <Book :book="book" />
          </div>
        </section>
        <section class="right-side">
          <div class="book-info">
            <div class="book-header">
              <h1 class="title">{{ book.title }}</h1>
              <p class="author">By {{ book.author }}</p>
            </div>
            <div class="book-plot">
              {{ book.plot }}
            </div>
            <div class="details">
              <div class="audience detail">
                <h5>Audience:</h5>
                <p>{{ book.audience }}</p>
              </div>
              <div class="1st-published detail">
                <h5>First published:</h5>
                <p>{{ book.year }}</p>
              </div>
              <div class="pages detail">
                <h5>Pages:</h5>
                <p>{{ book.pages }}</p>
              </div>
              <div class="publisher detail">
                <h5>Publisher:</h5>
                <p>{{ book.publisher }}</p>
              </div>
            </div>
            <button>Oh, I want to read it</button>
          </div>
        </section>
      </div>
    </div>
  </article>
</template>

<script>
import Book from "@/components/Book";
export default {
  components: {
    Book,
  },
  computed: {
    book() {
      return this.$root.getBook(this.$route.params.id);
    },
  },
};
</script>

<style lang="scss" scoped>
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
article {
  height: 100vh;
  background-color: rgb(37, 37, 37);
  .wrapper {
    padding: 100px;
    max-width: 768px;
    margin: auto;
    height: 400px;
    .bar {
      text-align: left;
      a {
        font-size: 3rem;
        color: honeydew;
      }
    }
    .the-book {
      color: honeydew;
      display: flex;
      justify-content: space-between;
      margin-top: 50px;
      section.left-side {
        width: 48%;
        .book-cover {
          display: flex;
          align-items: flex-end;
          height: 380px;
          .book {
            width: 100%;
            height: 100%;
          }
        }
      }
      section.right-side {
        width: 48%;
        position: relative;
        .book-info {
          padding: 0 5px;
          text-align: left;
          h1 {
            font-size: 2rem;
          }
          .book-plot {
            max-height: 130px;

            overflow: overlay;
            letter-spacing: 0.0125rem;
            font-size: 0.85rem;
            margin-top: 20px;
          }
          .details {
            background-color: rgb(63, 63, 63);
            padding: 10px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            margin: 10px 0;
            .detail {
              display: flex;
              align-items: center;
              p {
                font-size: 0.8rem;
                margin-left: 5px;
              }
            }
          }
          button {
            padding: 10px;
            position: absolute;
            bottom: 0;
          }
        }
      }
    }
  }
}
</style>
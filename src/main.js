import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import books from "./assets/books.json";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.config.productionTip = false;
library.add(faArrowCircleLeft);
Vue.component("font-awesome-icon", FontAwesomeIcon);
new Vue({
   data() {
      return {
         books: books.books,
      };
   },
   methods: {
      getBook(id) {
         return this.books.find((book) => book.id == id);
      },
   },
   router,
   render: (h) => h(App),
}).$mount("#app");

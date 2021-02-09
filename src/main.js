import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import store from "./store";

Vue.config.productionTip = false;
library.add(faArrowCircleLeft);
Vue.component("font-awesome-icon", FontAwesomeIcon);
new Vue({
   methods: {
      getBook(id) {
         return this.$store.state.books.find((book) => book.id == id);
      },
   },

   router,
   store,
   render: (h) => h(App),
}).$mount("#app");

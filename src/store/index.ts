import Vue from 'vue'
import Vuex from 'vuex'
import {
  Article,
} from "@/types/api/article";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchData:{} as Article.Search.Request
  },
  mutations: {
    changeSearchData(state, req: Article.Search.Request){
      state.searchData = req;
    }
  },
  actions: {
  },
  modules: {
  }
})

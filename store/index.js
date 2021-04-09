import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      jobs: [],
      page:1,
      itemsAddPerLoad : 12,
      totalCount:0,
      loadedItems:[],
      endResult :false,
      filteredResults : [],

    },
    getters: {
      getJobs: state => state.jobs ,
      getPage: state => state.page,
      getLoadedItems: state => state.loadedItems,
      getItemsAddPerLoad: state => state.itemsAddPerLoad,
      getEndResult: state => state.endResult,
      getFilteredResults: state => state.filteredResults,
    },
    actions: {
      async nuxtServerInit({commit , getters}) {
        let res = await this.$axios.$get(`https://jobs.github.com/positions.json?page=${getters.getPage}`)
        commit("setJobs", res);
        commit("setLoadedItems");
      },
      changePage({commit}){
        commit('setPage')
      },

      async loadMore({commit,dispatch,getters}){
        let res = await this.$axios.$get(`https://jobs.github.com/positions.json?page=${getters.getPage}`);
        if(res.length === 0){
          commit("setEndResult")
        }else{
          commit("setJobs", res);
        }
      },

      callSetLoadedItems({commit}){
        commit("setLoadedItems");
      }, 

      changeFilteredResults({commit} , payload){
        commit('setFilteredResults' , payload)
      },
      removeFilteredResult({commit} ){
        commit('setRemoveFilteredResult')
      }
    },
    mutations: {
      setJobs(state, posts) {
        state.jobs = [...state.jobs , ...posts];
      },
      setPage(state ){
        state.page++
      },
      setLoadedItems(state){
        state.loadedItems = [...state.loadedItems ,  ...state.jobs.slice(state.loadedItems.length, state.loadedItems.length + state.itemsAddPerLoad)];
      },
      setEndResult(state){
        state.endResult = true
      },

      setFilteredResults(state , payload){
        state.filteredResults = payload
      },

      setRemoveFilteredResult(state){
        state.filteredResults = []
      }


    }
  });
};

export default createStore;

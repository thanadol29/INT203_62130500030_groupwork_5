app.component('photo-search',{
  data(){
      return{
          showSearchBoxVar: false,
          searchText: ''
      }
  },
  props:{
    pics:{
          type: Array,
          require: true
      }
  },
  template: 
  /*html*/ `
  <div class="pl-52 w-96 h-10 mt-2">
          <input v-show="showSearchBoxVar" v-model="searchText" type="text" placeholder="search picture"
              class="bg-gray-200 text-gray-800 placeholder-gray-400  pl-2 py-1 w-96" />
          <button v-show="!showSearchBoxVar" @click="showSearchBox"
          class="p-2 bg-white rounded flex-1 border-b-2 border-blue-300">
              <i class="material-icons">search</i>
          </button>
          <button v-show="showSearchBoxVar" @click="showSearchBox"
          class="bg-green-500 text-white  py-1 px-6 rounded">
              <p>Cancel</p>
          </button>
      </div>
  `,compute:{
    searchText: function(){
        this.$emit('search-text',this.searchText)
    }
},
  methods:{
      showSearchBox() {
          this.showSearchBoxVar = !this.showSearchBoxVar;
          this.searchText='';
      }
  }
  
})
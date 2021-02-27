app.component('search', {
    template:
    /*html*/ `
    <div class="text-center">
      <center>
        <div class="pl-64 pt-5">
          <a v-show="showmag" @click="[showsearch = !showsearch, mag]">
            <img class="w-10 pr-1" src="images/iconmonstr-magnifier-4-240.png">
          </a>
        </div>
      </center>
      <input type="text" v-show="showsearch" v-model="search" placeholder="Search for the place"
        class="p-2 bg-white rounded flex-1 border-b-2 border-blue-300">
      <button v-show="showsearch" v-model="search"
        @click="[search = '' , showsearch = !showsearch, showmag = !showmag] "
        class="bg-green-500 text-white  py-1 px-6 rounded">cancel</button>
    </div>
    `,
    data(){
        return {
            search:''
        }
    },
    methods:{
        

    }
    }
    


)

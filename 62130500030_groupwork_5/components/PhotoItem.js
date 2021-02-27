app.component('photo-item', {
  props: {
    pics: {
          type: Object,
          require: true
      },
      index: {
          type: Number,
          require: true
      }
  },
  template: 
  
  /*html*/ `
          <div class="grid col-span-2 gap-6 my-6 px-4 md:px-6 lg:px-8">
          <div class="max-w-xl mx-auto px-4 py-4 bg-white shadow-md rounded-lg">
          <button @click="SFav(index)" @dblclick="toggleModel(index)">
                      <img v-bind:src="pics.url" class="w-52" >
                  </button>
              <div>
                  <p>{{ pics.place }}</p>
              </div>
              <span v-show="pics.fav"  class="material-icons" >

              
                  favorite
              </span>
              </div>
          </div>
  `,
  methods: {
    SFav(index){
          this.$emit('show-fav',index);
      }
  }
})
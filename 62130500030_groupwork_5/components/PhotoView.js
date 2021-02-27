app.component('photo-view',{
  props:{
    pics:{
          type: Object,
          require: true
      },
      index:{
          type: Number,
          require: true
      }
  },
  template: `
  <div v-show="pics.showModel">
              <button @click="toggleModel(index)">
                  highlight_off
              </button>
              <!--body-->
              <div >
                  <img v-bind:src="pics.url">
              </div>
          </div>
  `
})
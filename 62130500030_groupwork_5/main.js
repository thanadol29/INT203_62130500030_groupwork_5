// class picture {
//   constructor(name, url, like, bigpic) {
//     this.name = name;
//     this.url = url;
//     this.like = like;
//     this.bigpic = bigpic;
//   }
// }
// การที่โดนแก้ให้แยกออกมาเป็น3อันอย่างงี้ทำให้งงเกินไปให้ใหม่ง่ายกว่า
const app = Vue.createApp({
  data() {
      return {
          pics: [
              { place: 'Moscow',url: 'https://www.planete-energies.com/sites/default/files/styles/media_full_width_940px/public/thumbnails/image/moscow.jpg?itok=J_vRU4rA',  fav: false },
              { place: 'Berlin',url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Berlin_reichstag_west_panorama_2.jpg/1920px-Berlin_reichstag_west_panorama_2.jpg',  fav: false },
              { place: 'Vienna',url: 'https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2020/01/Karlskirche_Wien_abends-1024x576.jpg', place: 'Vienna', fav: false }
          ],
          searchText: ''
      }
  },
   methods: {
      SFav(index) {
          this.pics[index].fav = !this.pics[index].fav;
      }
  },
  computed: {
      countTotal() {
          return this.pics.length;
      },
      search() {
          return this.pics.filter(searchShow => { return searchShow.place.toLowerCase().includes(this.searchText.toLowerCase()) });
      }
  }
})
  // computed: {
  //   filteredList() {
  //     return this.pics.filter(picture => {
  //       return picture.name.toLowerCase().includes(this.search.toLowerCase())
  //     })
  //   },
  //   mag() {
  //     this.showmag = !this.showmag;
  //   },
  //   test(){
  //      return this.pics.length;
  //   }
  //   ,
  // methods: {
  //     clear() {
  //       this.search = '';
  //     }
  //   }
  // },
  





// class picture {
//   constructor(name, url, like, bigpic) {
//     this.name = name;
//     this.url = url;
//     this.like = like;
//     this.bigpic = bigpic;
//   }
// }
// pics: [{ name: "Moscow", url: "https://www.planete-energies.com/sites/default/files/styles/media_full_width_940px/public/thumbnails/image/moscow.jpg?itok=J_vRU4rA", bigpic: false},
//       { name: "Berlin", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Berlin_reichstag_west_panorama_2.jpg/1920px-Berlin_reichstag_west_panorama_2.jpg" , bigpic: false},
//       { name: "Vienna", url: "https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2020/01/Karlskirche_Wien_abends-1024x576.jpg" , bigpic: false}
//       ],

const app = Vue.createApp({
  data() {
      return {
          pictures: [
              { path: 'https://www.planete-energies.com/sites/default/files/styles/media_full_width_940px/public/thumbnails/image/moscow.jpg?itok=J_vRU4rA', description: 'Moscow', showFav: false, showModal: false },
              { path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Berlin_reichstag_west_panorama_2.jpg/1920px-Berlin_reichstag_west_panorama_2.jpg', description: 'Berlin', showFav: false, showModal: false },
              { path: 'https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2020/01/Karlskirche_Wien_abends-1024x576.jpg', description: 'Vienna', showFav: false, showModal: false }
          ],
          searchText: ''
      }
  },
   methods: {
      showFavIcon(index) {
          this.pictures[index].showFav = !this.pictures[index].showFav;
      }, toggleModal(index) {
          this.pictures[index].showModal = !this.pictures[index].showModal;
      }
  },
  computed: {
      countTotal() {
          return this.pictures.length;
      },
      countShow() {
          return this.pictures.filter(s => s.showFav).length;
      },
      search() {
          return this.pictures.filter(searchShow => { return searchShow.description.toLowerCase().includes(this.searchText.toLowerCase()) });
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
  





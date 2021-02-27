app.component('item', {
    template:
    /*html*/ `
    <div class="grid col-span-2 gap-6 my-6 px-4 md:px-6 lg:px-8">
          <div class="max-w-xl mx-auto px-4 py-4 bg-white shadow-md rounded-lg">
            <a @click="picture.bigpic = !picture.bigpic">
              <h1 class="text-3xl pb-3">{{picture.name}}</h1>
              <img class="w-52" v-bind:src="picture.url">
              <a>
                <div class="pt-3">
                  <a @click="picture.like = !picture.like"> <img v-if="picture.like == false"
                      src="images/iconmonstr-heart-thin-240.png" class="w-5">
                    <img v-else src="images/iconmonstr-favorite-3-240.png" class="w-5">
                  </a>
                </div>
          </div>
        </div>
    `

    }
    
    )
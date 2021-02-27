app.component('view',{
  
  },
    template:
    /*html*/ `
        <center>
          <div class="bg-black" >
            <a> <img v-show="picture.bigpic" class="p-2 absolute w-16 right-0" src="images/iconmonstr-x-mark-7-240.png" alt=""></a>
            <div class=" max-w-5xl">
              <a>
                <img v-show="picture.bigpic" v-bind:src="picture.url">
              </a>
            </div>
          </div>
        </center>
    `

    }
    
    )
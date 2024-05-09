require('../scss/template-index.scss');
import {fetchCartData,addToCart} from './utils'
class HomePage {
   constructor() {
        this.title = "shopify theme dev"
        this.init()
     
    }
    homeaddTocart() {
        const cards = document.querySelectorAll(".card__inner")
        if (cards) {
            cards.forEach((el) => {
                el.addEventListener("click", async() => {
                    el.classList.add("loading");
                    const carted= await addToCart(47431400358201,1,()=>{
                        el.classList.remove("loading");
                        // cart open 
                    })
      if(carted){
        window.location.href="/cart"
      }
                })
            })
        }
        // let id = 1234
        // const qunity = 1
        // console.log(id, qunity, "dqdddqd")
    }
   async getcartData(){
        // const cart= await fetchCartData()
        // console.log(cart,"wdwwddww")
     // const carted= await addToCart()
    }
    init() {
        // alert("wfwffw")
        this.homeaddTocart();
      //  this.getcartData()
    }

}
if(document.querySelector("#MainContent")){
    new HomePage()
}


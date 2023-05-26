const button = document.querySelectorAll(".btn")
const value = document.querySelector(".text")

let count = 0;

button.forEach ( function (btns) {
    btns.addEventListener('click', function(e){
      const store = e.currentTarget.classList;

      if(store.contains("increase")) {
        count++
      }

      else if (store.contains("decrease")) {
        count--
      }
      
      else {
        count = 0;
      }

      value.textContent= count;

      if (count>0) {
        value.style.color= "green"
      }
      
      if(count<0){
        value.style.color= "red"
      }

      if(count===0){
        value.style.color= "black"
      }
    })
})
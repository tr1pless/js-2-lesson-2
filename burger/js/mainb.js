class Burger {
    constructor(price,cal) {
        this.price = price;
        this.cal = cal;
     }
     size(){
         if(document.getElementById('small').checked) {
             this.price = 50;
             this.cal = 20;
         } else if(document.getElementById('big').checked){
            this.price = 100;
            this.cal = 40;
         } else {
         return;
        }
     }
     inside(){
        if(document.getElementById('cheese').checked) {
            this.price = this.price +10;
            this.cal = this.cal +20;
        } else if(document.getElementById('salat').checked){
            this.price = this.price +20;
            this.cal = this.cal +5;
        } else if(document.getElementById('potato').checked){
            this.price = this.price +15;
            this.cal = this.cal +10;
        }else {
            return;
        }
     }
     add(){
        if(document.getElementById('spices').checked) {
            this.price = this.price +15;
        } else if(document.getElementById('mayonnaise').checked){
        this.price = this.price +20;
        this.cal = this.cal +5;
        } else {
            return;
        }
    }
}

  let burger = new Burger;
  document.querySelector('.burger-wrap').addEventListener('click', event => {
    if(!event.target.classList.contains('total')){
        return;
    }
    burger.size();
    burger.inside();
    burger.add();
    alert(`Цена за бургер будет: ${burger.price}, а его калорийность: ${burger.cal}`)
    console.log(burger.price);
    console.log(burger.cal);
})


  
  
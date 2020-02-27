var plus=Array.from(document.querySelectorAll(".plus"));
var moin= Array.from(document.querySelectorAll(".moin"));
var like= Array.from(document.querySelectorAll(".like"));
var remove=Array.from(document.querySelectorAll(".remove"));
var quantity=Array.from(document.querySelectorAll(".quantity"));
var unite=Array.from(document.querySelectorAll(".unite"));
var total= document.querySelector(".total");

const totall=()=>{
    var somme=0
    for(let i=0; i<quantity.length; i++) {
    somme+=Number(quantity[i].innerHTML)*Number(unite[i].innerHTML);
    }
    total.innerHTML=somme +"$";

}


plus.map(el=>
    el.addEventListener("click",()=>{
        el.previousElementSibling.innerHTML=Number(el.previousElementSibling.innerHTML)+1;   
        totall()

    })
)
moin.map(el=>
    el.addEventListener("click",()=>{
        if (Number( el.nextElementSibling.innerHTML)>0)
        el.nextElementSibling.innerHTML=Number(el.nextElementSibling.innerHTML)-1;
        totall()

    })
)

remove.map((el,i)=> 
   el.addEventListener("click",()=>{
   el.parentElement.parentElement.remove()
   quantity[i].innerHTML=0;
   totall()
}
   )
    )

like.map(el=>
    el.addEventListener("click",()=>{
    el.style.color==="black" ? el.style.color="red" :el.style.color="black"
})
    )

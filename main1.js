

let skills =document.getElementById("skills");
let span=document.querySelectorAll(".skills span");
let up=document.querySelector(".up");
let gallery=document.getElementById("gallery");
let stats=document.getElementById("stats");
let nunberofstats=document.querySelectorAll(".stats .number");
let started=false;





window.onscroll=function(){
  if(this.scrollY >= skills.offsetTop  ){
    for(let ele of span){
      ele.style.width=ele.getAttribute("data-my-variable") + "%";
    }
  }

  if(this.scrollY >= gallery.offsetTop){
    up.style.display='block';
      up.style.position='fixed';
  }
  else{
  up.style.display='none'
  }



  if(this.scrollY >= stats.offsetTop){
    if(!started){
      nunberofstats.forEach(ele => {
        increase(ele);
      });
      started=true;
    }
  }


}



function increase(el){
  let goal=el.getAttribute("data-goal");
  let interval=setInterval(() => {
      el.textContent++;
     if(el.textContent == goal){
      clearInterval(interval);
     }
  }, 2000 / goal);
}


up.addEventListener("click",()=>{
  window.scrollTo({
    left:0,
    top:0,
    behavior:"smooth"
  })
})
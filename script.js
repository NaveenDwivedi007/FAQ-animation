const btn =document.querySelectorAll(".btn")
const faq =document.querySelectorAll(".faq")

btn.forEach((btn,idx)=>{
  btn.addEventListener("click",()=>{
    
    // with faq
    // faq[idx].classList.toggle("active")
    
    
    // with parentNode
    btn.parentNode.classList.toggle("active")
  })
})

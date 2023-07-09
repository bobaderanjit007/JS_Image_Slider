const nextEl = document.querySelector(".next")
const imgEl = document.querySelectorAll("img")
const prevEl = document.querySelector(".prev")


const imageContainerEl = document.querySelector(".image-container")

let currentImg = 0;
let timeout;
nextEl.addEventListener("click" , ()=>{
    currentImg++
    clearTimeout(timeout);
    upadateImg()
})

prevEl.addEventListener("click", ()=>{
    currentImg--
    clearTimeout(timeout);
    upadateImg()
})

upadateImg()

function upadateImg()
{
    if(currentImg > imgEl.length -1 )
    {
        currentImg = 0;
    }
    else if(currentImg < 0)
    {
        currentImg = imgEl.length -1 ;
    }
    imageContainerEl.style.transform = `translateX(-${currentImg * 500}px)`
    timeout = setTimeout(()=>{
        currentImg++
        upadateImg()
    }, 3000)

}
const modalEl = document.querySelector(".modal")

const triggerMainEl = document.querySelector(".trigger")

const triggerInModel = document.querySelector(".close")

function popUp(){
    triggerMainEl.addEventListener("click", function(){
        modalEl.classList.toggle("open")

    })
}

function  removeModal(){
    triggerInModel.addEventListener("click", function(){
        modalEl.classList.remove("open")
    })
}

window.addEventListener("click", function clickRemoveAnywhere(event){
    if(event.target === modalEl){
        modalEl.classList.remove("open")
    }
} ) 
popUp()
removeModal()
clickRemoveAnywhere()

let menu = document.querySelector(".navv")

var lista = document.querySelector(".menu_linha")

var lista2 = document.querySelector(".menu_linha2")


function menu_mob(){
    if(menu.classList.contains('open') && lista.classList.contains("change")  &&  lista2.classList.contains("change") ){
        menu.classList.remove('open')
        lista.classList.remove("change")
        lista2.classList.remove("change")  
        
    }else{
        menu.classList.add('open')
        lista.classList.add("change")
        lista2.classList.add("change")
    }
    
}













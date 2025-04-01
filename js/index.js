let btnMenu=document.getElementById('btn-abrir-menu')
let menu=document.getElementById('menu-mobile')
let overlay=document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('btn-abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('btn-abrir-menu')
})
overlay.addEventListener('click', ()=>{
    menu.classList.remove('btn-abrir-menu')
})
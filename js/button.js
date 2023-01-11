const button=document.getElementById('btn-menu');
const menu=document.getElementById('nav__menu-mobile')

let stateMenu=false;

button.addEventListener('click',()=>{
    if(stateMenu===false){
        menu.style.display="flex";
        stateMenu=true;
    }else{
        menu.style.display="none";
        stateMenu=false;
    }
});
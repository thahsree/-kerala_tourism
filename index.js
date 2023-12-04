var change = document.getElementById('change');
var button = document.getElementById('ham_button')

button.addEventListener('click',()=>{
    if(button.className == 'menu-button'){
        button.className = 'close-button';
        document.getElementById("nav").style.display = "flex";
    }else{
        button.className = 'menu-button';
        document.getElementById("nav").style.display = "none";
    }
})
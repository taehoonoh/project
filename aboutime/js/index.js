var popup = document.querySelector('.popup');
var menu = document.querySelectorAll('.menu');

var playbt = document.querySelector('.pbutton img')
console.log(playbt);

var body = document.querySelector('body');



menu[0].addEventListener('click',function(){

popup.classList.remove('none');

})

playbt.addEventListener('click',function(){

    popup.classList.add('none');

})

    var loading = document.querySelector('.loading')
    
    window.addEventListener('load',function(){
        loading.style.display = "none";
    })




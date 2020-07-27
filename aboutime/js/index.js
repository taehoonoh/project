var popup = document.querySelector('.popup');
var menu = document.querySelectorAll('.menu');

var playbt = document.querySelector('.pbutton img')
console.log(playbt);

var body = document.querySelector('body');

var iframe = document.querySelector('iframe');

menu[0].addEventListener('click',function(){

popup.classList.remove('none');
iframe.src= null;
})

playbt.addEventListener('click',function(){

    popup.classList.add('none');
    iframe.src= "https://www.youtube.com/embed/7OIFdWk83no?rel=0&autoplay=1&start=16 ";
})

    var loading = document.querySelector('.loading')
    
    window.addEventListener('load',function(){
        loading.style.display = "none";
    })




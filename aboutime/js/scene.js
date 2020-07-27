



var thumFig = document.querySelectorAll('.figImg figure');

var popup = document.querySelector('.popup');

var popupFig = document.querySelectorAll('.popup figure');

var thum

console.log(thumFig[0]);
console.log(popup);
console.log(popupFig[0]);


setTimeout(function(){
    thumFig[0].classList.add('up')
},300)
setTimeout(function(){
    thumFig[1].classList.add('up')
},600)
setTimeout(function(){
    thumFig[2].classList.add('up')
},900)
setTimeout(function(){
    thumFig[3].classList.add('up')
},1200)

for(let i = 0; i<thumFig.length;i++){


thumFig[i].addEventListener('click',function(){
    popup.classList.add('block');
    popupFig[i].classList.add('block');
});
popupFig[i].addEventListener('click',function(){
    popup.classList.remove('block');
    popupFig[i].classList.remove('block');
})

};



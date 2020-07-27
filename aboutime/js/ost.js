var playBt = document.querySelectorAll('.button img');
var playText = document.querySelector('.button p');

var playTitle = ['Ellie Goulding - How Long Will I Love You','Nelly - Dilemma','How Long Will I Love You','Jimmy Fontana - Il Mondo']
var audioSrc = ['music/How.mp3','music/nelly.mp3','music/Howall.mp3','music/Jimmy.mp3']
var audio = new Audio();
var adoIdx = 0;


var coverImg = document.querySelectorAll('.ost figure img');
var home = document.querySelector('.view figure')
var homeview = document.querySelector('.view')

var kkk = document.querySelector('.songtext p');

console.log(kkk);

var audioText;
audioText = 'Ellie Goulding - How Long Will I Love You\n\n';
audioText += 'How long will I love you?\n얼마나 오래 당신을 사랑할까요?\n';
audioText += 'As long as stars are above you\n 하늘 위에 별이 떠있는 한\n';
audioText += 'And longer if I can\n 그리고 가능하다면 더 오랫동안\n';
audioText += 'How long will I need you?\n 얼마나 오래 당신을 필요로 할까요?\n';
audioText += 'As long as the seasons need to Follow their plan\n 사계절이 계획대로 돌아올 필요가 있는 만큼\n';
audioText += 'How long will I be with you?\n 얼마나 오래 당신과 함께 할까요?\n';
audioText += 'As long as the sea is bound to Wash up on the sand\n 바닷물이 모래 위를 씻겨 오가는 한\n';
audioText += 'How long will I want you?\n 얼마나 오래 당신을 원하게 될까요?\n';
audioText += 'As long as you want me too\n 적어도 당신이 저를 원하는 한\n'
audioText += 'And longer by far\n 그리고 훨씬 더 오랫동안요\n'
audioText += 'How long will I hold you?\n 얼마나 오래 당신을 안아 드릴까요?\n'
audioText += 'As long as your father told you\n 당신의 아버지가 말씀하셨던 만큼\n'
audioText += 'As long as you can\n 당신이 가능한 한\n'
audioText += 'How long will I give to you?\n 얼마나 오래 당신에게 드릴까요?\n'
audioText += 'As long as I live through you\n 당신과 함께 삶을 겪어가는 한...\n'
audioText += 'However long you say\n 당신이 얼마나 머루르던지 간에\n'
audioText += 'How long will I love you?\n 얼마나 오래 당신을 사랑할까요?\n'
audioText += 'As long as stars are above you\n 저 하늘에 별들이 떠 있는 한\n'
audioText += 'And longer if I may\n 그리고 가능한다면 더 오랫동안\n'
audioText += 'How long will I love you?\n얼마나 오래 당신을 사랑할까요?\n'
audioText += 'As long as stars are above you\n저 하늘에 별이 떠 있는 동안,'

var audioText2;
audioText2 += 'Nelly - Dilemma\n\n';
audioText2 += 'I love you and I need you\n';
audioText2 += 'Nelly I love you I do neeeeed you but\n';
audioText2 +='No matter what I do all I think\n';
audioText2 += 'about is you\n';
audioText2 +='Even when I m with my boo\n'
audioText2 +='know you know I m crazy\n';
audioText2 +='over you\n';
audioText2 +='No matter what I do all I think\n';
audioText2 +='about is you\n';
audioText2 +='Even when I m with my\n';
audioText2 +='boo y know I m crazy over you\n';
audioText2 +='Check it check it check it uhh\n';
audioText2 +='I met this chick and she just\n';
audioText2 +='moved right up the block from me\n';
audioText2 +='And uhh she got the hots\n';
audioText2 +='for me the finest thing my\n';
audioText2 +='hood done seen\n';
audioText2 +='But oh no oh no she gotta a man\n'
audioText2 +='and a son doh ohhh but that s okay\n'
audioText2 +='Cause I wait for my cue\n'
audioText2 +='and just listen play my position\n'
audioText2 += 'Like a shortstop pick up\n'
audioText2 +='e rything mami hittin\n'
audioText2 +='And in no time no time I\n'
audioText2 +='I plan to make this wah\n'
audioText2 +='one mi i ne and that s for sure\n'
audioText2 += 'Cause I I never been the\n'
audioText2 += 'type to break up a happy home\n'
audioText2 += 'But uh there s somethin\n'
audioText2 += 'bout baby girl I just can t\n'
audioText2 += 'leave alone\n'
audioText2 += 'So tell me ma what  s it\n'
audioText2 += 'gonna be She said\n'
audioText2 += 'You don t know what you\n'
audioText2 += 'mean to me\n'
audioText2 += 'No matter what I do all\n'
audioText2 += 'I think about is you\n'
audioText2 += 'Even when I m with my boo\n'
audioText2 += 'know you know I m crazy\n'
audioText2 += 'over you\n'
audioText2 += 'No matter what I do all I think\n'
audioText2 += 'about is you\n'
audioText2 += 'Even when I m with my\n'
audioText2 += 'boo y know I m crazy over you\n'

var audioText3;
audioText3 = 'How Long Will I Love You(abouttime Main)\n\n'
audioText3 += 'How long will I love you?\n';
audioText3 += 'As long as stars are above you\n ';
audioText3 += 'And longer if I can\n ';
audioText3 += 'How long will I need you?\n ';
audioText3 += 'As long as the seasons need to Follow their plan\n';
audioText3 += 'How long will I be with you?\n ';
audioText3 += 'As long as the sea is bound to Wash up on the sand\n ';
audioText3 += 'How long will I want you?\n ';
audioText3 += 'As long as you want me too\n '
audioText3 += 'And longer by far\n'
audioText3 += 'How long will I hold you?\n'
audioText3 += 'As long as your father told you\n '
audioText3 += 'As long as you can\n '
audioText3 += 'How long will I give to you?\n'
audioText3 += 'As long as I live through you\n '
audioText3 += 'However long you say\n '
audioText3 += 'How long will I love you?\n '
audioText3 += 'As long as stars are above you\n '
audioText3 += 'And longer if I may\n '
audioText3 += 'How long will I love you?\n'
audioText3 += 'As long as stars are above you\n'



var audioText4;
audioText4 = 'Jimmy Fontana - Il Mondo\n\n'
audioText4 += 'No Stanotte amore non ho più pensato a te\n'
audioText4 += 'Ho aperto gli occhi per guardare intorno a me\n'
audioText4 += 'E intorno a me girava il mondo come sempre\n'
audioText4 += 'Gira, il mondo gira\n'
audioText4 += 'Nello spazio senza fine\n'
audioText4 +='Con gli amori appena nati\n'
audioText4 +='Con gli amori già finiti\n'
audioText4 +='Con la gioia e col dolore\n'
audioText4 +='Della gente come me\n'
audioText4 +='Oh mondo\n'
audioText4 +='Soltanto adesso io ti guardo\n'
audioText4 +='Nel tuo silenzio io mi perdo\n'
audioText4 +='E sono niente accanto a te\n'
audioText4 +='Il mondo\n'
audioText4 +='Non si è fermato mai un momento\n'
audioText4 +='La notte insegue sempre il giorno\n'
audioText4 +='Ed il giorno verrà\n'
audioText4 +='Stanotte amore non ho più pensato a te\n'
audioText4 +='Ho aperto gli occhi per guardare intorno a me\n'
audioText4 +='E intorno a me girava il mondo come sempre\n'
audioText4 +='Gira, il mondo gira\n'
audioText4 +='Nello spazio senza fine\n'
audioText4 +='Con gli amori appena nati\n'
audioText4 +='Con gli amori già finiti\n'
audioText4 +='Con la gioia e col dolore\n'
audioText4 +='Della gente come me\n'
audioText4 +='Oh mondo, soltanto adesso io ti guardo\n'
audioText4 +='Nel tuo silenzio io mi perdo\n'
audioText4 +='E sono niente accanto a te\n'
audioText4 +='Il mondo\n'
audioText4 +='Non si è fermato mai un momento\n'
audioText4 +='La notte insegue sempre il giorno\n'
audioText4 +='Ed il giorno verrà'
audioText4 +='Il mondo\n'
audioText4 +='Non si è fermato mai un momento\n'
audioText4 +='La notte insegue sempre il giorno\n'
audioText4 +='Ed il giorno verrà\n'
audioText4 +='Stanotte amore non ho più pensato a te\n'
audioText4 +='A te\n'




var victory = document.querySelector('.songtext p')

console.log(victory);


var kkkText = [
    audioText,    
    audioText2,
    audioText3,
    audioText4
];

function updateButton() 
{ 
    
    var audioState = audio.paused;
    audioState ? this.src ='img/sub_ost/btstop.png': this.src = 'img/sub_ost/bt1.png';
    audio.src = audioSrc[adoIdx];    
    audioState ? audio.play() : audio.pause();      
    
    coverImg[adoIdx].style.transform ="rotate(360deg)"
    coverImg[adoIdx].style.opacity= "1";
    victory.style.opacity = "1";
}
   

    
    
    // for(var i=0; i<4;i++){
        
    // }



playBt[1].addEventListener('click', updateButton); 

function ani(){
    home.style.left = -adoIdx * 372 +"px" ;
    coverImg[adoIdx].style.opacity= "0.5";
    
}


playBt[0].addEventListener('click',function(){
    audio.pause();
    if(adoIdx>0){adoIdx--;}
    ani();
    playText.textContent = playTitle[adoIdx];
    kkk.textContent = kkkText[adoIdx]
    playBt[1].src="img/sub_ost/bt1.png";
   
    
});


playBt[2].addEventListener('click',function(){
    audio.pause();
    if(adoIdx<3){adoIdx++;}
    ani();
    playBt[1].src="img/sub_ost/bt1.png";
    playText.textContent = playTitle[adoIdx];
    kkk.textContent = kkkText[adoIdx];
    

//  audio.paused ? playBt[1].src ='img/sub_ost/btstop.png': playBt[1].src = 'img/sub_ost/bt.png';
//  audio.pause();
//  audio.currentTime=0;
//  audio1.play();
//  playBt[1].src ='img/sub_ost/btstop.png';


});
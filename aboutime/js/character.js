var actorImg = document.querySelectorAll('.thumImg img');

var conImg = document.querySelector('.left img');
var imgText = document.querySelectorAll('.imgText p');
var imgList = document.querySelectorAll('.filmo img');
var left =document.querySelector('.left');
var right =document.querySelector('.right');

var actor = [
    {
        pic:'img/sub_character/actor2.jpg',
        txt1:'Character / Mary',
        txt2:'Rachel McAdams',
        txt3:'An American working for a London publisher, Mary unknowingly lives the same few days over and over again. She meets Tim, a shy British man who has the ability to travel back in time and relive event',
        film:[
            'img/sub_character/film1.jpg',
            'img/sub_character/film2.jpg',
            'img/sub_character/film3.jpg',
            'img/sub_character/film4.jpg']
    },
    {
        pic:'img/sub_character/actor3.jpg',
        txt1:'Character / Tim',
        txt2:'Domhnall Gleeson',
        txt3:'"When Tim’s dad tells him that the men in his family have the ability to go to the past and change certain events, he’s excited. But it doesn’t take many trips for him to learn that while you can tweak the past, it only creates a new present with just as many problems. It won’t be easy navigating these challenges when he meets Mary, the love of his life.',
        film:[
            'img/sub_character/film5.jpg',
            'img/sub_character/film6.jpg',
            'img/sub_character/film7.jpg',
            'img/sub_character/film8.jpg']
    },
    {
        pic:'img/sub_character/actor4.jpg',
        txt1:'Character / Tim dad',
        txt2:'Bill Nighy',
        txt3:'Bill Nighy is an award-winning British character actor. He was born William Francis Nighy on December 12, 1949 in Caterham, Surrey, England, to Catherine Josephine (Whittaker), a psychiatric nurse from Glasgow, and Alfred Martin Nighy, who was English-born and managed a garage in Croydon.',
        film:[
            'img/sub_character/film9.jpg',
            'img/sub_character/film10.jpg',
            'img/sub_character/film11.jpg',
            'img/sub_character/film12.jpg',
           ]
    },
    {
        pic:'img/sub_character/actor1.jpg',
        txt1:'Directed&Writing',
        txt2:'Richard Curtis',
        txt3:'is a British creenwriter, producer, and  film  director.[1] One of Britain s most  successful comedy screenwriters,  he is known primarily for  romantic comedy films, among them Four Weddings  and a Funeral (1994), Notting Hill (1999), Bridget Joness  Diary (2001), Love Actually (2003),  About Time (2013) and Yesterday (2019).',
        film:[
            'img/sub_character/film13.jpg',
            'img/sub_character/film14.jpg',
            'img/sub_character/film15.jpg',
            'img/sub_character/film16.jpg',
            
        ]
    }
]

console.log(imgText);

for(let i =0; i<actorImg.length;i++){
    actorImg[i].addEventListener('click',function(e){
        dataChange(i);
        for(let i = 0; i<actorImg.length;i++){
        
            actorImg[i].style.opacity="0.2";
            event.target.style.opacity="1";
        }
    });
}

function dataChange(num){
    conImg.src = actor[num].pic;
    imgText[0].textContent = actor[num].txt1;
    imgText[1].textContent = actor[num].txt2;
    imgText[2].innerHTML =  actor[num].txt3;
    imgList[0].src = actor[num].film[0];
    imgList[1].src = actor[num].film[1];
    imgList[2].src = actor[num].film[2];
    imgList[3].src = actor[num].film[3];
}

// actorImg[0].addEventListener('click',function(){
  
//     conImg.src = "img/sub_character/actor2.jpg"
//     imgText[1].textContent = "Rachel McAdams"
//     imgText[0].textContent = "Character / Mary"
//     imgText[2].innerHTML = "An American working for a London publisher, Mary unknowingly lives the same few days over and over again. She meets Tim, a shy British man who has the ability to travel back in time and relive event"
//     imgList[0].src = "img/sub_character/film1.jpg"
//     imgList[1].src = "img/sub_character/film2.jpg"
//     imgList[2].src = "img/sub_character/film3.jpg"
//     imgList[3].src = "img/sub_character/film4.jpg"

  
  
// });

// actorImg[1].addEventListener('click',function(){
    
//     conImg.src = "img/sub_character/actor3.jpg"
//     imgText[1].textContent = "Domhnall Gleeson"
//     imgText[0].textContent = "Character / Tim"
//     imgText[2].textContent = "When Tim’s dad tells him that the men in his family have the ability to go to the past and change certain events, he’s excited. But it doesn’t take many trips for him to learn that while you can tweak the past, it only creates a new present with just as many problems. It won’t be easy navigating these challenges when he meets Mary, the love of his life."
//     imgList[0].src = "img/sub_character/film5.jpg"
//     imgList[1].src = "img/sub_character/film6.jpg"
//     imgList[2].src = "img/sub_character/film7.jpg"
//     imgList[3].src = "img/sub_character/film8.jpg"
 
//         for(let i = 0; i<actorImg.length;i++){
        
//         actorImg[i].style.opacity="0.5";
//         event.target.style.opacity="1";
        
//     }


// });

// actorImg[2].addEventListener('click',function(){

//     conImg.src = "img/sub_character/actor4.jpg"
//     imgText[1].textContent = "Bill Nighy"
//     imgText[0].textContent = "Character / Tim dad"
//     imgText[2].textContent = "Bill Nighy is an award-winning British character actor. He was born William Francis Nighy on December 12, 1949 in Caterham, Surrey, England, to Catherine Josephine (Whittaker), a psychiatric nurse from Glasgow, and Alfred Martin Nighy, who was English-born and managed a garage in Croydon."
//     imgList[0].src = "img/sub_character/film9.jpg"
//     imgList[1].src = "img/sub_character/film10.jpg"
//     imgList[2].src = "img/sub_character/film11.jpg"
//     imgList[3].src = "img/sub_character/film12.jpg"
//     for(let i = 0; i<actorImg.length;i++){
//         actorImg[i].style.opacity="0.5";
//         event.target.style.opacity="1";
//         left.classList.add('hihi')
//         right.classList.add('hihi2')
//         left.classList.remove('hihi')
//         right.classList.remove('hihi2')
//     }

// });

// actorImg[3].addEventListener('click',function(){
    

  
//     conImg.src = "img/sub_character/actor1.jpg";
//     imgText[1].textContent = "Richard Curtis"
//     imgText[0].textContent = "Directed&Writing "
//     imgText[2].innerHTML = "is a British creenwriter, producer, and  film  director.[1] One of Britain's most  successful comedy screenwriters,  he is known primarily for  romantic comedy films, among them Four Weddings  and a Funeral (1994), Notting Hill (1999), Bridget Jones's  Diary (2001), Love Actually (2003),  About Time (2013) and Yesterday (2019)."
//     imgList[0].src = "img/sub_character/film13.jpg"
//     imgList[1].src = "img/sub_character/film14.jpg"
//     imgList[2].src = "img/sub_character/film15.jpg"
//     imgList[3].src = "img/sub_character/film16.jpg" 
//         for(let i = 0; i<actorImg.length;i++){
        
//         actorImg[i].style.opacity="0.5";
//         event.target.style.opacity="1";
//         left.classList.add('hihi')
//         right.classList.add('hihi2')
//     }
// });






